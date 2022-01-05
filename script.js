var startBtn = document.getElementById("start-quiz");
var startCard = document.querySelector(".start-card");
var questionCard = document.querySelector(".question-card");
var questionTitle = document.getElementById("question-title")
var counter = 0;
var questionsArr = [
    {
        title:"What does CSS stands for?",
        choices: ["Cascading Super Sheet", "Computer Secruity Screen", "Cascading Style Sheets", "Come Side Side"],
        answer: "Cascading Style Sheets"

    },
    {
        title:"What does CSS stands for?",
        choices: ["Cascading Super Sheet", "Computer Secruity Screen", "Cascading Style Sheets", "Come Side Side"],
        answer: "Cascading Style Sheets"

    },
    {
        title:"What does CSS stands for?",
        choices: ["Cascading Super Sheet", "Computer Secruity Screen", "Cascading Style Sheets", "Come Side Side"],
        answer: "Cascading Style Sheets"

    },
    {
        title:"What does CSS stands for?",
        choices: ["Cascading Super Sheet", "Computer Secruity Screen", "Cascading Style Sheets", "Come Side Side"],
        answer: "Cascading Style Sheets"

    },
    

]
function startQuiz() {
  console.log(questionCard);

  startCard.style.display = "none";
  questionCard.style.display = "block";
  nextQuestion()

}
function nextQuestion(){
    questionTitle.innerText = questionsArr[counter].title
    for(var i = 0; i < 4; i++){
        var button = document.createElement("button") 
        button.textContent = questionsArr[counter].choices[i]
        questionCard.appendChild(button)
    }
//counter++
//add onclick function to button in for loop.
}

startBtn.addEventListener("click", startQuiz);
