const startButton = document.getElementById("start-btn");
const quizSection = document.getElementById("quiz-proper");
const startSection = document.getElementById("quiz-intro");
const scoreSection = document.getElementById("submit-score");
const finalScore = document.getElementById("score");
const response = document.getElementById("right-or-wrong");
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
        question: "According to rule 4.1.b, a player may have no more than how many clubs in his bag at the start of or at any time during a round?",
        answer: [
            {
                text: "1. 18 Clubs", correct: false
            },
            {
                text: "2. 16 Clubs", correct: false
            },
            {
                text: "3. 14 Clubs", correct: true
            },
            {
                text: "4. 12 Clubs", correct: false
            }
        ]
    },
    {
        question: "If a player's ball is on the green and there is abnormal interfence by an abnormal course condition (for example, casual water) what option does the player have?",
        answer: [
            {
                text: "1. Move the ball to the nearest point of complete relief.", correct: true
            },
            {
                text: "2. Wait for the water to dry up.", correct: false
            },
            {
                text: "3. Play the ball as it lies.", correct: false
            },
            {
                text: "4. Give up. Golf is too hard anyways.", correct: false
            }
        ]
    },
    {
        question: "What happens if a plays ball that is at rest moves due to natural forces (wind or water)?",
        answer: [
            {
                text: "1. There is a one stroke penalty and the ball must be moved back to its previous spot.", correct: false
            },
            {
                text: "2. There is no penalty and the ball must be moved back to is previous spot.", correct: false
            },
            {
                text: "3. There is a one stroke penalty and the must be played from its new spot.", correct: false
            },
            {
                text: "4. There is no penalty and the ball must be played from its new spot.", correct: true
            }
        ]
    },
    {
        question: "What is the penalty for lifting your ball without marking its spot?",
        answer: [
            {
                text: "1. No penalty", correct: false
            },
            {
                text: "2. 1 Stroke", correct: true
            },
            {
                text: "3. 2 Strokes", correct: false
            },
            {
                text: "4. Disqualification", correct: false
            }
        ]
    },
    {
        question: "What is the penalty for a player deliberatly moving, bending, or breaking and growing or attached natural object in order to improve conditions affecting his or her stroke?:",
        answer: [
            {
                text: "1. Disqualification", correct: false
            },
            {
                text: "2. One Stroke", correct: false
            },
            {
                text: "3. Nothing, the greenskeeper should have removed that branch.", correct: false
            },
            {
                text: "4. Two Strokes", correct: true
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
    quizSection.classList.add("hidden");
    showHighscore();
}