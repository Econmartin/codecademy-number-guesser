let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate the secretTarget to try and guess
function generateTarget() {
    return Math.floor(Math.random() * 10)
}
  
// Find absolute distance using just two inputs
const getAbsoluteDistance = (a, b) => Math.abs(a - b);
  
// Compare distances between human and computer. human wins if tie.
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    // Add window alert for outside range
    if ((humanGuess < 0) || (humanGuess > 9)){
     window.alert('Outside Range');
    }
     // Human wins if closer or tie
    else if ((getAbsoluteDistance(humanGuess, secretTarget)) <= (getAbsoluteDistance(computerGuess, secretTarget))){
        return true;
    }
    // computer wins
    else {
        return false;
    };
};
  
// Update score for winner
function updateScore(winner){
    if (winner === 'human') {
      humanScore += 1;
    } else {
      computerScore += 1;
    };
  };
  
// Move to next round
function advanceRound() {
    currentRoundNumber += 1;
};
  
