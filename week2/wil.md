### ! tab

-을 하면 기본 골격이 나온다는 사실.

### 속성

id 기능

- id는 고유한 무언가임
- 하나의 id는 하나의 태그만을 의미함

### 이사하기

코드 줄이 너어어무 많다면 당연히 분리하고 싶어질거임.
그래서 html에 있을 코드 일부를 js로 옮기는 작업을 할거임.

연결방법 (mdn 공식 사이트 확인하시오.)
src기능 활용하기

스크립 태그는 body 위에쯤에 적는거 추천함.

const number = document.getElementById("counting-num");
number.textContent = 100;
->dom을 조작한것!

### 코드 역할들\

- document.getElementById 로 연결
- incButton으로 사용자 행동 이벤트 인식해서 실행해라.

### 이론

브라우저 동작 방식

- html 파일 열기
- html 파일 읽기(파싱)
- DOM 트리 만들기
- 화면에 표시하기

#### 파싱

scrip 태그가 나오는 순간 파일을 읽고, 실행한 다음에 이어서 코드 읽는.그러면 html파일을 늙게 읽게되어 화면이 늦게 뜸. 그리고 순서가 꼬일 수 있음.
