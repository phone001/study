import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // store에 컴포넌트를 주입
  // App컴포넌트의 모든 자식 컴포넌트가 전역 store상태에 접근할 수 있게
  // react-redux에서 hook을 제공을 하고 provider도 제공 
  // 사용할 전역상태 인스턴스 store를 전달(키는 store)
  <Provider store={store}>
    <App />
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
