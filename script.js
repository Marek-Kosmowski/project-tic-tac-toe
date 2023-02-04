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


const gameCells = document.querySelectorAll('.cell');


const gameBoard = Array(9).fill(null);


// function hasWon(){}
// function resetGame(){}
// function drawResult(){}


// gameCells.forEach(cell => {
//     cell.addEventListener('click', () => {
//         cell.innerHTML = 'X';
//     })
// })