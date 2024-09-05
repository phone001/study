import Count from "./components/Count";
import Login from "./components/Login";
import Todo from "./components/Todo";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>loading..</>}>
        <Todo />

      </Suspense>
      {/* <Count /> */}
      <Suspense fallback={<>로딩중</>} >
        <Login />
      </Suspense>
    </div>
  );
}

export default App;
