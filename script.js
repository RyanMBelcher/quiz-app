const startButton = document.getElementById("start-btn")
const question = document.getElementById("quiz")

const questionConfig = [
    {
        question: "Commonly used data types do not include:",
        answer: [
            {
                text: "1. Strings", correct: false,
                text: "2. Booleans", correct: false,
                text: "3. Alerts", correct: true,
                text: "4. Numbers", correct: false
            }
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed within ____.",
        answer: [
            {
                text: "1. Quotes", correct: false,
                text: "2. Curly Brackets", correct: false,
                text: "3. Parentheses", correct: true,
                text: "4. Square Brackets", correct: false
            }
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ____",
        answer: [
            {
                text: "1. Numbers and Strings", correct: false,
                text: "2. Other Arrays", correct: false,
                text: "3. Booleans", correct: false,
                text: "4. All of the Above", correct: true
            }
        ]
    },
    {
        question: "String values must be enclosed within ____ when being assiged to variables.",
        answer: [
            {
                text: "1. Commas", correct: false,
                text: "2. Curly Brackets", correct: false,
                text: "3. Quotes", correct: true,
                text: "4. Parentheses", correct: false
            }
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: [
            {
                text: "1. JavaScript", correct: false,
                text: "2. Terminal/Bash", correct: false,
                text: "3. For Loops", correct: false,
                text: "4. Console.Log", correct: true,
            }
        ]
    }
]

startButton.addEventListener("click", startGame);

function startGame() {
    console.log("Started")
    var startSection = document.getElementById("quiz-intro");
    startSection.classList.add("hidden");
}

// function setNextQuestion() {

// }

// function selectAnswer() {

// }