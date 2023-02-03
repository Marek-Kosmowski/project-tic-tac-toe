const Player = (sign) => {
    this.sign

    function getSign() {
        console.log(sign);
    }
    return {
        getSign
    };
}

const winingConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



const gameBoard = (() => {
    'use strict';
    const gameContainer = document.querySelector('.game-container')
    const gameBoard = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
    //code to display array data on the page
    function displayArray() {
        for (let i = 0; i < gameBoard.length; i++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('cell');
            gameContainer.appendChild(newDiv);
        }
    }
    //function reated for testing purposes
    // function clickTest() {
    //     const element = document.querySelectorAll('.sign');
    //     element.forEach(el => {
    //         el.addEventListener('click', () => {
    //             el.classList.add('color');
    //         })
    //     })
    // }


    return {
        displayArray,
    };

})();

gameBoard.displayArray();

const marek = Player('test');
marek.getSign();