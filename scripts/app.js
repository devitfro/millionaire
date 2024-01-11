let userAnswer;

// CORRECT ANSWER TEXT AND WRAPPER
let correctAnswer;
let correctAnswerWrapper;

// WRAPPER OF WRONG ANSWER
let wrongAnswerWrapper;
0
// ANSWERS FOR FIFTY-FIFTY
let correctFiftyWrapper;
let wrongFiftyWrapper;
let fifty = false;

// USER ANSWERS
let answer01 = document.getElementById('answer01');
let answerWrapper01 = document.getElementById('answer_wrapper_01');

let answer02 = document.getElementById('answer02');
let answerWrapper02 = document.getElementById('answer_wrapper_02');

let answer03 = document.getElementById('answer03');
let answerWrapper03 = document.getElementById('answer_wrapper_03');

let answer04 = document.getElementById('answer04');
let answerWrapper04 = document.getElementById('answer_wrapper_04');


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
let intervalId;
const countdownElem = document.getElementById('countdown');

function startTimer() {
   intervalId = setInterval(updateCountdown, 1000);
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
      clearInterval(intervalId);
      sortForCorrectAnswer();
   }
}

startTimer();


// CHECK ANSWER
function checkAnswer01() {
   clearInterval(intervalId);

   if (answer01.textContent == correctAnswer)  {
      correctAnswerWrapper = answerWrapper01;
      if (fifty) {
         addAndRemoveFifftyWrapper();
         fifty = false;
      }
      addAndRemoveCorrectWrapper();
      setTimeout(continueOrPrize, 1000);
   } else {
      wrongAnswerWrapper = answerWrapper01;
      if (fifty) {
         addAndRemoveFifftyWrapper();
         fifty = false;
      }
      addAndRemoveWrongWrapper();
      sortForCorrectAnswer();
   } 
}

function checkAnswer02() {
   clearInterval(intervalId);

   if (answer02.textContent == correctAnswer)  {
      correctAnswerWrapper = answerWrapper02;
      if (fifty) {
         addAndRemoveFifftyWrapper();
         fifty = false;
      }
      addAndRemoveCorrectWrapper();
      setTimeout(continueOrPrize, 1000);
   } else {
      wrongAnswerWrapper = answerWrapper02;
      if (fifty) {
         addAndRemoveFifftyWrapper();
         fifty = false;
      }
      addAndRemoveWrongWrapper();
      sortForCorrectAnswer();
   }   
}

function checkAnswer03() {
   clearInterval(intervalId);

   if (answer03.textContent == correctAnswer)  { 
      correctAnswerWrapper = answerWrapper03;
      if (fifty) {
         addAndRemoveFifftyWrapper();
         fifty = false;
      }
      addAndRemoveCorrectWrapper();
      setTimeout(continueOrPrize, 1000);
   } else {
      wrongAnswerWrapper = answerWrapper03;
      if (fifty) {
         addAndRemoveFifftyWrapper();
         fifty = false;
      }
      addAndRemoveWrongWrapper();
      sortForCorrectAnswer();
   } 
}

function checkAnswer04() {
   clearInterval(intervalId);

   if (answer04.textContent == correctAnswer)  {
      correctAnswerWrapper = answerWrapper04;
      if (fifty) {
         addAndRemoveFifftyWrapper();
         fifty = false;
      }
      addAndRemoveCorrectWrapper();
      setTimeout(continueOrPrize, 1000);
   } else {
      wrongAnswerWrapper = answerWrapper04;
      if (fifty) {
         addAndRemoveFifftyWrapper();
         fifty = false;
      }
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
   answer01.textContent = questionsData[questionsCounter]['answers'][0];
   answer02.textContent = questionsData[questionsCounter]['answers'][1];
   answer03.textContent = questionsData[questionsCounter]['answers'][2];
   answer04.textContent = questionsData[questionsCounter]['answers'][3];

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
   if (answer01.textContent == correctAnswer) {
      answerWrapper01.classList.add('correct_answer_wrapper');
   }
   if (answer02.textContent == correctAnswer) {
      answerWrapper02.classList.add('correct_answer_wrapper');
   }
   if (answer03.textContent == correctAnswer) {
      answerWrapper03.classList.add('correct_answer_wrapper');
   }
   if (answer04.textContent == correctAnswer) {
      answerWrapper04.classList.add('correct_answer_wrapper');
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
   
friendHelp.addEventListener('click', function friendsTips() {
   friendHelp.style.backgroundColor = '#FFD700';

   switch (correctAnswer) {
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


// AUDIENCE HELP
let audienceHelp = document.getElementById('audienceHelp');

audienceHelp.addEventListener('click', function audienceHelpTips() {
   audienceHelp.style.backgroundColor = '#FFD700';

   switch (correctAnswer) {
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
}, {once: true});


// FIFTY-FIFTY HELP
let fiftyFiftyHelp = document.getElementById('fiftyFifty');

fiftyFiftyHelp.addEventListener('click', function fiftyFiftyTips() {
   fiftyFiftyHelp.style.backgroundColor = '#FFD700';

   let wrongAnswerArr = [];

   answer01.textContent == correctAnswer ? correctFiftyWrapper = answerWrapper01 : wrongAnswerArr.push(answer01);
   answer02.textContent == correctAnswer ? correctFiftyWrapper = answerWrapper02 : wrongAnswerArr.push(answer02);
   answer03.textContent == correctAnswer ? correctFiftyWrapper = answerWrapper03 : wrongAnswerArr.push(answer03);
   answer04.textContent == correctAnswer ? correctFiftyWrapper = answerWrapper04 : wrongAnswerArr.push(answer04);

   if (wrongAnswerArr.length == 3) {
      let randomNumber = getRandomNumber();
      let randomWrongAnswer = wrongAnswerArr[randomNumber]; 
      wrongFiftyWrapper = randomWrongAnswer.parentElement;
      fifty = true;
      addAndRemoveFifftyWrapper();
   }

}, {once: true});

function getRandomNumber() {
   return Math.floor(Math.random() * 3);
}

function addAndRemoveFifftyWrapper() {
   correctFiftyWrapper.classList.toggle('answers_for_fiftyfifty');
   wrongFiftyWrapper.classList.toggle('answers_for_fiftyfifty');
}


// CONTINUE AFTER TIPS
function continueAfterTips() {
   addAndRemoveCorrectWrapper();
   clearInterval(intervalId);
   setTimeout(continueOrPrize, 1000);
}



