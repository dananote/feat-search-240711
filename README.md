# feat-search-240711

# 요구 사항 분석

## 검색폼 구현
- 검색 상품명 입력 폼이 위치한다.
- 검색어를 입력하면 X 버튼이 보이고 없으면 X 버튼을 숨긴다. 
- 엔터를 입력하면 검색 결과가 보인다.
- X 버튼을 클릭하거나 검색어를 삭제하면 검색 결과를 삭제한다.

## 검색 결과 구현
- 검색 결과가 검색폼 아래 위치한다. 검색 결과가 없을 경우와 있을 경우를 구분한다.
- X 버튼을 클릭하면 검색폼이 초기화 되고, 검색 결과가 사라진다.

## 턥 구현
- 추천 검색어, 최근 검색어 탭이 검색폼 아래 위치한다.
- 기본으로 추천 검색어 탭을 선택한다.
- 각 탭을 클릭하면 탭 아래 내용이 변경된다.

## 추천 검색어 구현
- 번호, 추천 검색어 이름이 목록 형태로 탭 아래 위치한다.
- 목록에서 검색어를 클릭하면 선택된 검색어의 검색 결과 화면으로 이동한다.

## 최근 검색어 구현
- 최근 검색어 이름, 검색일자, 삭제 버튼이 목록 형태로 탭 아래 위치한다.
- 목록에서 검색어를 클릭하면 선택된 검색어로 검색 결과 화면으로 이동한다.
- 목록에서 X 버튼을 클릭하면 선택된 검색어가 목록에서 삭제된다.
- 검색시마다 최근 검색어 목록에 추가된다.