import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient({
  defualtOptions: {
    qeuries: {
      staleTime: 0, // 썩는 시간을 주는 옵션, infinity는 무한으로 새로운 업데이트가 불가능하다.
      gcTime: 0, // 기본값이 5분
      retry: 0, // 요청이 실패하면 몇번 재요청하고 오류를 발생시킬지
      suspense: true,
    },
  }
})
root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={true} buttonPosition={"top-left"} />
    <App />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
