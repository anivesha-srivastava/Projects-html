let userScore=0;
let compScore=0;
let msg=document.querySelector("#msg");
const choices= document.querySelectorAll(".choice");
let userScorepara=document.querySelector("#user");
let compscorepara=document.querySelector("#comp");
let reset=document.querySelector("#reset");

const gencompChoice=()=>{
    const options=["rock","paper","scissor"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}

const draw=()=>{
    msg.innerText="Game Draw , Try Again";
    msg.style.backgroundColor="#415866";
}

function showWin(userWin,userChoice,compChoice){
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You Won! , Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscorepara.innerText=compScore;
        console.log("computer");
        msg.innerText=`You Lost! , ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor="#FF3348";
    }
}

const playGame=(userChoice)=>{
    const compChoice= gencompChoice();
    if(userChoice===compChoice){
        draw();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="rock"?true:false;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWin(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})
function Rest(){
    userScore=0;
    compScore=0;
    userScorepara.innerText=0;
    compscorepara.innerText=0;
    msg.innerText="Play your move";
    msg.style.backgroundColor="#153243";
}
reset.addEventListener("click",Rest);
















