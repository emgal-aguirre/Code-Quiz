//DOM Elements 
var startButtonEl = document.querySelector("#start-btn");
var questionContainerEl = document.querySelector("#questions-container");
var questionEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answer-btns");
var timeLimitEl = document.querySelector("#time-limit");
var controlEl = document.querySelector("#controls");
var button1El = document.querySelector("#btn1");
var button2El = document.querySelector("#btn2");
var button3El = document.querySelector("#btn3");
var button4El = document.querySelector("#btn4");
var selectedButtonsEl = document.querySelector("#answer-btns");
var submitInitialsEl = document.querySelector("#submit-initials");
var inputInitialsEl = document.querySelector("#initials");
var initialsBtnEl = document.querySelector("#initial-button");
var restartbtnEl = document.querySelector("#go-back");
var highScoresListEl = document.querySelector("#high-scores-list");


//event listeners 
startButtonEl.addEventListener("click", StartGame);
submitInitialsEl.addEventListener("click", storeScores);

//global variables
var timeLimit = 100;
var timer;
var questionsIndex = 0;
var storedScores = JSON.parse(localStorage.getItem("store-scores"));
var storage = [];

//question objects
var questionary = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        answer1: "<javascript>",
        answer2: "<scripting>",
        answer3: "<script>",
        answer4: "<js>",
        correct: "<script>"
    },
    {
        question: `How do you write "Hello World" in an alert box?`,
        answer1: `msg("Hello World")`,
        answer2: `alert("Hello World")`,
        answer3: `alertBox("Hello World")`,
        answer4: `msgBox("Hello World")`,
        correct: `alertBox("Hello World")`
    },
    {
        question: "How do you create a function in Javascript?",
        answer1: "function myFunction ()",
        answer2: "function = myFunction ()",
        answer3: "function: myFunction ()",
        answer4: "function: myFunction",
        correct: "function myFunction ()",
    },
    {
        question: "How does a for loop start?",
        answer1: "for (i=0; i <=5)",
        answer2: "for (i = 0; i <= 5; i++)",
        answer3: "for (i<5;i++)",
        answer4: "for i = 1 to 5",
        correct: "for (i = 0; i <= 5; i++)"
    },
]

//starting the game upon click 
function StartGame() {
    questionContainerEl.style.display = "block";
    controlEl.style.display = "none";
    timer = setInterval(setTime, 1000);
    nextQuestions();
}

//moving to the next question in the above questionary object
function nextQuestions() {
    questionEl.innerText = questionary[questionsIndex].question;
    button1El.innerText = questionary[questionsIndex].answer1;
    button2El.innerText = questionary[questionsIndex].answer2;
    button3El.innerText = questionary[questionsIndex].answer3;
    button4El.innerText = questionary[questionsIndex].answer4;

}

//timer function
function setTime() {
    timeLimitEl.innerText = timeLimit;
    timeLimit--;
    if (timeLimit === 0) {
        clearInterval(timer);
        // questionContainerEl.style.display = "block";
        submitInitialsEl.style.display = "none";
    }
}

//when answer incorrect answer is clicked, 10 seconds is subtracted from the timer & moves to next question or when time/questions ends timer ends. 
selectedButtonsEl.addEventListener("click", function () {
    var answer = event.target.innerText;
    if (questionary[questionsIndex].correct !== answer) {
        timeLimit -= 10;
        timeLimitEl.innerText = timeLimit;
    }
    questionsIndex++;
    if (questionsIndex < questionary.length) {
        nextQuestions();
    } else {
        clearInterval(timer)
        questionContainerEl.style.display = "none";
        submitInitialsEl.style.display = "none";

    }


});

//attempt to make time save as score in localstorage 
function storeScores(event) {
    event.preventDefault();
    if (!storedScores) {
        storedScores = [];
        storedScores.push({ "initals": initals, "score": timeLimit });
        document.querySelector("#input-initials").textContent = initals;
        document.querySelector("#high-score").textContent = score;
    }
    localStorage.setItem("itials", initals);
    localStorage.setItem("score", timeLimit);

}















// 