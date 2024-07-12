import { emit, on } from "../helpers.js";

const tag = "[View]";

export default class View {
  constructor(element) {
    console.log(tag, "constructor");
    if (!element) throw "no element";

    this.element = element;
    this.originalDisplay = this.element.style.display || "";

    return this;
  }

  hide() {
    this.element.style.display = "none";
    return this;
  }

  show() {
    this.element.style.display = this.originalDisplay;
    return this;
  }

  on(eventName, handler) {
    on(this.element, eventName, handler);
    return this;
  }

  // 커스텀 이벤트
  emit(eventName, data) {
    emit(this.element, eventName, data);

    // 모든 this의 객체를 반환 = SearchFormViews
    return this;
  }
}
