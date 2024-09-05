// 전역 상태를 관리하는 인스턴스 생성
// store 전역상태를 관라하는 인스턴스 
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { reducer } from '../reducer'

//createStore = store 인스턴스를 생성

// 가게를 차리고
// 메뉴판이 필요함

// 사가와 thunk
// 미들웨어 추가
// thunk를 사용하는 이유는 미들웨어로 액션 크리에이터 함수를 만들어서 비동기 치리를 할 수 있다.

// applyMiddleware: 미들웨어를 추가하는 함수
export const store = createStore(reducer, applyMiddleware(thunk));
