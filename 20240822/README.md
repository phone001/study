# redux reate-redux
> react의 전역상태 관리를 redux로 사용할 때 유용한 hook을 라이브러리가 제공해준다. 

## redux
> 스토어를 전역 상태관리로 하나의 메모리 공간에 별개로 저장한다.
> 컴포넌트에서 전여그이 상태값이 필요할 때 store에 접근해서 데이터를 참조 혹은 수정 
1. 스토어
2. action
3. reducer

> action은 store에 전달할 데이터의 값, action을 보내서 데이터의 상태를 업데이트한다.
> dispatch함수를 실행해서 dispatch({액션객체의 내용}) => reducer함수를 실행시키고 반환값으로 상태를 업데이트

## redux 동작
- 컴포넌트  => dispatch => action => reducer=> store

```sh

npm i redux react-redux redux-thunk
npm i redux-thunk

```

## action create
> 미들웨어 

### 로그인 페이지 만들기
> 데이터베이스 사용해서 mysql사용해서
> 액션 크리에이터 함수 만들고
> redux store 만들고
> 회원가입 로그인 구현


## recoil


