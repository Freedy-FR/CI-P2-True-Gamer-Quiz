// Variables
let dataArray;

// Api
let url = "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple"


/**
 * Api function to fetch an array of objects with questions and answer
 */
async function getData() {
    let response = await fetch(url)
    let data = await response.json()
    return data;
}