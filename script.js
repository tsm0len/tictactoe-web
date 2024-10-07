let board = [ , , , , , , , , ]; //board state
let turn = "X"; //current turn
let win = false; //is current game won or not
let moves = 0; //number of moves made
let scores = [0, 0, 0]; //wins for [x, o, draw]
const cellIDs = ["a1","a2","a3","b1","b2","b3","c1","c2","c3"]; //all cell's ids
const combinations = [ //all win combinations
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function nextturn() { //change turn after move
    if (turn==="X")
    {
        turn = "O";
    }
    else
    {
        turn = "X";
    }
}
function reset() { //reset game
    document.getElementById("win").style.display = "none";
    board = [ , , , , , , , , ];
    cellIDs.forEach(id => {
        document.getElementById(id).textContent = "_";
        document.getElementById(id).style.backgroundColor = "#e4f1fe";
    });
    turn = "X";
    win = false;
    moves = 0
}
function move(cellid, cell) {
    place(cellid, cell, true);
}
function place(cellid, cell) { //make move in game
    if (win===false) {
        if (board[cell]==null) {
            board[cell] = turn;
            console.log("placed on: "+cell);
            moves++;
            document.getElementById(cellid).textContent = turn;
            combinations.forEach(array => {//================
                if (board[array[0]]===board[array[1]] && board[array[1]]===board[array[2]] && board[array[0]]!=null) {
                    array.forEach(element => {
                        document.getElementById(cellIDs[element]).style.backgroundColor = "#0044ff";
                    });
                    document.getElementById("win").textContent = turn + " WINS";
                    document.getElementById("win").style.display = "block";
                    win = true;
                    if (turn==="X") {
                        scores[0]++;
                    } else {
                        scores[1]++;
                    }
                    document.getElementById("scorex").textContent = "X: " + scores[0].toString();
                    document.getElementById("scoreo").textContent = "O: " + scores[1].toString();
                }
            });
            if (moves===9 && win===false) {
                document.getElementById("win").textContent = "DRAW";
                document.getElementById("win").style.display = "block";
                win = true;
                scores[2]++;
                document.getElementById("scoredraw").textContent = "DRAW: " + scores[2].toString();
            }
            nextturn();
            botmove(choseCell());
        }
    } else {
        reset();
    }
}
function botmove(x) {
    place(cellIDs[x], x, false);   
}
function choseCell() {
    let chosen = Math.floor(Math.random()*9);
    //while
    let testboard = board;
    for (let i=0;i<9;i++) {
        if (testboard[i]==null) {
            testboard[i] = turn;
            combinations.forEach(array => {
                if (testboard[array[0]]===testboard[array[1]] && testboard[array[1]]===testboard[array[2]] && testboard[array[0]]!=null) {
                    chosen = i;
                    console.log("win on "+i);
                }
            });
            testboard[i] = null;
        } 
    }
    return chosen;
}