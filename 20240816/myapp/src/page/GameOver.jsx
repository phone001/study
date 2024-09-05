
const GameOver = ({ count, Restart }) => {
    return (
        <div className="game-manager">
            <h2>Game Over</h2>
            <h4>당신의 점수는 {count}</h4>
            <button onClick={Restart}>재시작하기</button>
        </div>
    )
}

export default GameOver;