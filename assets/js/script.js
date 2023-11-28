/* ----- variables -----*/

const container = document.querySelector(".container");

const results = document.querySelector("#results");

const timeEl = document.querySelector("#timer");

const btnStart = document.querySelector("#btnStart")

const btnHighScores = document.querySelector("#btnHighScores")

var numCorrect = 0;

// This quiz is easy for fun and only takes 30 seconds.
// Time set to 10 seconds during testing.
var secondsStart = 10; 
var secondsLeft = 0;

var questionCount = 0;

/* ----- questions as objects -----*/

var q1 = {
  question: "What does HTML stand for?",
  a1: "Nothing. It's not an acronym.",
  a2: "Hey Too Much Layout",
  a3: "Hyper Text Markup Language",
  a4: "Hey That's My Lunch",
  answer: "a3"
};

var q2 = {
  question: "Which of these is not a basic HTML tag?",
  a1: "helloWorld",
  a2: "html",
  a3: "title",
  a4: "head",
  answer: "a1"
};

var q3 = {
  question: "What does CSS stand for?",
  a1: "Cloud Server Scripting",
  a2: "Can Someone Smile",
  a3: "Combined Silly Sytles",
  a4: "Cascading Style Sheets",
  answer: "a4"
};

var q4 = {
  question: "Where do you get JavaScript?",
  a1: "From Amazon",
  a2: "As a bootcamp graduation gift",
  a3: "getJavaScript.com",
  a4: "You don't have to download JavaScript. It's already running in your broswer, etc.",
  answer: "a4"
};

var q5 = {
  question: "Which of these is a real git command?",
  a1: "git eat",
  a2: "git commit -m \"This is to git commit\"",
  a3: "git sleep",
  a4: "git codeIt",
  answer: "a2"
};

/* ----- timer -----*/

function setTime() {
  
  // Sets interval in variable
  var timerInterval = setInterval( 
    function() {  
      if((secondsLeft === 0) || (questionCount > 5)) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      btnStart.style.display="inline";
      btnHighScores.style.display="inline";
      // Calls function to create and append image
      //sendMessage();
    }
   
    timeEl.textContent = "⏰ Time: " + secondsLeft;
    secondsLeft--;
  }
  , 1000);
}

/* ----- questions display -----*/

function renderQuestions() {
  secondsLeft = secondsStart;
  btnStart.style.display="none";
  btnHighScores.style.display="none";
  setTime()
  
  // To do 
  // set question using questionCount and

  /*
  if (count === 0) {
      //results.innerHTML = "hello" 
  }
  */

  /*
  // get q + count
  // show a1 to a4 as 4 buttons
  // Clear todoList element and update todoCountSpan
  container.innerHTML = "";
  //todoCountSpan.textContent = todos.length;

  Object.entries(obj).forEach(([key, value]) => {
    var li = document.createElement("li");
    li.textContent = value;
    //li.setAttribute("data-index", i);

    //var button = document.createElement("button");
    //button.textContent = "Complete ✔️";

    //li.appendChild(button);
    container.appendChild(li);
    
  }*/
};

/*
container.addEventListener("hover", (event) => {
  event.target.style.backgroundColor = blue;
});

container.addEventListener("click", (event) => {
  count++;
  //setCounterText();
  //nextQuestion();
});
*/

btnStart.addEventListener("click", (event) => {
  renderQuestions();
});