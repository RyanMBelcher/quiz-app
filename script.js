const startButton = document.getElementById("start-btn");
const quizSection = document.getElementById("quiz-proper");
const startSection = document.getElementById("quiz-intro");
const scoreSection = document.getElementById("submit-score");
const finalScore = document.getElementById("score");
const response = document.getElementById("rightOrWrong");
const submitButton = document.getElementById("submit-btn");
const highscoreRanking = document.getElementById("highscores");
const goBackButton = document.getElementById("go-back");
const clearButton = document.getElementById("clear");
const highscoresButton = document.getElementById("highscore-btn");
const scoreTimer = document.getElementById("top-bar");
const rankList = document.getElementById("rankings");

const question = document.getElementById("question");
const answer = document.getElementById("answer-btn");

const timeEl = document.getElementById("timer");
let secondsLeft = 60;

let questionIndex = 0

const questionsConfig = [
    {
        question: "Commonly used data types do not include:",
        answer: [
            {
                text: "1. Strings", correct: false
            },
            {
                text: "2. Booleans", correct: false
            },
            {
                text: "3. Alerts", correct: true
            },
            {
                text: "4. Numbers", correct: false
            }
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed within ____.",
        answer: [
            {
                text: "1. Quotes", correct: false
            },
            {
                text: "2. Curly Brackets", correct: false
            },
            {
                text: "3. Parentheses", correct: true
            },
            {
                text: "4. Square Brackets", correct: false
            }
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ____",
        answer: [
            {
                text: "1. Numbers and Strings", correct: false
            },
            {
                text: "2. Other Arrays", correct: false
            },
            {
                text: "3. Booleans", correct: false
            },
            {
                text: "4. All of the Above", correct: true
            }
        ]
    },
    {
        question: "String values must be enclosed within ____ when being assiged to variables.",
        answer: [
            {
                text: "1. Commas", correct: false
            },
            {
                text: "2. Curly Brackets", correct: false
            },
            {
                text: "3. Quotes", correct: true
            },
            {
                text: "4. Parentheses", correct: false
            }
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: [
            {
                text: "1. JavaScript", correct: false
            },
            {
                text: "2. Terminal/Bash", correct: false
            },
            {
                text: "3. For Loops", correct: false
            },
            {
                text: "4. Console.Log", correct: true
            }
        ]
    }
]

startButton.addEventListener("click", startGame);


function setTime() {
    // Sets interval in variable
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;

        // TODO: stop timer after last question is answered
        if (questionIndex === questionsConfig.length || secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            quizSection.classList.add("hidden");
            scoreSection.classList.remove("hidden");
            finalScore.textContent = "Your final score is " + secondsLeft + ".";
            // Calls function to create and append image

            // } else if (secondsLeft === 0) {
            //     clearInterval(timerInterval);
            //     quizSection.classList.add("hidden");
            //     scoreSection.classList.remove("hidden");
        }

    }, 1000);
}

function startGame() {
    startSection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    setNextQuestion(questionIndex);
    setTime();
}

function setNextQuestion(index) {
    if (index === questionsConfig.length) {
        quizSection.classList.add("hidden");
        scoreSection.classList.remove("hidden");
        return;
    }
    let questionConfig = questionsConfig[index];
    question.innerHTML = questionConfig.question;
    const answers = document.querySelectorAll('.answer');
    for (let i = 0; i < answers.length; i++) {
        answers[i].innerHTML = questionConfig.answer[i].text;
    }
}

function selectAnswer(answerIndex) {
    console.log(answerIndex);
    const config = questionsConfig[questionIndex];
    const answer = config.answer[answerIndex];
    if (answer.correct) {
        response.textContent = "Correct!";
    } else {
        response.textContent = "Wrong!";
        secondsLeft -= 10
    }
    setTimeout(function () {
        response.textContent = "";
    }, 2000)
    questionIndex++;
    setNextQuestion(questionIndex);
}


submitButton.addEventListener("click", submitHighscore)

function submitHighscore(event) {
    event.preventDefault();
    let initials = document.getElementById('initials').value;
    let scoreArr = JSON.parse(localStorage.getItem("userScore")) || [];
    let userScore = {
        initials: initials,
        score: secondsLeft
    }
    scoreArr.push(userScore);
    localStorage.setItem("userScore", JSON.stringify(scoreArr));
    scoreSection.classList.add("hidden");
    highscoreRanking.classList.remove("hidden");
    showHighscore();
}

function showHighscore() {
    scoreTimer.classList.add("hidden");
    const scoreArr = JSON.parse(localStorage.getItem("userScore"));


    for (let i = 0; i < scoreArr.length; i++) {
        const scoreRank = document.createElement("li");
        rankList.appendChild(scoreRank);
        scoreRank.textContent = scoreArr[i].initials + " - " + scoreArr[i].score;
    }
}

clearButton.addEventListener("click", clearScores);

function clearScores() {
    localStorage.removeItem("userScore");
    rankList.innerHTML = "";
}

highscoresButton.addEventListener("click", goToHighscores)

function goToHighscores() {
    startSection.classList.add("hidden");
    highscoreRanking.classList.remove("hidden");
    showHighscore();
}