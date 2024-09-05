import { Context } from './context/Context';
import Memo from './Memo/Memo';
import Parent from './Memo/Parent';
//import { Input } from './components/atoms/login/Input';
//import { Label } from './components/atoms/login/Label'
import Login from './components/page/Login'
function App() {
  return (
    <div className="App">
      {/* <Memo></Memo> */}
      {/* <Parent /> */}
      {/* <Context></Context>
      <Label>아이디를 입력하세요</Label>
      <Input></Input> */}
      <Login></Login>
    </div>
  );
}

export default App;
// 전역 상태를 관리해서 로그인 구현
// 회원가입도 전역 상태를 업데이트해서 구현
// 스타일 컴포넌트를 사용해서 스타일 레이아웃

// 다 한 사람은 form을 커스텀 훅으로 제작(패쓰)