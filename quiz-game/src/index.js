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
    },
    {
        id: 6,
        question: "Which artist painted the ceiling of the Sistine Chapel in Rome?",
        answers: [
            {
                question: "Michelangelo Buonarroti",
                isTrue: true
            },
            {
                question: "Leonardo da Vinci",
                isTrue: false
            },
            {
                question: "Raffaello Sanzio",
                isTrue: false
            },
            {
                question: "Donato di Niccolò",
                isTrue: false
            }
        ]
    },
    {
        id: 7,
        question: "What year was the very first model of the iPhone released?",
        answers: [
            {
                question: "2005",
                isTrue: false
            },
            {
                question: "1999",
                isTrue: false
            },
            {
                question: "2007",
                isTrue: true
            },
            {
                question: "2004",
                isTrue: false
            }
        ]
    },
    {
        id: 8,
        question: "Who was the first woman to win a Nobel Prize?",
        answers: [
            {
                question: "Bertha von Suttner",
                isTrue: false
            },
            {
                question: "Mother Teresa",
                isTrue: false
            },
            {
                question: "Marie Curie",
                isTrue: true
            },
            {
                question: "Elizabeth Blackwell",
                isTrue: false
            }
        ]
    },
    {
        id: 9,
        question: "Which planet has the most gravity?",
        answers: [
            {
                question: "Mars",
                isTrue: false
            },
            {
                question: "Earth",
                isTrue: false
            },
            {
                question: "Saturn",
                isTrue: false
            },
            {
                question: "Jupiter",
                isTrue: true
            }
        ]
    },
    {
        id: 10,
        question: "Which country produces the most coffee in the world?",
        answers: [
            {
                question: "Vietnam",
                isTrue: false
            },
            {
                question: "Colombia",
                isTrue: false
            },
            {
                question: "Italy",
                isTrue: false
            },
            {
                question: "Brazil",
                isTrue: true
            }
        ]
    },
    {
        id: 11,
        question: "What was Superman's birth name?",
        answers: [
            {
                question: "Kal-El",
                isTrue: true
            },
            {
                question: "Clark Kent",
                isTrue: false
            },
            {
                question: "Zod",
                isTrue: false
            },
            {
                question: "Bruce",
                isTrue: false
            }
        ]
    },
    {
        id: 12,
        question: "What is the smallest country in the world?",
        answers: [
            {
                question: "Vatican City",
                isTrue: true
            },
            {
                question: "Monaco",
                isTrue: false
            },
            {
                question: "Venice",
                isTrue: false
            },
            {
                question: "San Marino",
                isTrue: false
            }
        ]
    },
    {
        id: 13,
        question: "Which name is rapper Sean Combs better known by?",
        answers: [
            {
                question: "Eminem",
                isTrue: false
            },
            {
                question: "P.Diddy",
                isTrue: true
            },
            {
                question: "Lil Nas X",
                isTrue: false
            },
            {
                question: "Bow Wow",
                isTrue: false
            }
        ]
    },
    {
        id: 14,
        question: "When was the company Nike founded?",
        answers: [
            {
                question: "1954",
                isTrue: false
            },
            {
                question: "1895",
                isTrue: false
            },
            {
                question: "1971",
                isTrue: true
            },
            {
                question: "1981",
                isTrue: false
            }
        ]
    },
    {
        id: 15,
        question: "The book \"Da Vinci Code\" was written by who?",
        answers: [
            {
                question: "Stephen King",
                isTrue: false
            },
            {
                question: "George R. R. Martin",
                isTrue: false
            },
            {
                question: "Raymond Kipling",
                isTrue: false
            },
            {
                question: "Dan Brown",
                isTrue: true
            }
        ]
    },
    {
        id: 16,
        question: "How many films did Sean Connery play James Bond in?",
        answers: [
            {
                question: "7",
                isTrue: true
            },
            {
                question: "9",
                isTrue: false
            },
            {
                question: "5",
                isTrue: false
            },
            {
                question: "12",
                isTrue: false
            }
        ]
    },
    {
        id: 17,
        question: "When did the death sentence end in France?",
        answers: [
            {
                question: "1878",
                isTrue: false
            },
            {
                question: "1889",
                isTrue: false
            },
            {
                question: "1901",
                isTrue: false
            },
            {
                question: "1981",
                isTrue: true
            }
        ]
    },
    {
        id: 18,
        question: "How many eyes does a bee have?",
        answers: [
            {
                question: "2",
                isTrue: false
            },
            {
                question: "5",
                isTrue: true
            },
            {
                question: "22",
                isTrue: false
            },
            {
                question: "89",
                isTrue: false
            }
        ]
    },
    {
        id: 19,
        question: "Who is the richest person in the world as of 2020?",
        answers: [
            {
                question: "Jeff Bezos",
                isTrue: true
            },
            {
                question: "Mark Zuckerberg",
                isTrue: false
            },
            {
                question: "Bill Gates",
                isTrue: false
            },
            {
                question: "Donald Trump",
                isTrue: false
            }
        ]
    },
    {
        id: 20,
        question: "When did contruction on the Empire State building started?",
        answers: [
            {
                question: "1944",
                isTrue: false
            },
            {
                question: "1894",
                isTrue: false
            },
            {
                question: "1929",
                isTrue: true
            },
            {
                question: "1905",
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