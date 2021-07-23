'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no Input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number Is Given';
    //   console.log('No Number is given');
    displayMessage('No Number Is Given');
  }
  // When player wins the Game
  else if (secretNumber === guess) {
    // document.querySelector('.message').textContent = 'Correct Number';
    displayMessage('Correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High' : 'Too Low';
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'you Lost The Game';
      displayMessage('you Lost The Game');
      document.querySelector('.score').textContent = 0;
    }
  }
}); // When Number is High
// else if (secretNumber < guess) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too High';
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you Lost The Game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//   //When Number is Low
//   else if (secretNumber > guess) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low';
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you Lost The Game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
// Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
