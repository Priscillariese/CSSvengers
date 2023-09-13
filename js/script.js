let title       = document.querySelector('h1');
let instructions = document.querySelector('#instructions');
let notice      = document.querySelector('#notice');
let progress    = document.querySelector('#progress');
let score = 0; // points for the score
let leaderboard = 0; // leaderboard

// AUDIO
let soundCorrect   = document.querySelector('#soundCorrect');
let soundIncorrect = document.querySelector('#soundIncorrect');
let soundApplause  = document.querySelector('#soundApplause');

// QUESTION
let questionNumber = document.querySelector('#numQuestion');
let questionText   = document.querySelector('#question');

// ALTERNATIVES
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');
let d = document.querySelector('#d');

// article with the class 'questions'
let articleQuestions = document.querySelector('.questions');
// ol li with alternatives
let alternatives = document.querySelector('#alternatives');

const q0 = {
    numQuestion   : 0,
    question     : "Question",
    alternativeA : "Alternative A",
    alternativeB : "Alternative B",
    alternativeC : "Alternative C",
    alternativeD : "Alternative D",
    correct      : "0",
};
const q1 = {
    numQuestion   : 1,
    question     : " Which CSS property is used to define the text color?",
    alternativeA : "color",
    alternativeB : "background-color",
    alternativeC : "text-color",
    alternativeD : "font-color",
    correct      : "color",
};
const q2 = {
    numQuestion   : 2,
    question     : "Which CSS property is used to add space between letters of text?",
    alternativeA : "line-height",
    alternativeB : "word-spacing",
    alternativeC : "letter-spacing",
    alternativeD : "text-spacing",
    correct      : "letter-spacing",
};
const q3 = {
    numQuestion   : 3,
    question     : "In the world of CSS Avengers, which selector wields the mighty power of Thor to select elements with a specific class?",
    alternativeA : "West",
    alternativeB : "East",
    alternativeC : "North",
    alternativeD : "South",
    correct      : "South",
};
const q4 = {
    numQuestion   : 4,
    question     : "The Equator divides the Earth into...",
    alternativeA : "East and West",
    alternativeB : "North and South",
    alternativeC : "Summer and Winter",
    alternativeD : "Solstices and Eclipses",
    correct      : "North and South",
};
const q5 = {
    numQuestion   : 5,
    question     : "Nascent is the same as...",
    alternativeA : "Side where the sun rises",
    alternativeB : "Below the Equator",
    alternativeC : "Side where the sun sets",
    alternativeD : "Above the Equator",
    correct      : "Side where the sun rises",
};
const q6 = {
    numQuestion   : 6,
    question     : "What is the predominant climate in Brazil?",
    alternativeA : "Polar",
    alternativeB : "Tropical",
    alternativeC : "Desert",
    alternativeD : "Temperate in the North",
    correct      : "Tropical",
};
const q7 = {
    numQuestion   : 7,
    question     : "Poente is the same as...",
    alternativeA : "Side where the sun sets",
    alternativeB : "Side where the sun rises",
    alternativeC : "Below the Equator",
    alternativeD : "Above the Equator",
    correct      : "Side where the sun sets",
};
const q8 = {
    numQuestion   : 8,
    question     : "In which continent is Brazil located?",
    alternativeA : "Africa",
    alternativeB : "Europe",
    alternativeC : "Oceania",
    alternativeD : "America",
    correct      : "America",
};
const q9 = {
    numQuestion   : 9,
    question     : "What is the only capital in Brazil crossed by the Equator?",
    alternativeA : "Belém",
    alternativeB : "São Luís",
    alternativeC : "Macapá",
    alternativeD : "Boa Vista",
    correct      : "Macapá",
};
const q10 = {
    numQuestion   : 10,
    question     : "Considering territorial extension, Brazil is the...",
    alternativeA : "3rd largest",
    alternativeB : "2nd largest",
    alternativeC : "4th largest",
    alternativeD : "5th largest",
    correct      : "5th largest",
};

// CONSTANT WITH AN ARRAY OF OBJECTS WITH ALL QUESTIONS
const questions = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

let number = document.querySelector('#number');
let total  = document.querySelector('#total');

number.textContent = q1.numQuestion;

let totalQuestions = (questions.length) - 1;
console.log("Total questions " + totalQuestions);
total.textContent = totalQuestions;

// SET UP THE INITIAL VALUE OF THE FIRST COMPLETE QUESTION TO START THE QUIZ
questionNumber.textContent = q1.numQuestion;
questionText.textContent   = q1.question;
a.textContent = q1.alternativeA;
b.textContent = q1.alternativeB;
c.textContent = q1.alternativeC;
d.textContent = q1.alternativeD;

// SET THE INITIAL VALUE OF THE FIRST COMPLETE QUESTION
a.setAttribute('value', '1A');
b.setAttribute('value', '1B');
c.setAttribute('value', '1C');
d.setAttribute('value', '1D');

// TO SET UP THE NEXT QUESTIONS
function nextQuestion(nQuestion) {
    number.textContent = nQuestion;
    questionNumber.textContent = questions[nQuestion].numQuestion;
    questionText.textContent   = questions[nQuestion].question;
    a.textContent = questions[nQuestion].alternativeA;
    b.textContent = questions[nQuestion].alternativeB;
    c.textContent = questions[nQuestion].alternativeC;
    d.textContent = questions[nQuestion].alternativeD;
    a.setAttribute('value', nQuestion + 'A');
    b.setAttribute('value', nQuestion + 'B');
    c.setAttribute('value', nQuestion + 'C');
    d.setAttribute('value', nQuestion + 'D');
    progress.value = parseInt(progress.value) + 1;
    //console.log(progress.value);
}

// CHECK DOUBLE CLICK ON ALTERNATIVES
alternatives.addEventListener('dblclick', () => {
    //console.log('Double click');
    score -= 10; // deduct 10 points in case of a double click
    if (questionNumber.value == 10 && score == 110) { score = 100; }
});

function lockAlternatives() {
    alternatives.classList.add('locked');
}

function unlockAlternatives() {
    alternatives.classList.remove('locked');
}

function flashOnCorrect() {
    articleQuestions.classList.remove('incorrect');
    articleQuestions.classList.add('correct');
}

function flashOnError() {
    articleQuestions.classList.remove('correct');
    articleQuestions.classList.add('incorrect');
}

function removeFlashing() {
    articleQuestions.classList.remove('correct');
    articleQuestions.classList.remove('incorrect');
}

function checkIfYouGotItRight(nQuestion, answer) {

    let questionNumber = nQuestion.value;
    console.log("Question " + questionNumber);

    let chosenAnswer = answer.textContent;
    //console.log("Chosen " + chosenAnswer);

    let correctAnswer = questions[questionNumber].correct;
    //console.log("Correct " + correctAnswer);

    if (chosenAnswer == correctAnswer) {
        //console.log("Got it right");
        //response.textContent = "Correct 😊";
        flashOnCorrect();
        soundCorrect.play();
        score += 10; // score = score + 10
        if (nQuestion.value == 1 && score == 20) { score = 10; }
    } else {
        //console.log("Wrong!");
        //response.textContent = "Wrong 😢";
        flashOnError();
        soundIncorrect.play();
    }
    setTimeout(() => {
        removeFlashing();
    }, 150);

    // Update leaderboard
    leaderboard = score;
    instructions.textContent = "Score " + leaderboard;

    // Lock option choices
    lockAlternatives();

    setTimeout(function () {

        next = questionNumber + 1;

        if (next > totalQuestions) {
            console.log('End of the Game!');
            endOfGame();
        } else {
            nextQuestion(next);
        }
    }, 150);
    unlockAlternatives();
}

function endOfGame() {

    soundApplause.play();

    let s = 's';
    score == 0 ? s = '' : s = s;
    instructions.textContent = "Game Over! You got " + score + " point" + s;

    instructions.classList.add('score');

    // HIDE THE QUESTION ARTICLE
    articleQuestions.style.display = 'none';

    setTimeout(function () {
        score = 0; // reset leaderboard
        //location.reload();
        instructions.classList.remove('score');
        // RESTART THE GAME
        articleQuestions.style.display = 'block';
        nextQuestion(1);
        instructions.textContent = 'Read the question and click on the correct answer';
    }, 8000);
}
