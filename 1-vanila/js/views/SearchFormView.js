import { on, qs } from "../helpers.js";
import View from "./View.js";

/**
 * extends 키워드는 클래스 선언이나 클래스 표현식에서 다른 클래스의 자식인 클래스를 생성하는데 쓰임
 */
const tag = "[SearchFormView]";
export default class SearchFormViews extends View {
  constructor() {
    console.log(tag, "constructor");
    /**
     * super는 상위요소의 constructor에 넘겨주는건가?
     * 여기서는 View 클래스의 element에 전달
     **/
    super(qs("#search-form-view"));

    // 두번째 인자로 전달하는 것은 scope로 선택할 범위 선택
    this.inputElement = qs("[type=text]", this.element);
    this.resetElement = qs("[type=reset]", this.element);

    // 처음에 인풋 필드에 내용이 입력되기 전까지는 reset 버튼이 숨겨져야됨
    this.showRestButton(false);
    // TODO 최초에만 호출 되는데 어떻게 이벤트가 발생할때마다 아래 이벤트들이 호출되지?
    // SearchFormView 의 이벤트를 수신하는 곳
    this.bindEvent();
  }

  // visible 인자에 따라서 보여줄지 안보여줄지 결정 (기본값은 true)
  showRestButton(visible = true) {
    this.resetElement.style.display = visible ? "block" : "none";
  }

  // evnet를 바인딩 하는 함수
  bindEvent() {
    /**
     * 두번째 인자는 이벤트의 타입으로 keyup이라는 것은 키보드에 손가락을 때었을때
     * 서번째 인자는 콜백함수
     */
    on(this.inputElement, "keyup", () => this.handleKeyup());
    // event는 이벤트 리스너가 트리거 될때 브라우저가 자동으로 던져주는 객체
    this.on("submit", (event) => this.handleSubmit(event));
    on(this.resetElement, "click", () => this.handleReset());
  }

  // 키보드 입력시 엑스버튼 노출 여부를 결정
  handleKeyup() {
    /**
     * 구조 분해 할당으로 value값 추출.
     * 객체를 구조 분해 할당 할 때는 key 값이 동일해야한다.
     * 만약 다르게 하려면
     * const {value:newName} = this.inputElement
     */
    const { value } = this.inputElement;
    // 검색창에 한 글자라도 입력하면 reset 버튼 노출
    this.showRestButton(value.length > 0);

    // 키보드로 지웠을때도 검색창의 검색기록이 삭제되야하므로 handleReset 호출
    if (value.length <= 0) {
      this.handleReset();
    }
  }

  /**
   * handleSubmit과 handleReset 은 검색창에서 이벤트를 제어해야하기 떄문에
   * 커스텀 이벤트를 만들어서 Controller에 전달
   */

  // 엔트를 입력했다는 이벤트를 듣는 역할
  handleSubmit(event) {
    /**
     * submit event가 발생하면 서버로 페이지 요청을 다시 해서 화면이 깜빡 거리기 때문에
     * 이를 막아야함
     */
    event.preventDefault();
    console.log(tag, "handleSubmit");
    // 검색 결과
    const { value } = this.inputElement;
    this.emit("@submit", { value });
  }

  // reset 버튼을 눌렀을때 이벤트를 듣는 역할
  handleReset() {
    console.log(tag, "handleReset");
    this.emit("@reset");
  }
}
