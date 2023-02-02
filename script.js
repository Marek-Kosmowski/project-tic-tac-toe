const players = () => {

}


const gameBoard = (() => {
    'use strict';
    const gameContainer = document.querySelector('.game-container')
    const gameBoard = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
    //code to display array data on the page
    function displayArray() {
        for (let i = 0; i < gameBoard.length; i++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('sign');
            newDiv.innerHTML = gameBoard[i];
            gameContainer.appendChild(newDiv);
        }
    }
    return {
        displayArray
    };

})();

gameBoard.displayArray();