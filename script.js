let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
let btn = document.querySelector('.game-btn');

let result = document.getElementById('result');

let finalComputerChoice = document.getElementById('computerChoice');

let scorePlayer = document.getElementById('scorePlayer');
let scoreComputer = document.getElementById('scoreComputer');

let countComputer = 1;
let countPlayer = 1;

let finalResult = document.getElementById('final-result');
let scoreFinalResult = 6;

let playAgain = document.getElementById('play-again');

rock.disabled = false;
paper.disabled = false;
scissor.disabled = false;


function finalWin() {
  for (let i = 0; i <= scoreFinalResult; i++) {
    if (countComputer === 6) {
      finalResult.textContent = 'Computer won';
      finalResult.classList.add('lose');
      rock.disabled = true;
      paper.disabled = true;
      scissor.disabled = true;
    } else if (countPlayer === 6) {
      finalResult.textContent = 'You won';
      finalResult.classList.add('win');
      rock.disabled = true;
      paper.disabled = true;
      scissor.disabled = true;
    } else {
      return;
    }
  }
}


function choiceComputer() {
  let computerChoice = Math.random();

  if (computerChoice <= 0.33) {
    return finalComputerChoice.textContent = 'Computer Choice : rock';
  } else if (computerChoice >= 0.34 && computerChoice <= 0.66) {
    return finalComputerChoice.textContent = 'Computer Choice : paper';
  } else {
    return finalComputerChoice.textContent = 'Computer Choice : scissor';
  }
}


rock.addEventListener('click', () => {
  choiceComputer();
  checkRock();
  finalWin();
});

function checkRock() {
  if (finalComputerChoice.textContent === 'Computer Choice : rock') {
    return result.textContent = 'Égalité';
  } else if (finalComputerChoice.textContent === 'Computer Choice : paper') {
    scoreComputer.textContent = countComputer++;
    return result.textContent = 'Manche perdue';
  } else if (finalComputerChoice.textContent === 'Computer Choice : scissor') {
    scorePlayer.textContent = countPlayer++;
    return result.textContent = 'Manche gagné';
  } else {
    return result.textContent = 'Erreur';
  }
}


paper.addEventListener('click', () => {
  choiceComputer();
  checkPaper();
  finalWin();
});

function checkPaper() {
  if (finalComputerChoice.textContent === 'Computer Choice : rock') {
    scorePlayer.textContent = countPlayer++;
    return result.textContent = 'Manche gagné';
  } else if (finalComputerChoice.textContent === 'Computer Choice : paper') {
    return result.textContent = 'Égalité';
  } else if (finalComputerChoice.textContent === 'Computer Choice : scissor') {
    scoreComputer.textContent = countComputer++;
    return result.textContent = 'Manche perdue';
  } else {
    return result.textContent = 'Erreur';
  }
}


scissor.addEventListener('click', () => {
  choiceComputer();
  checkScissor();
  finalWin();
});

function checkScissor() {
  if (finalComputerChoice.textContent === 'Computer Choice : rock') {
    scoreComputer.textContent = countComputer++;
    return result.textContent = 'Manche perdue';
  } else if (finalComputerChoice.textContent === 'Computer Choice : paper') {
    scorePlayer.textContent = countPlayer++;
    return result.textContent = 'Manche gagné';
  } else if (finalComputerChoice.textContent === 'Computer Choice : scissor') {
    return result.textContent = 'Égalité';
  } else {
    return result.textContent = 'Erreur';
  }
}


playAgain.addEventListener('click', () => {
  scoreComputer.textContent = 0;
  scorePlayer.textContent = 0;
  countComputer = 0;
  countPlayer = 0;

  result.textContent = '';
  finalComputerChoice.textContent = '';

  finalResult.textContent = '';

  rock.disabled = false;
  paper.disabled = false;
  scissor.disabled = false;
});
