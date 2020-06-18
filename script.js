// TODOs:
// ✓ The first view of the application displays a button used to start the quiz.
// ✓ Clicking the 'Start Quiz' button displays a series of questions.
// ✓ Once the quiz begins, a countdown timer starts.
// ✓ If a question is answered incorrectly, additional time is subtracted from the timer.
// ✓ The timer ends when all questions have been answered or the timer reaches 0.
// ✓ After the game ends, the user can save their initials and score to a highscores view using local storage.
// ✓ Repository contains quality README with description, screenshot, link to deployed application.

//GLOBALS
var containerEl = document.querySelector(".container");
var timerDisplay = document.querySelector(".timer");
var startText = document.createElement("h1");
var startBtn = document.createElement("button");
var questionText = document.createElement("p");
var hr = document.createElement("hr"); document.body.appendChild(hr);
var timer = 50;
var qIndex = 0;
var questions = [
  {
    title: "What tag is used to define an unordered list that is bulleted?",
    choices: ["<li>", "<ol>", "<div>", "<ul>"],
    answer: "<ul>"
  },
  {
    title: "What tag is used to define a hyperlink, or a link to another page?",
    choices: ["<em>", "<a>", "<strong>", "<script>"],
    answer: "<a>"
  },
  {
    title: "Which of these are not a programming language?",
    choices: ["Python", "Java", "Ruby", "PHD"],
    answer: "PHD"
  },
  {
    title: "Where do you store your css stylesheet link?",
    choices: ["<head>", "<body>", "<div>", "<html>"],
    answer: "<head>"
  },
  {
    title: "What tag is used to store your JavaScript source/code?",
    choices: ["<img>", "<link>", "<script>", "<title>"],
    answer: "<script>"
  },
  {
    title: "Which of these are not a semantic tag?",
    choices: ["<article>", "<div>", "<footer>", "<nav>"],
    answer: "Choice 2"
  },
  {
    title:"Still a work in progress! Will update soon🧑🏻‍🔧 ",
    choices:"",
    answer:"",
  }
];

//Content for home page
function openingPage() {
  startText.textContent = "Welcome to my code quiz!";
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
  timerDisplay.textContent = timer;

  timeInterval = setInterval(function () {
    timer--;
    timerDisplay.textContent = timer;
    if (timer === 0) {
      gameOver();
    }

  }, 1000);
};

// function to handle next question
function nextQuestion() {
  var currentQuestion = questions[qIndex];
  containerEl.textContent = "";
  questionText.textContent = currentQuestion.title;
  containerEl.appendChild(questionText);
  var answersDiv = document.createElement("div");

  for (let i = 0; i < currentQuestion.choices.length; i++) {
    var answerBtn = document.createElement("button");
    answerBtn.classList.add("choiceBtn");
    answerBtn.textContent = currentQuestion.choices[i];
    answerBtn.onclick = checkAnswer;
    answersDiv.appendChild(answerBtn);
    
  }

  containerEl.appendChild(answersDiv);

};

function checkAnswer() {
  if (event.target.textContent === questions[qIndex].answer) {
    qIndex++;
    nextQuestion();
    writeMessage("Correct!");
  } else {
    qIndex++;
    timer -= 5;
    nextQuestion();
    writeMessage("Incorrect!");
  }
}

function writeMessage(message) {
  var grade = document.createElement("p");
  grade.textContent = message;
  containerEl.append(grade);
  var resultTimer = setTimeout(function () {
    grade.textContent = "";
  }, 1000)
}

function gameOver(){
  clearInterval(timeInterval)
  containerEl.style.display = "none";
}

startBtn.addEventListener("click", startQuiz);
openingPage();