// Variables
let dataArray;

let startButton = document.getElementById("btn-start");

let nameInput = document.getElementById("name");

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
    return data;
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