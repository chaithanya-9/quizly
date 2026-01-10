const header = document.getElementById("header");
const percentageDiv = document.getElementById("percentage-id");
const percentageText = document.getElementById("percentage-text-id");
const scorePTag = document.getElementById("score-p");
const totalTime = document.getElementById("total-time");
const quote = document.getElementById("quote");

const homeButton = document.getElementById("go-home-btn");
const tryAgainButton = document.getElementById("try-again-btn");

let greenPercentage = Number(localStorage.getItem("percentage"));
let score = Number(localStorage.getItem("userScore"));
let totalQuestions = Number(localStorage.getItem("totalQuestions"));
let totalSeconds = Math.floor(Number(localStorage.getItem("timeTaken")) / 1000);
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;

function disableHeader() {
    header.addEventListener('click', (e) => {
        e.preventDefault();
    })
}

function clearQuizStorage() {
    localStorage.removeItem("percentage");
    localStorage.removeItem("userScore");
    localStorage.removeItem("totalQuestions");
    localStorage.removeItem("timeTaken");
}

function renderResultPage() {
    disableHeader();
    percentageDiv.style.background = `conic-gradient( #27ce6dff 0% ${greenPercentage}%, 
    #dd4534ff ${greenPercentage}% 100%)`;
    percentageText.textContent = `${greenPercentage}%`;
    scorePTag.textContent = `Score: ${score}/${totalQuestions}`;
    totalTime.textContent = `Time Taken: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

if (0 <= greenPercentage && greenPercentage < 40) {
    quote.textContent = "This score matches the effort you put in";
}
else if (40 < greenPercentage && greenPercentage < 70) {
    quote.textContent = "You're in the middle because you refused to push.";
} else {
    quote.textContent = "You earned this. Don't let it be a one-time thing.";
}

tryAgainButton.addEventListener('click', () => {
    clearQuizStorage();
    window.location.href = "/html/quizPage.html";
})

homeButton.addEventListener('click', () => {
    clearQuizStorage();
    localStorage.removeItem("quizTitle");
    window.location.href = "/index.html";
})
renderResultPage();
