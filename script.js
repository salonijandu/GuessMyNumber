'use strict';
/*
//accessing the textContent of message class
console.log(document.querySelector('.message').textContent);

//manipulating the textContent of message class
document.querySelector('.message').textContent = 'Correct Number';

console.log(document.querySelector('.message').textContent);  

//manipulating the textContent of number and score class
document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

//Accessing the value of input element, FOR INPUT ELEMENT WE USE 'INPUT' INSTEAD OF textContent
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
//Click Event Listener

//Create a secret number which want user to guess
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  //the type of input value even in case of number values is usually always string so to convert the value to number, use Number()
  const guess = Number(document.querySelector('.guess').value);

  const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

  //When there is no number provided by the player
  if (!guess) {
    //No guess
    //document.querySelector('.message').textContent = '❌ NO Number';
    displayMessage('❌ NO Number');
  } else if (guess > 20) {
    displayMessage('Enter number between 1 and 20');
  } else if (guess === SecretNumber) {
    //document.querySelector('.message').textContent = '✅ Correct Number';
    displayMessage('✅ Correct Number');

    document.querySelector('.number').textContent = SecretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //Manipulate the color of te background
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== SecretNumber) {
    //document.querySelector('.message').textContent = guess > SecretNumber ? 'too High 📈' : 'Too Low 📉';
    displayMessage(guess > SecretNumber ? 'too High 📈' : 'Too Low 📉');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    //document.querySelector('.message').textContent = '🔚 Game ended. You lost';
    displayMessage('🔚 Game ended. You lost');
    document.querySelector('.score').textContent = 0;
  }

  //again button
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    SecretNumber = Math.trunc(Math.random() * 20) + 1;
    //document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
