const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function App() {
    const [board, setBoard] = React.useState(["","","","","","","","",""]);
    const [turn, setTurn] = React.useState("X");
    const [gameOver, setGameOver] = React.useState(false);
    const [win, setWin] = React.useState(null);

    function handleTurn(event) {
        const idx = parseInt(event.target.id, 10);
        if (!gameOver && board[idx] === "") {
            const newBoard = [...board];
            newBoard[idx] = turn;
            setBoard(newBoard);
            setTurn(turn === 'X' ? 'O' : 'X');
            checkForWinner(newBoard);
        }
    }

    function checkForWinner(currentBoard) {
        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
                setWin(currentBoard[a]);
                setGameOver(true);
                return;
            }
        }
        if (currentBoard.every(square => square !== "")) {
            setWin('Draw');
            setGameOver(true);
        }
    }

    return (
        <div>
            <h1>Tic-React-Toe</h1>
            <h1>Tic-Tac-Toe</h1>
            {gameOver ? (
                <h2>{win ? `${win} wins!` : 'It\'s a draw!'}</h2>
            ) : (
                <h2>It's {turn}'s turn!</h2>
            )}

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
                    setWin(null);
                }}>
                    Reset
                </button>
            </div>
        </div>
    );
}
