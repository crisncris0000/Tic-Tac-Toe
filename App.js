const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function App() {
    const board = ["", "", "", "", "", "", "", "", ""];
    const turn = "X";
    const gameOver = false;


    function handleTurn(event) {
        console.log(event.target, event.target.id)
        let idx = event.target.id
        if (gameOver == false) {
          board[idx] = turn
          turn = turn === 'X' ? 'O' : 'X'
          //  win = getWinner()
          // render()
        }
      }

    return (
        <div>
            <h1>Tic-React-Toe</h1>
            <h1>Tic-Tac-Toe</h1>
            <h2>It's {turn}'s turn!</h2>

            <div className="flex-container flex-column">
                <div className="flex-container flex-wrap" id="board" onClick={handleTurn}>
                    {board.map((value, idx) => (
                        <div className="square" key={idx} id={idx}>
                            {value}
                        </div>
                    ))}
                </div>

                <button id="reset-button" onClick={() => {
                    setBoard(["", "", "", "", "", "", "", "", ""]);
                    setTurn('X');
                    setGameOver(false);
                }}>
                    Reset
                </button>
            </div>
        </div>
    );
}
