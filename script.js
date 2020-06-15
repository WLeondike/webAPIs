var containerEl = document.querySelector(".container");
var timer = document.querySelector(".timer");
var startText = document.createElement("h1");
var startBtn = document.createElement("button");
var questionText = document.createElement("p");
var timer = 5
var questions = [
  {
    title: "Example Question 1:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 2"
  },
  {
    title: "Example Question 2:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 3"
  },
  {
    title: "Example Question 3:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 1"
  },
  {
    title: "Example Question 4:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 4"
  },
  {
    title: "Example Question 5:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 4"
  },
  {
    title: "Example Question 6:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 2"
  }
];

//Content for home page
function openingPage() {
  startText.textContent = "Here is a little quiz about coding!";
  startBtn.textContent = "Start Quiz";
  containerEl.appendChild(startText);
  containerEl.appendChild(startBtn);
};

//function for question and starts timer
function startQuiz() {
  showTimer();
  nextQuestion();
};

//function for the timer
function showTimer() {
  timerDisplay.textcontent = timer;
  var timeInterval = setInterval(function () {
    timer--;
    timerDisplay.textContent = timer;
    if (timer === 0) {
      clearInterval(timeInterval)
    }
  }, 1000)
};

//function to handle next question
function nextQuestion() {
  var currentQuestion = questions[index];
  containerEl.textContent = "";
  questionText.textContent = currentQuestion.title;
  containerEl.appendChild(questionText);
  var answersDiv = document.createElement("div");
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    var answerBtn = document.createElement("button");
    answerBtn.classList.add("choiceBtn");
    answerBtn.textContent = currentQuestion.choices[i];
    answersDiv.appendChild(answerBtn);
  }
  containerEl.appendChild(answersDiv);
};

startBtn.addEventListener("click", startQuiz);
// document.addEventListener("click", checkAnswer);
openingPage();

