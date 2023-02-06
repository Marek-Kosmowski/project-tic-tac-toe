// const getCell = document.querySelectorAll('.cell');
// const title = document.querySelector('.header-title');
// const xChoice = 'X';
// const oChoice = 'O';
// let currentPlayer = xChoice;
// const winConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ]

// // function getData() {
// //     getCell.forEach(el => {
// //         el.addEventListener('click', () => {
// //             el.innerHTML = 'X'
// //         })

// //     })
// // }

// let gameBoard = Array(9).fill(null);


// getCell.forEach(cell => {
//     cell.addEventListener('click', getChoice);
// })

// function getChoice(e) {
//     const id = e.target.id;
//     if (!gameBoard[id]) {
//         gameBoard[id] = currentPlayer;
//         e.target.innerText = currentPlayer;
//         if (playerHasWon() !== false) {
//             title.innerText = `${currentPlayer} has won!`
//             let winning_blocks = playerHasWon();
//             console.log(winning_blocks)
//         }

//         currentPlayer = currentPlayer == xChoice ? oChoice : xChoice;
//     }
// }

// function playerHasWon() {
//     for (let i = 0; i < winConditions.length; i++) {
//         const [a, b, c] = winConditions[i];
//         if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
//             return gameBoard[a, b, c]
//         }
//     }
// };


// const Player = (sign) => {
//     this.sign;

//     function getSign() {
//         console.log(sign)
//     }
//     return {
//         getSign
//     };
// }


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
// function hasWon(){}
// function resetGame(){}
// function drawResult(){}

function hasWon() {
    // const checkWin = [a, b, c]
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            alert('win')
        }
    }
}

function playGame(e) {
    const id = e.target.id;
    gameBoard[id] = id;
    if (gameBoard[id] === id) {
        gameBoard[id] = currentPlayer;
        hasWon();

    }

    e.target.innerText = currentPlayer;
    console.log(gameBoard);
    console.log(currentPlayer)
    currentPlayer = currentPlayer === signX ? signO : signX;
}



gameCells.forEach(cell => {
    cell.addEventListener('click', playGame);
})

function resetGame() {
    gameCells.forEach(cell => {
        cell.innerText = '';
    })
    gameBoard.forEach(el => {
        el = ''
    })
}
resetBtn.addEventListener('click', resetGame);