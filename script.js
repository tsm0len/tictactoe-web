let board = [ , , , , , , , , ];
let turn = "X";
let win = false;
function nextturn()
{
    if (turn==="X")
    {
        turn = "O";
    }
    else
    {
        turn = "X";
    }
}
function reset()
{
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
    turn = "X";
    win = false;
}
const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
/*function CheckForWin(array) {
    if (board[array[0]]===board[array[1]] && board[array[1]]===board[array[2]] && board[array[0]]!=null)
    {
        return true;
    }
}*/
function move(cellid, cell)
{
    if (win===false)
    {
        if (board[cell]==null)
        {
            board[cell] = turn;
            document.getElementById(cellid).textContent = turn;
            combinations.forEach(array => {
                if (board[array[0]]===board[array[1]] && board[array[1]]===board[array[2]] && board[array[0]]!=null)
                {
                    alert(turn + " wins!")
                    win = true;
                }
            });
            nextturn();
        }
        else
        {
            alert("this cell is already occupied");
        }
    }
    else
    {
        alert("restart game");
    }
}
