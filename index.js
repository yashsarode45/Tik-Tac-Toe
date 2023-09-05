const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function initGame() {
    currentPlayer="X";
    gameGrid=["","","","","","","","",""];
    boxes.forEach((box,index)=>{
        box.innerText="";
        boxes[index].style.pointerEvents = "all";
        box.classList.remove("win");//watch here
    });
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}
initGame();

function checkGameOver() {
    let answer = "";
    winningPositions.forEach((position)=>{
        if((gameGrid[position[0]]!=="" || gameGrid[position[1]]!=="" || gameGrid[position[2]]!=="")
        &&(
            (gameGrid[position[0]]===gameGrid[position[1]]) &&
            (gameGrid[position[1]]===gameGrid[position[2]])))

        {
            if (gameGrid[position[0]]==="X") {
                answer="X";
            }
            else{
                answer="Y";
            }
            
            boxes.forEach((box)=>{
                box.style.pointerEvents="none";
            })
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    })
    
    if (answer!=="") {
        newGameBtn.classList.add("active");
        gameInfo.innerText=`Winner is - ${answer}`;
        return
    }

    if (!gameGrid.includes("")) {       
        newGameBtn.classList.add("active");
        gameInfo.innerText="Game Tied!";
    }
}

function swapTurn() {
    if (currentPlayer === "X") {
        currentPlayer = "O"
    }
    else{
        currentPlayer = "X"
    }

    gameInfo.innerText = `Current Player - ${currentPlayer}`;

}

function handleClick(index) {
    if (gameGrid[index]==="") {
        boxes[index].innerText = currentPlayer;
        gameGrid[index]= currentPlayer;
        boxes[index].style.pointerEvents = "none";
        swapTurn();
        checkGameOver();
    }
}

boxes.forEach((box,index)=>{
    box.addEventListener("click", ()=>{
        
        handleClick(index);
    })
})

newGameBtn.addEventListener("click", initGame);