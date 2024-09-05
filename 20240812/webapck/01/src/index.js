const root = ReactDOM.createRoot(document.querySelector("#root"));

// 컴포넌트를 만들지 않고
// 직접생성?
// react 일반적인 dom과 다르고 reactdom의 생성 방식은 다르다.
// 첫번째 매개변수 태그명
// 두번째가 자식 요소로 포함
// 이 태그의 내용
root.render(React.createElement("div", null, "하이"));