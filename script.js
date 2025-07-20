
function getComputerChoice() {
  random = (Math.floor(Math.random() * 3) + 1);
   if (random === 1) {
    return 'rock'
  } else if (random === 2) {
    return 'paper';
  } else {
    return('scissors');
  }  
}


function getHumanChoice() {
 input = prompt('Type rock, paper, or scissors!').toLowerCase();
 if (input === 'rock') {
  return 'rock';
 } else if (input === 'paper') {
  return 'paper';
 } else if (input === 'scissors') {
  return 'scissors'
 }
}

 humanScore = 0;
 computerScore = 0;

function playGame() {


  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);


  function playRound(humanChoice, computerChoice) {
    
  if (computerChoice === 'rock') {
    if (humanChoice === 'rock') {
      console.log("It's a Tie try again!")
    } else if (humanChoice === 'paper') {
      console.log('You chose Paper, Computer chose Rock You lose rock beat paper!');
      computerScore += 1 ;
    } else if (humanChoice === 'scissors') {
      console.log('You chose Scissors, Computer chose Rock, You lose rock beat scissors!')
      computerScore += 1;
    }
  } else if (computerChoice === 'paper') {
    if (humanChoice === 'paper') {
      console.log("It's a Tie try again!")
    } else if (humanChoice === 'rock') {
      console.log('You chose Rock, Computer Chose Paper, You win, rock beat paper!')
      humanScore += 1;
    } else if (humanChoice === 'scissors') {
      console.log('You chose Scissors, Computer chose paper, You win scissors beat paper!')
      humanScore +=1 ;
    }
  } else if (computerChoice === 'scissors') {
    if (humanChoice === 'scissors') {
      console.log("It's a Tie try again!")
    } else if (humanChoice === 'rock') {
      console.log('You chose Rock, computer chose Scissors, You win rock beat scissors!')
      humanScore += 1;
    } else if (humanChoice === 'paper') {
      console.log('You chose paper, Computer chose Scissors, You lose scissors beat paper!')
      computerScore += 1;
    }
  }
}

 
}


playGame()
playGame()
playGame()
playGame()
playGame()

console.log(`computer had ${computerScore} point`);
console.log(`you had ${humanScore} point`);


if (computerScore > humanScore) {
  console.log("Sorry, Computer win!");

} else if (computerScore === humanScore) {
  console.log("No winner Play an extra round!");
} else {
  console.log("Congrat, You win the game!");
}








 
 








