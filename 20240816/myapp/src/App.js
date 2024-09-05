import Game from './page/Game';
import BoomGame from './page/BoomGame'
import { Route, Routes } from 'react-router-dom'
// function App() {
//   return (
//     <div className="App">

import { useEffect, useState } from "react";
import Main from './page/Main';
import GameOver from './page/GameOver';

//     </div>
//   );
// }

const App = () => {
  // 생명 주기 
  // react hook : 기능을 가져온다(자주 사용하는 유용한 기능들을 hook 만들어 두었다.
  // 접두사로 use가 붙는다.(규칙)

  // 상태 변수는 값을 가지고 있는 변수가 하나 상태변수 전환 함수 두기지를 가지고 있어야 한다.
  // useState의 반환 데이터 타입은 배열의 타입을 반환한다.
  // 첫번째가 상태변수
  // 두번째가 setState함수
  // useState함수를 호출할 때 전달하는 인자값이 초기값
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState();

  // const increment = () => {
  //   setCount(count + 1);
  // }
  //첫번째 매개변수로 함수를 전달 두번째 매개 변수로 배열의 요소로 주시할 값을 전달
  // 배열이 빈배열이면 mount의 생명주기 함수
  // useEffect(() => {
  //   console.log(count)
  // }, [])

  // 업데이트만 처리를 하려면 조건문 처리를 해야함
  // 여러개를 사용해도 된다.
  // useEffect(() => {
  //   console.log(count);
  //   console.log("나는 mount와 업데이트");
  // }, [count])
  // useEffect(() => {
  //   console.log(count);
  //   console.log("나는 mount와 업데이트");

  //   // willUnMount는 return으로 처리
  //   // 반환한 함수를 컴포넌트가 사라졌을 때 호출
  //   return () => {
  //     return () => { console.log("컴포넌트 삭제") }
  //   }
  // }, [count, name])
  return (
    <div>
      {/* 하이
      count : {count}
      <button onClick={increment}>증가</button>

      name : {name}
      <button onClick={() => { setName('newName') }}>이름변경</button> */}
      {/* <Game></Game> */}
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/game" element={<Game></Game>}></Route>
        <Route path="/boom" element={<BoomGame></BoomGame>}></Route>
        <Route path="/gameover" element={<GameOver></GameOver>}></Route>
      </Routes>
    </div>
  )
}


export default App;
