const questions = [
    {
        id: 1,
        question: "What's the tallest building in the world?",
        answers: [
            {
                question: "Shanghai Tower",
                isTrue: false
            },
            {
                question: "Burj Khalifa",
                isTrue: true
            },
            {
                question: "Central Park Tower",
                isTrue: false
            },
            {
                question: "Central Plaza",
                isTrue: false
            }
        ]
    },
    {
        id: 2,
        question: "When did the first episode of The Simpsons aired?",
        answers: [
            {
                question: "January 08, 1989",
                isTrue: false
            },
            {
                question: "August 22, 2000",
                isTrue: false
            },
            {
                question: "November 18, 1991",
                isTrue: false
            },
            {
                question: "December 17, 1989",
                isTrue: true
            }
        ]
    },
    {
        id: 3,
        question: "What's the capital of Canada?",
        answers: [
            {
                question: "Ottawa",
                isTrue: true
            },
            {
                question: "Vancouver",
                isTrue: false
            },
            {
                question: "Montreal",
                isTrue: false
            },
            {
                question: "Calgary",
                isTrue: false
            }
        ]
    },
    {
        id: 4,
        question: "How long is the Nile?",
        answers: [
            {
                question: "7810km",
                isTrue: false
            },
            {
                question: "5422km",
                isTrue: false
            },
            {
                question: "6650km",
                isTrue: true
            },
            {
                question: "10762km",
                isTrue: false
            }
        ]
    },
    {
        id: 5,
        question: "When was Netflix founded?",
        answers: [
            {
                question: "2001",
                isTrue: false
            },
            {
                question: "2015",
                isTrue: false
            },
            {
                question: "1997",
                isTrue: true
            },
            {
                question: "2011",
                isTrue: false
            }
        ]
    }
];
let allAnswers = [];
let cardIndex = 0;

const cardContainer = document.querySelector(".quiz-card-container");
const header = document.querySelector("header");

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion(false);
});

// Functions

function loadQuestion(lastCard) {
    const question = questions[cardIndex];
    const element = document.createElement("div");
    let content = "";
    element.classList.add("quiz-card");
    element.classList.add("slide-right");
    if (lastCard) {
        content = `<div class="card-finished-container">
                    <p><span class="congratulation-msg">Congratulation!</span>
                    <span>You answered all questions!</span></p>
                </div>
                <div class="card-btn-container">
                    <button class="card-btn">Check Result</button>
                </div>`;
        element.innerHTML = content;
        const finishedBtn = element.querySelector(".card-btn");
        finishedBtn.addEventListener("click", () => showResults(element));
    } else {
        element.dataset.id = question.id;
        content = `<div class="question-container">
                    ${question.question}
                </div>
                <div class="answers-container">
                    <div class="answer-box">
                        <div>
                            <input type="radio" name="answer" data-questionid="A" />
                            <p>A: ${question.answers[0].question}</p>
                        </div>
                        <div>
                            <input type="radio" name="answer" data-questionid="B" />
                            <p>B: ${question.answers[1].question}</p>
                        </div>
                    </div>
                    <div class="answer-box">
                        <div>
                            <input type="radio" name="answer" data-questionid="C" />
                            <p>C: ${question.answers[2].question}</p>
                        </div>
                        <div>
                            <input type="radio" name="answer" data-questionid="D" />
                            <p>D: ${question.answers[3].question}</p>
                        </div>
                    </div>
                </div>
                <div class="card-btn-container">
                    <p class="warning">Please choose an answer!</p>
                    <button class="card-btn">Next</button>
                </div>`;
        element.innerHTML = content;
        const cardBtn = element.querySelector('.card-btn');
        cardBtn.addEventListener('click', () => nextQuizCard(element, question));
    }
    cardContainer.appendChild(element);

    setTimeout(function () {
        element.classList.remove("slide-right");
    }, 1200);
}

function nextQuizCard(element, question) {
    const allAnswerBtns = element.querySelectorAll('input[type="radio"]');
    const warningMsg = element.querySelector('.warning');
    let checkedIndex = -1;
    let questionId = "";
    let answer = {};
    for (let i = 0; i < allAnswerBtns.length; i++) {
        if (allAnswerBtns[i].checked) {
            checkedIndex = i;
            console.log(allAnswerBtns[i]);
            questionId = allAnswerBtns[i].dataset.questionid;
        }
    }
    if (checkedIndex !== -1) {
        warningMsg.classList.remove("show");
        const answers = question.answers;
        answer = { isTrue: answers[checkedIndex].isTrue, questionId };

        allAnswers.push(answer);
        console.log(allAnswers);
        cardIndex++;
        element.classList.add('slide-left');
        if (cardIndex < questions.length) {
            loadQuestion(false);
        } else {
            loadQuestion(true);
        }
        setTimeout(function () {
            element.parentNode.removeChild(element);
        }, 1200);
    } else {
        // keine antwort gewählt
        warningMsg.classList.add("show");
    }
}

function showResults(element) {
    element.classList.add('slide-left');
    setTimeout(function () {
        element.parentNode.removeChild(element);
    }, 1200);

    header.classList.add("show-results");
    cardContainer.classList.add("show-results");

    const scoreContainer = document.createElement("div");
    scoreContainer.classList.add("score-container");
    let countAllTrue = 0;
    allAnswers.map((answer) => {
        if (answer.isTrue) {
            countAllTrue++;
        }
    });
    scoreContainer.innerHTML = `<p class="score">You got ${countAllTrue}/${questions.length} questions right!</p>`
    cardContainer.appendChild(scoreContainer);

    const resultContainer = document.createElement("div");
    let allCards = "";
    resultContainer.classList.add("result-container");
    questions.forEach((question, index) => {
        let result = allAnswers[index];
        let cardContainer = document.createElement("div");
        cardContainer.classList.add("result-card");
        if (result.isTrue) {
            cardContainer.classList.add("right");
        } else {
            cardContainer.classList.add("wrong");
        }
        cardContainer.dataset.id = question.id;

        cardContainer.innerHTML = `<p>Question ${index + 1}</p>
            <p>Answer: ${result.questionId}</p>`;
        cardContainer.addEventListener("click", () => showFinishedCard(question, result));
        //allCards += cardContainer;
        resultContainer.appendChild(cardContainer);
    });
    //resultContainer.innerHTML = allCards;
    cardContainer.appendChild(resultContainer);
}

function showFinishedCard(question, yourChoice) {
    const choiceChars = ["A", "B", "C", "D"];
    const overlay = document.createElement("div");
    overlay.classList.add("finished-quiz-overlay");
    overlay.innerHTML = `<div class="quiz-card ${yourChoice.isTrue ? "right" : "wrong"}">
    <div class="question-container">
                    ${question.question}
                </div>
                <div class="answers-container">
                </div>
                <div class="card-btn-container">
                    <button class="card-btn finished">Close</button>
                </div>
                </div>`;
    const answerContainer = overlay.querySelector(".answers-container");
    const closeBtn = overlay.querySelector(".card-btn");
    closeBtn.addEventListener("click", () => removeFinishedCard(overlay));
    const answerBox1 = document.createElement("div");
    const answerBox2 = document.createElement("div");
    answerBox1.classList.add("answer-box");
    answerBox2.classList.add("answer-box");
    question.answers.forEach((answer, index) => {
        const answerElement = document.createElement("div");
        answerElement.innerHTML = `<input type="radio" name="answer" data-questionid=${choiceChars[index]} disabled />
            <p>${choiceChars[index]}: ${answer.question}</p>`;
        const input = answerElement.querySelector("input");
        if (input.dataset.questionid === yourChoice.questionId) {
            input.checked = true;
        }
        if (index < 2) {
            answerBox1.appendChild(answerElement);
        } else {
            answerBox2.appendChild(answerElement);
        }
    });
    answerContainer.appendChild(answerBox1);
    answerContainer.appendChild(answerBox2);
    /*const quizCard = overlay.querySelector(".quiz-card");
    quizCard.appendChild(answerContainer);*/
    document.querySelector("body").prepend(overlay);
}

function removeFinishedCard(element) {
    document.querySelector("body").removeChild(element);
}