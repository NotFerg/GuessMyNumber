'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.highscore').textContent);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number ⛔';
    displayMessage('No Number ⛔');
  } else if (guess === secretNumber) {
    console.log('score,highscore', score, highScore);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    displayMessage('Correct Number 🎊');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Too High 👆' : 'Too Low 👇';
      displayMessage(guess > secretNumber ? 'Too High 👆' : 'Too Low 👇');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 💥');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log('sec2', secretNumber);
});
