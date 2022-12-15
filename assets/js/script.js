// Variables
let dataArray;

let startButton = document.getElementById("btn-start");

let nameInput = document.getElementById("name");
let questionInput = document.getElementById("question");
let answerGrid = document.getElementById("btn-answer");
let correctAnswer = "";
let incorrectAnswer = "";
let numberOfQuestions = 10;

let mainPage = document.getElementById("main-page");
let gameArea = document.getElementById("game-area");

// Api
let url = "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple";


/**
 * Api function to fetch an array of objects with questions and answer
 */
async function getData() {
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data.results);
    // return data;
    console.log(data.results[0]);
    showQuestion(data.results[0]);
};

// Start game function

startButton.addEventListener("click", startGame);


function startGame() {
    // startButton.classList.add("hide");
    if (nameInput.value == "") {
        alert("Please insert a name to play!");
    } else {
        mainPage.classList.add("hide");
        gameArea.classList.remove("hide");
    }
};

function showQuestion(data) {
    correctAnswer = data.correct_answer;
    incorrectAnswer = data.incorrect_answers;
    let questionsList = incorrectAnswer;
    questionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
    questionInput.innerHTML = `<p>${data.question}</p>`;
}

getData();