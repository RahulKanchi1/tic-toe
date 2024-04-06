let currentPlayer = 'X'; 
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let boxes = document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function() {
        if (gameBoard[i] === '' && !checkWinner()) {
            gameBoard[i] = currentPlayer;
            this.innerText = currentPlayer;
            if (checkWinner()) {
                alert(currentPlayer + ' wins!');
            } else if (gameBoard.every(square => square !== '')) {
                alert("It's a draw!");
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
    ];
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}
function rest() {
    
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];

    
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = '';
        boxes[i].disabled = false; 
    }
}