let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#uscore");
const compScorePara=document.querySelector("#cscore");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
  const randIdx= Math.floor(Math.random()*3) ;
  return options[randIdx];
}


const drawGame=()=>{
    msg.innerText="Game Tied,PLay Again!!";
    msg.style.background="#A64EA4";
};



const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
         msg.innerText=`You Won!! ${userChoice} beats ${compChoice}`;
         msg.style.background="#649263"
    }
   else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`You Lost!!. ${compChoice} beats ${userChoice}`;
    msg.style.background="#E11A14"
   }
}


const playGame=(userChoice)=>{
const compChoice=genCompChoice();
  if(userChoice==compChoice){
    drawGame();
  }
  else{
    let userWin=true;
    if(userChoice==="rock"){
           userWin=compChoice==="paper"?false:true; 
    }
  
    if(userChoice==="paper"){
           userWin=compChoice==="scissors"?false:true; 
    }
    if(userChoice==="scissors"){
        userWin=compChoice==="rock"?false:true; 
 }
showWinner(userWin,userChoice,compChoice);  }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
     const userChoice=choice.getAttribute("id");
  playGame(userChoice);
    });
});