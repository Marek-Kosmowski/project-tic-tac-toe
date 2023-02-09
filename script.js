const gameCells = document.querySelectorAll('.cell');
const resetBtn = document.querySelector('.reset-button');
const gameBoard = Array(9).fill(null);

const signX = 'X';
const signO = 'O';
let currentPlayer = signX;

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function hasWon() {
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            alert(`${gameBoard[a]} has won!`)
            gameCells.forEach(cell => {
                cell.classList.add('disable');
            })
        }
    }
    if (checkDraw()) {
        alert('DRAW')
    }
}

function checkDraw() {
    return [...gameCells].every(cell => {
        return cell.classList.contains('xsign') || cell.classList.contains('osign');
    })
}

function playGame(e) {

    const id = e.target.id;
    gameBoard[id] = id;

    if (gameBoard[id] === id) {
        gameBoard[id] = currentPlayer;
    }

    if (!e.target.innerText) {
        e.target.innerText = currentPlayer
        e.target.classList.add('disable');
    }
    if (currentPlayer === signX) {
        e.target.classList.add('xsign');
    } else if (currentPlayer === signO) {
        e.target.classList.add('osign');
    }
    currentPlayer = currentPlayer === signX ? signO : signX;
    hasWon();

}

function removeDisable() {
    gameCells.forEach(cell => {
        cell.classList.remove('disable', 'xsign', 'osign');
    })
}

gameCells.forEach(cell => {
    cell.addEventListener('click', playGame);
})

function resetGame() {
    gameCells.forEach(cell => {
        cell.innerText = '';
    })
    for (let i = 0; i < gameBoard.length; i++) {
        gameBoard[i] = null;
        currentPlayer = signX;
    }
    removeDisable();
}

resetBtn.addEventListener('click', resetGame);
alert('HELLO WORLD!!')