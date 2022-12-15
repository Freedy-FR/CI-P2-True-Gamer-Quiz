// Variables
let startButton = document.getElementById("btn-start");

let nameInput = document.getElementById("name");
let questionInput = document.getElementById("question");
let answerGrid = document.getElementById("btn-answer");
let nextButton = document.getElementById("btn-next");
let questionStatus = document.getElementById("status");

let correctAnswer = "";
let incorrectAnswer = "";

let currentScore = 0;
let numberOfQuestions = 10;

let mainPage = document.getElementById("main-page");
let gameArea = document.getElementById("game-area");

// DOM load
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("scoreCount").innerHTML = currentScore;
    document.getElementById("total-questions").innerHTML = numberOfQuestions;
    getData();
});


// Api url
let url = "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple";

/**
 * Api function to fetch an array of objects with questions and answer
 */
async function getData() {
    let response = await fetch(url);
    let data = await response.json();
    showQuestion(data.results[0]);
};


// Show Questions and answers function
function showQuestion(data) {
    correctAnswer = data.correct_answer;
    incorrectAnswer = data.incorrect_answers;
    let questionsList = incorrectAnswer;
    questionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
    questionInput.innerHTML = `<p>${data.question}</p>`;
    answerGrid.innerHTML = `
    ${questionsList.map((option, index) =>`
    <button class="btn">${index +1} - <span>${option}</span></button>
    `).join('')}
    `;
    selectBtn();
};


// Button selector
function selectBtn() {
    answerGrid.querySelectorAll("button").forEach((option) => {
        option.addEventListener("click", () => {
            if (answerGrid.querySelector(".highlighted")) {
                let highlightedOption = answerGrid.querySelector(".highlighted");
                highlightedOption.classList.remove("highlighted");
            }
            option.classList.add("highlighted");
        })
    })
};


// Next button and check answer
nextButton.addEventListener("click", checkAnswerNext);

function checkAnswerNext() {
    if (answerGrid.querySelector(".highlighted")) {
        let highlightedButton = answerGrid.querySelector(".highlighted span").textContent;
        console.log(highlightedButton);

        if (highlightedButton == correctAnswer) {
            currentScore++;
            questionStatus.innerHTML = `<p> You got it right! <i class="fa-regular fa-circle-check"></i></p>`;
        } else {
            questionStatus.innerHTML = `<p> You got it wrong! <i class="fa-sharp fa-solid fa-circle-xmark"></i></p><br><p>Correct Answer: ${correctAnswer}</p>`;
        }
    }
};




// Start game function
startButton.addEventListener("click", startGame);

function startGame() {
    if (nameInput.value == "") {
        alert("Please insert a name to play!");
    } else {
        mainPage.classList.add("hide");
        gameArea.classList.remove("hide");
    }
};