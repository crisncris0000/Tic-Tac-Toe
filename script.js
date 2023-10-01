let board;

let turn = 'X'

let win;

const squares = Array.from(document.querySelectorAll('#board div'));

const messages = document.querySelector('h2');

const winningCombos = [[0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6]];

document.getElementById('board').addEventListener('click', handleTurn);

function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    render();
}

function render() {
    board.forEach((mark, index) => {
        squares[index].textContent = mark;
    });

    messages.textContent = `It's ${turn}'s turn!`;
}

function handleTurn(event) {
    let idx = squares.findIndex((square) => {
        return square === event.target;
    })

    board[idx] = turn;

    console.log(board);

    turn = turn === 'X' ? 'O' : 'X';

    render();
}

function getWinner() {
    
}

init();