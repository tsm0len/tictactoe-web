var board = [ , , , , , , , , ];
var turn = "X";
function nextturn() {
    if (turn==="X") {
        turn = "O";
    } else {
        turn = "X";
    }
}
function reset() {
    board = [ , , , , , , , , ];
    document.getElementById("a1").textContent = "_";
    document.getElementById("b1").textContent = "_";
    document.getElementById("c1").textContent = "_";
    document.getElementById("a2").textContent = "_";
    document.getElementById("b2").textContent = "_";
    document.getElementById("c2").textContent = "_";
    document.getElementById("a3").textContent = "_";
    document.getElementById("b3").textContent = "_";
    document.getElementById("c3").textContent = "_";
}

function move(cellid, cell) {
    if (board[cell]==null) {
        board[cell] = turn;
        document.getElementById(cellid).textContent = turn;
        nextturn();
    } else {
        alert("this cell is already taken");
    }
}
