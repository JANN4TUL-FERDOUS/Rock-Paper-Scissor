let userScore=0;
let botScore=0;

const Choices=["rock","paper","scissors"];

Choices.forEach(id=>{
  const el=document.getElementById(id);
  el.addEventListener("click",()=>playGame(id));
});

function playGame(userChoice){
  const botChoice=Choices[Math.floor(Math.random()*3)];
  
  const resultBox=document.getElementById("result_box");
  resultBox.classList.add("show");

  document.getElementById("user_choice").src=userChoice+".png";
  document.getElementById("bot_choice").src=botChoice+".png";

  const resultText=document.getElementById("result_text");
  let msg="";
  if(userChoice===botChoice){
    msg="It's a Draw!";
    resultText.style.color="orange";
  }
  else if((userChoice==="rock" && botChoice=="scissors") ||
    (userChoice==="paper" && botChoice=="rock")||
    (userChoice==="scissor" && botChoice=="paper")){
      msg="You Won!";
      resultText.style.color="green";
      userScore++;
  }
  else{
    msg="You Lost!";
    resultText.style.color="red";
    botScore++;
  }
  resultText.textContent=msg;
  document.getElementById("user_score").textContent = userScore;
  document.getElementById("bot_score").textContent = botScore;
}
document.getElementById("reset").addEventListener("click",()=>{
  userScore=0;
  botScore=0;
  document.getElementById("user_score").textContent=userScore;
  document.getElementById("bot_score").textContent=botScore;
  document.getElementById("result_box").classList.remove("show");
});
