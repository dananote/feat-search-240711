import Controller from "./Controller.js";
import Store from "./Store.js";
import storage from "./storage.js";
import SearchFormViews from "./views/SearchFormView.js";

document.addEventListener("DOMContentLoaded", main);

const tag = "[main]";

// 어플리케이션 실행시 가장 먼저 호출되는 함수
function main() {
  console.log(tag, "main");
  const store = new Store(storage);

  const views = {
    // element, resetElement, originalDisplay
    searchFormView: new SearchFormViews(),
  };

  new Controller(store, views);
}
