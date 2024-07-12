import { qs } from "../helpers.js";
import View from "./View.js";

const tag = "[SearchResultView]";

export default class SearchResultView extends View {
  constructor() {
    console.log(tag, "constructor");

    super(qs("#search-result-view")); // this.element에 저장
    this.template = new Template();
  }

  /**
   * data에 따라서 DOM을 동적으로 만들어야함
   * 검색 결과를 배열 형태로 받음
   * controller에 의해서 show 함수가 호출될것임
   */
  show(data = []) {
    this.element.innerHTML =
      data.length > 0
        ? this.template.getList(data)
        : this.template.getEmptyMessage();

    super.show(); // View의  서드를 호출
  }
}

/**
 * DOM을 만드는 형태의 템플릿
 */
class Template {
  // 검색 결과가 없을때
  getEmptyMessage() {
    return `
      <div class="empty-box">검색결과가 없습니다.</얖>
    `;
  }

  // 검색 결과가 있을때
  getList(data = []) {
    return `
      <ul class="result">
        ${data.map(this._getItem).join()}
      </ul>
    `;
  }

  _getItem({ imageUrl, name }) {
    return `
      <li>
        <img src="${imageUrl}" alt="${name}" />
        ${name}
      </li>
    `;
  }
}
