# CSS
## 기초 이론
## 문법
## 선택자
## 결합자

### 1. 기초이론
html이 구조를 위한 내용이면 css는 모양을 위한 시트
브라우저의 요소에 모양을 적용시킨다.

```css
    선택자{
        속성:값
    }
```
선택자 : 어떤 요소에 스타일을 적용시킬 건지

폴더 구조에서 *을 사용하기 되면 
/* : 루트경로에 있는 모든 파일
/** : 루트경로에 있는 모든 폴더

```css
    * {} 모든 요소의 선택자
    div {} 유형선택자
    .class {} 클래스 선택자 다중사용이 가능함
    #id {} id 선택자 한명만 있어야함 
```

결합자 : 여러 선택자를 연결해서 스타일을 적용
```css
    div div{} 자손결합자(모든 자손)
    .클래스1 .클래스2 {} 자손결합자
    div > div 자식 결합자(한단계 아래있는 요소)
    div + div 인접결합자(자식이 아닌 같은 위치의 요소에 영향)
```

의사 클래스 / 요소 : html을 작성할 때 작성하지 않은 요소를 선택할 때
```css
    div:hover {} 의사 클래스, 마우스 커서를 올렸을 때 커서의 모양이 바뀐다.
    div:after {} 의사 요소, 
```

```css
    .box{
        /*block의 요소*/
        display:block;
        /*inline요소*/
        display:inline;
        /*
        해당 속성을 가진 요소의 자식 요소의 정렬 방식을 정한다.
        block인지 inline인지 중요하지 않음
        정렬시 브라우저에서 표현되는 범위를 벗어날 수 있다
        */
        display:flex;
        /*요소를 안보여줌. 아예 지워버림*/
        display:none;
        display:block;

        /*보이지만 않고 해당공간은 존재*/
        display:visible;
        display:hidden;

        /*부모의 속성을 가져와서 값을 적용, 많이 사용하지 않음*/
        display:inherit;

        /*태그가 원래 가지고 있던 속성으로 초기화, 많이 사용하지 않음*/
        display:initial;
    }

    .wh{
        /*
        태그의 너비를 지정
        px - 픽셀만큼 지정
        max-content - 자식 내용의 크기만큼 너비를 차지
        min-content - 자식 내용의 최소 크기만큼 너비를 차지

        */
        width:100px;
        /*태그의 높이를 지정*/
        height:100px;

        /*설정한 너비 이상으로 넓어질 수 없다.*/
        max-width:100px;
        /*설정한 너비 이하로 줄어들지 않는다.*/
        min-width:100px;
    }
    .content{
        width:100px;
        height:100px;
        /*자식 태그가 부모영역 이상으로 넘어가면 보이지 않게 처리 */
        overflow:hidden;
        /*자식의 태그가 부모의 영역 밖으로 나왔을 때 스크롤 효과를 줌*/
        overflow:scroll;
        /*좌우로 자식태그가 넘어가면 안보이게 처리*/
        overflow-x:hidden;
        overflow-x:scroll;
        /*상하로 자식태그가 넘어가면 안보이게 처리*/
        overflow-y:hidden;
        overflow-y:scroll;
        /*태그의 투명도를 설정할 수 있다.*/
        opacity:0.1;

        /*태그의 내용에서 글자의 크기를 지정`*/
        font-size:16px;

        /*태그의 글자의 굵기*/
        font-weight:500;

        /*글자의 색 지정*/
        color:red;

        /*글자의 정렬을 가운데로*/
        text-align:center;
        /*글자를 오른쪽으로 정렬*/
        text-align:end;
        /*글자 왼쪽으로 정렬*/
        text-align:start;

        /*텍스트의 가운데 선을 추가*/
        text-decoration : overline;

        /*텍스트의 밑줄을 추가*/
        text-decoration: underline;
        /*텍스트 꾸밈요소 제거*/
        text-decoration:none;
        
        /*글자의 간격 조절*/
        letter-spacing:10px;

        /*
        간격조절
        요소의 외부간격
        top left right bottom
        */
        margin : 1px;

        /*top bottom 1px, left right 2px*/
        margin : 1px 2px;

        /*top 1 bottom 2px, left 3 right 4px*/
        margin : 1px 2px 3px 4px;

        /*
        요소의 내부간격
        마진과 동일
        */
        padding:1px;

    }

```

블록요소는 크기를 지정해도 한줄을 다 차지함

실습 : 할일 리스트를 표의 형태로 만든다.flex

flex-direction: column; 부모요소에 적용

과제 : 레이아웃을 구성하고 회원강비 폼 완성하기(사람인 형식으로)
1.이름 입력
2.성별(체크박스)
3. 나이입력
4. 이메일
5. 전화번호
6. 회원가입 버튼
