var board = [ , , , , , , , , ];
var turn = "X";
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
}
function win(cell)
{
    if ([0, 3, 6].includes(cell) && board[cell]!=null)
    {
        if (board[cell]==board[cell+1] && board[cell+1]===board[cell+2]) 
        {
            alert("win");
        }
    }
    else if ([1, 4, 7].includes(cell) && board[cell]!=null)
    {
        if (board[cell]==board[cell+1] && board[cell]===board[cell-1])
        {
            alert("win");
        }
    }
    else if ([2, 5, 8].includes(cell) && board[cell]!=null)
    {
        if (board[cell]==board[cell-1] && board[cell-1]===board[cell-2])
        {
            alert("win");
        }
    }
    else if (cell===0) {
        
    }
}
function move(cellid, cell)
{
    if (board[cell]==null)
    {
        board[cell] = turn;
        document.getElementById(cellid).textContent = turn;
        win(cell);
        nextturn();
    }
    else
    {
        alert("this cell is already taken");
    }
}
