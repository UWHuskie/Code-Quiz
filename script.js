// Creating variables to a specific id and one class.
var startBtn = document.getElementById("start-quiz");
var startCard = document.querySelector(".start-card");
var questionCard = document.querySelector(".question-card");
var questionTitle = document.getElementById("question-title");
var saveCard = document.querySelector(".save-card")
var finalScore = document.querySelector("#final-score")
var counter = 0;
var score = 100;
var time = 100;
var submit = document.getElementById("submit")
var timeEle = document.getElementById("time");
var inputEl = document.getElementById("input")
var unorderedList = document.getElementById("unordered-list")

// Creating an array.
var questionsArr = [

  {
    // Adding of the questions in the quiz.
    title: "What does CSS stands for?",
    choices: [
      "Cascading Super Sheet",
      "Computer Security Screen",
      "Cascading Style Sheets",
      "Come Side Side",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    title: "What is the correct anwser to what we are learning in Boot Camp?",
    choices: ["Java Coffee", "Java Script", "Java", "Jamba Juice"],
    answer: "Java Script",
  },
  {
    title: "What city is the University of Washington main campus located?",
    choices: ["Redmond", "Bothell", "Tacoma", "Seattle"],
    answer: "Seattle",
  },
  {
    title: "How do you write a string message with Javascript?",
    choices: ["Println", "Print", "System Print", "In Quotation"],
    answer: "In Quotation",
  },
];

// Creating the function and calling the function nextQuestion to run.
function startQuiz() {
  timer();
  startCard.style.display = "none";
  questionCard.style.display = "flex";
  nextQuestion();
}

// Creating another function and calling the endQuiz function to run.
function nextQuestion() {
  questionCard.innerHTML = "";
  if (counter === questionsArr.length) {
    // call on function to end quiz.
    return endQuiz();
  }

  // Creating the content the sending content to webpage.
  questionTitle.innerText = questionsArr[counter].title;
  questionCard.appendChild(questionTitle);

  // Beginning of the for loop.
  for (var i = 0; i <= 4; i++) {
    var button = document.createElement("button");
    button.textContent = questionsArr[counter].choices[i];
    questionCard.appendChild(button);
    button.onclick = function () {
      // Start of the if and else statement.
      if (this.innerText === questionsArr[counter].answer) {
        counter++;
        nextQuestion();
      } else {
        counter++;
        time -= 15;
        nextQuestion();
      }
    };
  }
}
// Starting the timer function.
function timer() {
  timerId = setInterval(function () {
    time -= 1;
    console.log(time)
    timeEle.innerText = time;
  }, 1000);
}
// Staring the endQuiz function.
function endQuiz() {
  displayScores()
  clearInterval(timerId);
  questionCard.style.display = "none";
    saveCard.style.display = "block";
    finalScore.textContent = time;
    submit.addEventListener("click", highScore)

    }
    // Starting the highScore function.
    function highScore() {
      var highScores = JSON.parse(localStorage.getItem("HighScore")) || []
      var scoreData  = { 
        initials: inputEl.value.trim(),
        score: time

      }
      highScores.push(scoreData)
      console.log(highScores)
      localStorage.setItem("HighScore",JSON.stringify(highScores))
    }

    // Staring the displayScore function.
    function displayScores() {
      var savedScores = JSON.parse(localStorage.getItem("HighScore")) || []
      for (let i = 0; i < savedScores.length; i++){
      var liEl = document.createElement("li")
      liEl.textContent = savedScores[i].initials+ ": " + savedScores[i].score
      unorderedList.appendChild(liEl)
      }
    }
    // The click button to start the quiz.
startBtn.addEventListener("click", startQuiz);
