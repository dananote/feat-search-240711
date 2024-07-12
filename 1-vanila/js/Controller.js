const tag = "[Controller]";

// class로 만들어진 모든 객체들을 여기서 컨트롤
export default class Controller {
  /**
   * constructor(store, views)  이렇게 넣으면 views.serachForm 이렇게 써야해서 전개구문 하여 사용
   */
  constructor(store, { searchFormView }) {
    console.log(tag, "constructor");
    this.store = store;
    this.searchFormView = searchFormView;

    this.subscribeViewEvents();
  }

  // View의 이벤트를 수신하는 곳
  subscribeViewEvents() {
    this.searchFormView
      .on("@submit", (event) => this.search(event.detail.value))
      .on("@reset", this.reset());
  }

  search(keyword) {
    console.log(tag, keyword);
  }

  reset() {
    console.log(tag, "reset");
  }
}
