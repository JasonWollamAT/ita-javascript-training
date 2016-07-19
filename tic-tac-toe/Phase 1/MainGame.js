/**
 * Created by Jason Wollam on 6/25/2016.
 */

//MainGame.js

module.exports = function() {
    var isX = true;
    var player = "X";
    var gameBoard = ['E', 'E', 'E',
                    'E', 'E', 'E',
                    'E', 'E', 'E'];

    var winningConditions = {
        "horizontal" : [[0, 1, 2,],[3, 4, 5], [6, 7, 8]],
        "vertical" : [[0, 3, 6], [1, 4, 7], [2, 5, 8]],
        "diagonal" : [[0, 4, 8], [2, 4, 6]]
    }

    var checkForWinningMove = function() {
        for (var winCon in winningConditions) {
            var arrWinCon = winningConditions[winCon];
            for (var i = 0; i < arrWinCon.length; i++) {
                if (gameBoard[arrWinCon[i][0]] === player && gameBoard[arrWinCon[i][1]] === player && gameBoard[arrWinCon[i][2]] === player) {
                    return true;
                }
            }
        }
        return false;
    }

    function setPlayer() {
        player = (isX)? "X" : "O";
        isX = !isX;
    }

    function setBoard(boardIndex) {
        gameBoard[boardIndex] = player;
    }

    var playTurn = function(boardIndex){
        setPlayer();
        setBoard(boardIndex);


        return checkForWinningMove();
    }

    return {PlayTurn : playTurn,
            Player : player}
}();