import { Routes, Route } from "react-router-dom";
import Main from './component/page/main/Main';
import SignIn from "./component/page/signin/SignIn";
import SignUp from "./component/page/signup/SignUp";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/mypage" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
