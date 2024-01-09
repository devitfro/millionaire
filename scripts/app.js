let userAnswer;
let correctAnswer;

let correctAnswerWrapper;
let wrongAnswerWrapper;
let correctAnswerForShow;

let prize = 1;
let questionsCounter = 0;
let questionsData;

let currentObj = {
   currentQuestion: "",
   answer01: "",
   answer02: "",
   answer03: "",
   answer04: "",
   correctAnswer: ""
}


// XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open('GET', 'scripts/questions.json');

xhr.onload = function() {
   const resp = JSON.parse(xhr.response);
   questionsData = resp;

   changeQuestion();
   changeAnswerForNextQuestion();
   changeCurrentObj();
}
xhr.send();



// START TIMER
let time = 60;
let interval;
const countdownElem = document.getElementById('countdown');

function startTimer() {
   interval = setInterval(updateCountdown, 1000);
   updateCountdown();
}



function updateCountdown() {
   const minutes = Math.floor(time / 60);
   let seconds = time % 60;

   seconds = seconds < 10 ? "0" + seconds : seconds;
   if (time < 10) {
      countdownElem.style.color = 'red';
   }
   countdownElem.innerHTML = `${minutes}:${seconds}`;
   time--;

   if (minutes == 0 & seconds == 0) {
      clearInterval(interval);
      console.log('game over...');

      sortForCorrectAnswer();
   }
}

startTimer();



// CHECK ANSWER
function checkAnswer01() {
   let answerWrapper = document.getElementById('answer_wrapper_01');
   userAnswer = document.getElementById('answer01').innerHTML;
   clearInterval(interval);

   if (userAnswer == correctAnswer)  {
      console.log('Correct! User answer is - ', userAnswer);
      correctAnswerWrapper = answerWrapper;

      addAndRemoveCorrectWrapper();
      setTimeout(continueOrPrize, 1000);
   } else {
      console.log('game over...');

      wrongAnswerWrapper = answerWrapper;
      addAndRemoveWrongWrapper();
      sortForCorrectAnswer();
   } 
}

function checkAnswer02() {
   let answerWrapper = document.getElementById('answer_wrapper_02');
   userAnswer = document.getElementById('answer02').innerHTML;
   clearInterval(interval);

   if (userAnswer == correctAnswer)  {
      console.log('Correct! User answer is - ', userAnswer);
      correctAnswerWrapper = answerWrapper;

      addAndRemoveCorrectWrapper();
      setTimeout(continueOrPrize, 1000);
   } else {
      console.log('game over...');

      wrongAnswerWrapper = answerWrapper;
      addAndRemoveWrongWrapper();
      sortForCorrectAnswer();
   }   
}

function checkAnswer03() {
   let answerWrapper = document.getElementById('answer_wrapper_03');
   userAnswer = document.getElementById('answer03').innerHTML;
   clearInterval(interval);

   if (userAnswer == correctAnswer)  {
      console.log('Correct! User answer is - ', userAnswer);
      correctAnswerWrapper = answerWrapper;

      addAndRemoveCorrectWrapper();
      setTimeout(continueOrPrize, 1000);
   } else {
      console.log('game over...');

      wrongAnswerWrapper = answerWrapper;
      addAndRemoveWrongWrapper();
      sortForCorrectAnswer();
   } 
}

function checkAnswer04() {
   let answerWrapper = document.getElementById('answer_wrapper_04');
   userAnswer = document.getElementById('answer04').innerHTML;
   clearInterval(interval);

   if (userAnswer == correctAnswer)  {
      console.log('Correct! User answer is - ', userAnswer);
      correctAnswerWrapper = answerWrapper;

      addAndRemoveCorrectWrapper();
      setTimeout(continueOrPrize, 1000);
   } else {
      console.log('game over...');

      wrongAnswerWrapper = answerWrapper;
      addAndRemoveWrongWrapper();
      sortForCorrectAnswer();
   } 
}



// CONTINUE THE GAME
// CONTINUE OR PRIZE
function continueOrPrize() {
   let continueContainer = document.getElementById('continueOrPrize');
   continueContainer.classList.toggle('visible');

   let gameContainer = document.getElementById('gameContainer');
   gameContainer.classList.toggle('noVisible');

   let winPrice = document.getElementById(`winPrice-${prize}`).textContent;
   let prizeToTake = document.getElementById('prizeToTake');
   prizeToTake.innerHTML = `${winPrice}`;

   if (winPrice == '1 000 000') {
      alert('You are a millionaire! You won the game! Congratulations!!!');
   }

   return true;
}

function continueTheGame() {
   continueOrPrize();
   if (continueOrPrize) {
      questionsCounter++;
      time = 60;
      startTimer();
   }
   addAndRemoveCorrectWrapper();
   changeWinPrice();
   changeQuestion();
   changeAnswerForNextQuestion();
   changeCurrentObj();
   console.log('next current answer - ', currentObj.correctAnswer);
}

function changeWinPrice() {
   let price = document.getElementById(`price-${prize}`);
   price.classList.toggle('win_color');

   prize++;

   let priceContainer = document.getElementById(`price-${prize}`);
   priceContainer.classList.toggle('win_color');
}

function changeQuestion() {
   let question = document.getElementById('questionText');
   question.textContent = questionsData[questionsCounter]['question'];
   console.log('next question');

   currentObj.currentQuestion = questionsData[questionsCounter]['question'];
}

function changeAnswerForNextQuestion() {
   let answer01 = document.getElementById('answer01');
   answer01.innerHTML = questionsData[questionsCounter]['answers'][0];

   let answer02 = document.getElementById('answer02');
   answer02.innerHTML = questionsData[questionsCounter]['answers'][1];

   let answer03 = document.getElementById('answer03');
   answer03.innerHTML = questionsData[questionsCounter]['answers'][2];

   let answer04 = document.getElementById('answer04');
   answer04.innerHTML = questionsData[questionsCounter]['answers'][3];

   correctAnswer = questionsData[questionsCounter]['correctAnswer'];
}

function changeCurrentObj() {
   currentObj.answer01 = questionsData[questionsCounter]['answers'][0];
   currentObj.answer02 = questionsData[questionsCounter]['answers'][1];
   currentObj.answer03 = questionsData[questionsCounter]['answers'][2];
   currentObj.answer04 = questionsData[questionsCounter]['answers'][3];
   currentObj.correctAnswer = questionsData[questionsCounter]['correctAnswer'];
}



// SHOW CORRECT ANSWER
function addAndRemoveCorrectWrapper() {
   correctAnswerWrapper.classList.toggle('correct_answer_wrapper');
}

function addAndRemoveWrongWrapper() {
   wrongAnswerWrapper.classList.toggle('wrong_answer_wrapper');
}

function sortForCorrectAnswer() {
   let answer1 = document.getElementById('answer01').innerHTML;
   let answer2 = document.getElementById('answer02').innerHTML;
   let answer3 = document.getElementById('answer03').innerHTML;
   let answer4 = document.getElementById('answer04').innerHTML;

   let answerWrapper1 = document.getElementById('answer_wrapper_01');
   let answerWrapper2 = document.getElementById('answer_wrapper_02');
   let answerWrapper3 = document.getElementById('answer_wrapper_03');
   let answerWrapper4 = document.getElementById('answer_wrapper_04');

   if (answer1 == correctAnswer) {
      answerWrapper1.classList.add('correct_answer_wrapper');
   }
   if (answer2 == correctAnswer) {
      answerWrapper2.classList.add('correct_answer_wrapper');
   }
   if (answer3 == correctAnswer) {
      answerWrapper3.classList.add('correct_answer_wrapper');
   }
   if (answer4 == correctAnswer) {
      answerWrapper4.classList.add('correct_answer_wrapper');
   }
   setTimeout(gameOver, 1000);
}



// GAME OVER ...
function winGameOver() {
   let winPrice = document.getElementById(`winPrice-${prize}`).textContent;
   alert(`You win ${winPrice}!`);
   setTimeout(gameOver, 1000);
}

function gameOver() {
   alert('Game over...');
   restartTheGame();
}

function restartTheGame() {
   location.reload();
}



// TIPS
// FRIENDS HELP
let friendHelp = document.getElementById('friendsHelp');
   
friendHelp.addEventListener('click', function friendsHelp() {
   friendHelp.style.backgroundColor = '#FFD700';

   let answer01 = document.getElementById('answer01');
   let answerWrapper01 = document.getElementById('answer_wrapper_01');

   let answer02 = document.getElementById('answer02');
   let answerWrapper02 = document.getElementById('answer_wrapper_02');

   let answer03 = document.getElementById('answer03');
   let answerWrapper03 = document.getElementById('answer_wrapper_03');

   let answer04 = document.getElementById('answer04');
   let answerWrapper04 = document.getElementById('answer_wrapper_04');

   let rightAnswer = currentObj.correctAnswer;

   switch (rightAnswer) {
      case answer01.textContent:
         correctAnswerWrapper = answerWrapper01;
         continueAfterTips();
         break;
      case answer02.textContent:
         correctAnswerWrapper = answerWrapper02;
         continueAfterTips();
         break;
      case answer03.textContent:
         correctAnswerWrapper = answerWrapper03;
         continueAfterTips();
         break;
      case answer04.textContent:
         correctAnswerWrapper = answerWrapper04;
         continueAfterTips();
         break;
   }
}, { once:true });



// let helpByFriends = false;
// function friendsHelp() {
//    if (!helpByFriends) {
//       // friendHelp.style.backgroundColor = 'green';

//       let answer01 = document.getElementById('answer01');
//       let answerWrapper01 = document.getElementById('answer_wrapper_01');
   
//       let answer02 = document.getElementById('answer02');
//       let answerWrapper02 = document.getElementById('answer_wrapper_02');
   
//       let answer03 = document.getElementById('answer03');
//       let answerWrapper03 = document.getElementById('answer_wrapper_03');
   
//       let answer04 = document.getElementById('answer04');
//       let answerWrapper04 = document.getElementById('answer_wrapper_04');
   
//       let rightAnswer = currentObj.correctAnswer;
   
//       switch (rightAnswer) {
//          case answer01.textContent:
//             correctAnswerWrapper = answerWrapper01;
//             continueAfterTips();
//             break;
//          case answer02.textContent:
//             correctAnswerWrapper = answerWrapper02;
//             continueAfterTips();
//             break;
//          case answer03.textContent:
//             correctAnswerWrapper = answerWrapper03;
//             continueAfterTips();
//             break;
//          case answer04.textContent:
//             correctAnswerWrapper = answerWrapper04;
//             continueAfterTips();
//             break;
//       }
//    }
//    helpByFriends = true;
// }

function continueAfterTips() {
   addAndRemoveCorrectWrapper();
   clearInterval(interval);
   setTimeout(continueOrPrize, 1000);
}






