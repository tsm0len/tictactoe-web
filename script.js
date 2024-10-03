let board = [ , , , , , , , , ];
let turn = "X";
let win = false;
const cellIDs = ["a1","a2","a3","b1","b2","b3","c1","c2","c3"]
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
    document.getElementById("win").style.display = "none";
    board = [ , , , , , , , , ];
    cellIDs.forEach(id => {
        document.getElementById(id).textContent = "_";
        document.getElementById(id).style.backgroundColor = "#e4f1fe";
    });
    turn = "X";
    win = false;
}
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
                    array.forEach(element => {
                        document.getElementById(cellIDs[element]).style.backgroundColor = "#0044ff";
                    });
                    document.getElementById("win").textContent = turn + " WINS";
                    document.getElementById("win").style.display = "block";
                    win = true;
                }
            });
            nextturn();
        }
    }
    else
    {
        reset();
    }
}
