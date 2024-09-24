/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
const totalScore ={computerScore:0,
  playerScore:0
}
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
        const arr = ['Rock', 'Paper', 'Scissors' ]
        const com = Math.floor(Math.random()*4);
        return arr[com];
  }
console.log(getComputerChoice())
// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
    
  

  // All situations where human draws, set `score` to 0
      if(playerChoice==computerChoice){
        score = 0
      }
      else if(playerChoice=='Rock'&&computerChoice=='Scissors'){
        score=1
      }
      else if(playerChoice=='Paper'&&computerChoice=='Rock'){
        score=1
      }
      else if(playerChoice=='Scissors'&&computerChoice=='Paper'){
        score=1
      }
      else{
        score=-1
      }
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
   

  // Otherwise human loses (aka set score to -1)
  

   return score
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
 const resultDiv = document.getElementById('result')
 const handsDiv = document.getElementById('hands')
 const playerScoreDiv=document.getElementById('player-score')
  if(score==-1){
  resultDiv.innerText='You Lose'
 }
 else if(score==0){
  resultDiv.innerText="its a Tie"
 }
 else{
  resultDiv.innerText='you won'
 }
 handsDiv.innerText=`human: ${playerChoice} vs computer: ${computerChoice}`
 playerScoreDiv.innerText=`Your Score: ${totalScore['playerScore']}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({playerChoice})
  const computerChoice = getComputerChoice()
  console.log({computerChoice})
  const score= getResult(playerChoice,computerChoice)
  console.log({score})
  totalScore['playerScore']+=score;
  showResult(score,playerChoice,computerChoice)
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll('.rpsButton')
 rpsButtons.forEach(rpsButton =>{
  rpsButton.onclick=()=> onClickRPS(rpsButton.value)
 })
  const endGamebutton = document.getElementById('endGameButton')
  endGamebutton.onclick=()=>{
    endGame(totalScore)
  }
}
playGame()
// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
  totalScore['playerScore']=0;
  totalScore['computerScore']=0;

  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv=document.getElementById('player-score')

  resultDiv.innerText=''
  handsDiv.innerText=''
  playerScoreDiv.innerText=''
}

