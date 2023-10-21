const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let board;
let turn = 'X';
let win = '';

export function App() {
    return (
        <div>
            <h1>Tic-React-Toe</h1>
            <h1>Tic-Tac-Toe</h1>

            <h2>It's X's turn!</h2>

            <div class="flex-container flex-column">
                <div class="flex-container flex-wrap" id="board">
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                </div>

                <button id="reset-button">Reset</button>
            </div>
        </div>
    )
}
