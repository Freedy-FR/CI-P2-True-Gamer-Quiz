// Variables
let startButton = document.getElementById("btn-start");
let nameInput = document.getElementById("name");
let questionInput = document.getElementById("question");
let answerGrid = document.getElementById("btn-answer");
let answerButtons = document.getElementsByClassName("btn-option");
let nextButton = document.getElementById("btn-next");
let questionStatus = document.getElementById("status");
let nameStatus = document.getElementById("name-status");
let displayScore = document.getElementById("scoreCount");
let totalQuestions = document.getElementById("total-questions");
let displayQuestionNumber = document.getElementById("questionNumber");
let finalResultScore = document.getElementById("final-result");
let retryButton = document.getElementById("retry");
let rulesButton = document.getElementById("btn-rules");
let aboutDiv = document.getElementById("footer-about");
let backButton = document.getElementsByClassName("btn-back");
let resultMessage = document.getElementById("text-result");

// Answers variables
let correctAnswer;
let incorrectAnswer;

// Score and question counters variables
let currentScore = 0;
let questionAnswered = 1;
let numberOfQuestions = 11;

// Call pages variables
let mainPage = document.getElementById("main-page");
let gameArea = document.getElementById("game-area");
let resultPageArea = document.getElementById("results");
let rulesPageArea = document.getElementById("rules");
let aboutPageArea = document.getElementById("about");

// DOM load event listener
document.addEventListener("DOMContentLoaded", () => {
    nameInput.focus();
    displayScore.innerHTML = currentScore;
    totalQuestions.innerHTML = numberOfQuestions - 1;
    getData();
});

// Api url
let url = "https://opentdb.com/api.php?amount=1&category=15&difficulty=easy&type=multiple";

// Code taken from CodeCast Tutorial
/**
 * Api function to fetch an array of objects with questions and answer.
 */
async function getData() {
    let response = await fetch(url);
    let data = await response.json();
    questionStatus.innerHTML = "";
    gameArea.classList.remove("correct-boxshadow");
    gameArea.classList.remove("incorrect-boxshadow");
    showQuestion(data.results[0]);
}

/**
 * Function that store the API data in variables, randomize the correct and incorrect answer and log then to the html.
 */
function showQuestion(data) {
    nextButton.disabled = true;
    questionStatus.innerHTML = `<p class="questionPara">Please insert an Answer!!</p>`;
    correctAnswer = data.correct_answer;
    incorrectAnswer = data.incorrect_answers;
    let questionsList = incorrectAnswer;
    questionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
    questionInput.innerHTML = `<p class="questionPara">${data.question}</p>`;
    answerGrid.innerHTML = `
    ${questionsList.map((option, index) =>`
    <button class="btn-option btn">${index +1} - <span>${option}</span></button>
    `).join('')}
    `;
    selectBtn();
}

/**
 * Function that add an event listener for each answer button,
 * then checks if they have the highlight class and if clicked add the highlight class to them.
 */
function selectBtn() {
    answerGrid.querySelectorAll("button").forEach((option) => {
        option.addEventListener("click", () => {
            if (answerGrid.querySelector(".highlighted")) {
                let highlightedOption = answerGrid.querySelector(".highlighted");
                highlightedOption.classList.remove("highlighted");
            }
            option.classList.add("highlighted");
            questionStatus.innerHTML = "";
            nextButton.disabled = false;
        });
    });
}

// Next button event listener
nextButton.addEventListener("click", checkAnswerNext);

/**
 * Function that compares the highlighted clicked button to the correct answer provided by the API,
 * returns the correct and incorrect feedback messages and show the respective color to the boxshadow.
 */
function checkAnswerNext() {
    if (answerGrid.querySelector(".highlighted")) {
        let highlightedButton = answerGrid.querySelector(".highlighted span").textContent;

        if (highlightedButton == HTMLtoString(correctAnswer)) {
            currentScore++;
            questionStatus.innerHTML = `<p class="questionPara"> You got it right! <i class="fa-regular fa-circle-check"></i></p>`;
            gameArea.classList.add("correct-boxshadow");
        } else {
            questionStatus.innerHTML = `<p class="questionPara"> You got it wrong! <i class="fa-sharp fa-solid fa-circle-xmark"></i></p><br><p class="questionPara">Correct Answer: <span class="correct-color">${correctAnswer}</span></p>`;
            gameArea.classList.add("incorrect-boxshadow");
        }
    }
    counterFunctions();
}

/**
 * Function that parse the html code to text strings and returns the text string to compare to the clicked answer.
 */
function HTMLtoString(textString) {
    let source = new DOMParser().parseFromString(textString, "text/html");
    return source.documentElement.textContent;
}

/**
 * Function that increase the counters and display then to the screen,
 * adds delay to the callout of the next question and call out the next question or the result page.
 */
function counterFunctions() {

    questionAnswered++;

    // Question number to show to the screen
    if (questionAnswered == 11) {
        displayQuestionNumber.innerHTML = `Finished`;
    }

    displayScore.innerHTML = currentScore;

    // Question answered vs total question
    if (questionAnswered == numberOfQuestions) {
        disableOptionButtons();
        nextButton.disabled = true;
        setTimeout(() => {
            resultPage();
        }, 2000);

    } else {
        disableOptionButtons();
        nextButton.disabled = true;
        setTimeout(() => {
            getData();
            displayQuestionNumber.innerHTML = questionAnswered;
        }, 2000);
    }
}

/**
 * Function to disable all answer buttons on the game area.
 */
function disableOptionButtons() {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].disabled = true;
    }
}

/**
 * Function to enable all answer buttons on the game area.
 */
function enableOptionButtons() {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].disabled = false;
    }
}

// Start game button event listener
startButton.addEventListener("click", startGame);

/**
 * Function to check if name was inserted and to hide main page and bring the game area to the screen.
 */
function startGame() {
    if (nameInput.value == "") {
        nameStatus.innerHTML = `<p class="name-status">Please insert your name to start the game!</p>`;
    } else {
        nameStatus.innerHTML = "";
        mainPage.classList.add("hide");
        gameArea.classList.remove("hide");
        showQuestion();
    }
}

/**
 * Function to call the result page and show the result messa and score.
 */
function resultPage() {
    gameArea.classList.add("hide");
    resultPageArea.classList.remove("hide");
    resultMessage.innerHTML = `<p>Congratulations ${nameInput.value} you results are: </p>`;
    finalResultScore.innerHTML = document.getElementById("score").innerHTML;
}

// Retry button event listener
retryButton.addEventListener("click", retryFunction);

/**
 * Function to restart the game and call the reset scores and counters.
 */
function retryFunction() {
    resultPageArea.classList.add("hide");
    resetGame();
    startGame();

}

/**
 * Function to reset scores and counters and styles.
 */
function resetGame() {
    currentScore = 0;
    questionAnswered = 1;
    numberOfQuestions = 11;
    displayScore.innerHTML = currentScore;
    totalQuestions.innerHTML = numberOfQuestions - 1;
    displayQuestionNumber.innerHTML = questionAnswered;
    gameArea.classList.remove("correct-boxshadow");
    gameArea.classList.remove("incorrect-boxshadow");
    nameInput.focus();
    nextButton.disabled = false;
    enableOptionButtons();
}

// Rules Page event listener
rulesButton.addEventListener("click", rulesPage);

/**
 * Function to call the rules page.
 */
function rulesPage() {
    rulesPageArea.classList.remove("hide");
    mainPage.classList.add("hide");
}

// About page event listener
aboutDiv.addEventListener("click", aboutPage);

/**
 * Function to call the about page.
 */
function aboutPage() {
    aboutPageArea.classList.remove("hide");
    mainPage.classList.add("hide");
    rulesPageArea.classList.add("hide");
    resultPageArea.classList.add("hide");
    gameArea.classList.add("hide");
}

// Back button event listener iteration
for (let i = 0; i < backButton.length; i++) {
    backButton[i].addEventListener("click", backFunction);
}

/**
 * Function that goes back to the back page and call the reset game function.
 */
function backFunction() {
    mainPage.classList.remove("hide");
    aboutPageArea.classList.add("hide");
    rulesPageArea.classList.add("hide");
    resultPageArea.classList.add("hide");
    resetGame();
}