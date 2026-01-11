import { htmlBasicsQuestions } from './questions.js';
import { htmlStructureQuestions } from './questions.js';
import { htmlAdvanceQuestions } from './questions.js';
import { cssBasicsQuestions } from './questions.js';
import { cssLayoutQuestions } from './questions.js';
import { cssAdvanceQuestions } from './questions.js';
import { jsBasicsQuestions } from './questions.js';
import { jsLogicQuestions } from './questions.js';
import { jsAdvanceQuestions } from './questions.js';

const quizHeaderH1Tag = document.getElementById("quiz-title-h1");
const quizTitle = localStorage.getItem("quizTitle");
quizHeaderH1Tag.textContent = quizTitle;

const presentQuestionNumberPTag = document.getElementById("present-question-number-p");
const timer = document.getElementById("timer");
const questionNumberSpanTag = document.getElementById("question-number-span");
const questionText = document.getElementById("question-text");
const optionsDiv = document.getElementById("options-div");
const skipButton = document.getElementById("skip-btn");
const nextButton = document.getElementById("next-btn");
const header = document.getElementById("header");

let currentQuestionIndex = 0;
let userScore = 0;
let selectedOptionIndex = null;
let percentage = 0;

let startTime;
let timeTaken;
let currentQuestions = [];
let totalQuestions = 0;
let quizEndTime = null;
let timerInterval = null;
const basicTime = 10;
const moderateTime = 15;
const advanceTime = 25;


function categoryTimer() {
    timerInterval = setInterval(() => {
        const remainingTime = quizEndTime - Date.now();
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            timer.textContent = "00:00";
            time();
            sendToLocalStorage();
            window.location.href = "resultPage.html";
            return;
        }
        const minutes = Math.floor(remainingTime / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        timer.textContent =
            `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }, 1000);
}

function renderQuestion() {
    let question = currentQuestions[currentQuestionIndex];
    presentQuestionNumberPTag.textContent = `${currentQuestionIndex + 1}/${totalQuestions}`;
    questionNumberSpanTag.textContent = `${question.queNo}.`;
    questionText.textContent = `${currentQuestions[currentQuestionIndex].queText}`;
    optionsDiv.textContent = "";
    question.queOptions.forEach((optionText, index) => {
        const p = document.createElement('p');
        p.textContent = optionText;
        p.classList.add("option-p");
        p.dataset.index = index;

        p.addEventListener('click', () => {
            selectOption(p, index);
        });
        optionsDiv.appendChild(p);
    })
}

function selectOption(element, index) {
    document.querySelectorAll(".option-p").forEach((p) => {
        p.classList.remove("selected-option");
    })
    element.classList.add("selected-option");
    selectedOptionIndex = index;
}

nextButton.addEventListener('click', () => {
    if (selectedOptionIndex === null) {
        alert("select an option first");
        return;
    }

    const correctOption = currentQuestions[currentQuestionIndex].correctOption;
    if (selectedOptionIndex === correctOption) {
        userScore++;
    }

    selectedOptionIndex = null;
    currentQuestionIndex++;

    if (currentQuestionIndex < totalQuestions) {
        renderQuestion();
    } else {
        clearInterval(timerInterval);
        timer.textContent = "00:00";
        time();
        sendToLocalStorage();
        window.location.href = "resultPage.html";
    }
})

skipButton.addEventListener('click', () => {
    selectedOptionIndex = null;
    currentQuestionIndex++;

    if (currentQuestionIndex < totalQuestions) {
        renderQuestion();
    } else {
        clearInterval(timerInterval);
        timer.textContent = "00:00";
        time();
        sendToLocalStorage();
        window.location.href = "../html/resultPage.html";
    }
})

function sendToLocalStorage() {
    percentage = Math.round((userScore / totalQuestions) * 100);
    localStorage.setItem("percentage", percentage);
    localStorage.setItem("userScore", userScore);
    localStorage.setItem("totalQuestions", totalQuestions);
}

function time() {
    timeTaken = Date.now() - startTime;
    localStorage.setItem("timeTaken", timeTaken);
}

function disableHeader() {
    header.addEventListener('click', (e) => {
        e.preventDefault();
    })
}

function startPoint(categoryQuestions, totalTime) {
    startTime = Date.now();
    currentQuestions = categoryQuestions;
    totalQuestions = currentQuestions.length;
    quizEndTime = Date.now() + totalTime * 60 * 1000;
    timer.textContent = `${totalTime}:00`;

    disableHeader();
    categoryTimer(quizEndTime);
    renderQuestion();
}

if (quizTitle === "HTML Basics") {
    startPoint(htmlBasicsQuestions, basicTime);
}
else if (quizTitle === "HTML Structure") {
    startPoint(htmlStructureQuestions, moderateTime);
}
else if (quizTitle === "HTML Advance") {
    startPoint(htmlAdvanceQuestions, advanceTime);
}
else if (quizTitle === "CSS Basics") {
    startPoint(cssBasicsQuestions, basicTime);
}
else if (quizTitle === "CSS Layout") {
    startPoint(cssLayoutQuestions, moderateTime);
}
else if (quizTitle === "CSS Advance") {
    startPoint(cssAdvanceQuestions, advanceTime);
}
else if (quizTitle === "JavaScript Basics") {
    startPoint(jsBasicsQuestions, basicTime);
}
else if (quizTitle === "JavaScript Logic") {
    startPoint(jsLogicQuestions, moderateTime);
}
else if (quizTitle === "JavaScript Advance") {
    startPoint(jsAdvanceQuestions, advanceTime);
}
