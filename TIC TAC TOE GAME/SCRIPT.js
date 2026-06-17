let boxes =document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGame=document.querySelector("#new");
let winnermsg=document.querySelector("#winner");
let hiding=document.querySelector(".hide");
let turnO=true;
const wins=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    })
})
function disable(){
    boxes.forEach((box)=>{
    box.disabled=true;
    })
}
function undisable(){
    boxes.forEach((box)=>{
    box.disabled=false;
    box.innerText="";
    })
}
const winnermsgg=(winner)=>{
    winnermsg.innerText=`The Winner Is ${winner}`;
    hiding.classList.remove("hide");
    disable();
}
const checkwinner=()=>{
    for(let pattern of wins){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1 ===pos2 && pos2 === pos3){
                console.log("winner",pos1);
                winnermsgg(pos1);
            }
        }
    }
}
const resetgame=()=>{
    turnO=true;
    undisable();
    hiding.classList.add("hide");
}
newGame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);












