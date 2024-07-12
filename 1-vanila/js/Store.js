const tag = "[store]";

export default class Store {
  constructor(storage) {
    console.log(tag, "constructor");
    if (!storage) throw "no storage";
    this.storage = storage;

    // 검색 결과 화면이 노출 되어야함
    this.searchResult = [];
    // 검색 키워드
    this.searchKeyword = "";
  }

  // searchKeyword에 해당하는 상품을 검색
  search(keyword) {
    this.searchKeyword = keyword;
    this.searchResult = this.storage.productData.filter((product) =>
      product.name.includes(keyword)
    );
  }
}
