const tag = "[Controller]";

// class로 만들어진 모든 객체들을 여기서 컨트롤
export default class Controller {
  /**
   * constructor(store, views)  이렇게 넣으면 views.serachForm 이렇게 써야해서 전개구문 하여 사용
   */
  constructor(store, { searchFormView, searchResultView }) {
    console.log(tag, "constructor");
    this.store = store;
    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;

    this.subscribeViewEvents();
  }

  // View의 이벤트를 수신하는 곳
  subscribeViewEvents() {
    this.searchFormView
      .on("@submit", (event) => this.search(event.detail.value))
      .on("@reset", () => this.reset());
  }

  // 엔터를 입력했을때 실행
  search(keyword) {
    console.log(tag, "search", keyword);

    this.store.search(keyword);
    this.render();
  }

  // reset을 클릭했을때 실행
  reset() {
    console.log(tag, "reset");
    this.store.searchKeyword = "";
    this.store.searchResult = [];
    this.render();
  }

  render() {
    if (this.store.searchKeyword.length > 0) {
      this.searchResultView.show(this.store.searchResult);
      return;
    }

    this.searchResultView.hide();
  }
}
