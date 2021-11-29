// make var for section housing start button
var btnSection = document.querySelector('#button-hold');
var testContent = document.querySelector('#test-content');
var timeLeft = document.querySelector('#time-left');
var quiz1 = document.querySelector('#question1-hold');
var quiz2 = document.querySelector('#question2-hold');
var quiz3 = document.querySelector('#question3-hold');
var quiz4 = document.querySelector('#question4-hold');
var quiz5 = document.querySelector('#question5-hold');
var time = 20;
var score = 0;
var initials = document.querySelector('#initial-hold');
var subBtn = document.querySelector('#sub-btn');

//make a start button
var makeStartBtn = function() {
    var startBtnEl = document.createElement("button");
    startBtnEl.textContent = "Start Quiz";
    startBtnEl.className = "start-btn";
    btnSection.appendChild(startBtnEl);
}

// set timer
var startQuiz = function() {
    var timer = setInterval(function() {
        timeLeft.innerHTML = time--;
        if (time < 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
    
    question1();
};

var question1 = function() {
    btnSection.remove();
    // make a question appear
    var quizHolder = document.createElement("div");
    quizHolder.className = "quiz-hold";
    quiz1.appendChild(quizHolder);

    var question1 = document.createElement("h3");
    question1.textContent = "Which of these precedes an id element?";
    question1.className = "question-title";
    quizHolder.appendChild(question1);

    var answerA = document.createElement("button");
    answerA.textContent = "#";
    answerA.className = "answer-btn";
    quizHolder.appendChild(answerA);

    var answerB = document.createElement("button");
    answerB.textContent = "/";
    answerB.className = "answer-btn";
    quizHolder.appendChild(answerB);

    var answerC = document.createElement("button");
    answerC.textContent = "$";
    answerC.className = "answer-btn";
    quizHolder.appendChild(answerC);

    var answerD = document.createElement("button");
    answerD.textContent = "*";
    answerD.className = "answer-btn";
    quizHolder.appendChild(answerD);

    answerA.addEventListener("click", scoreAdd1);
    answerB.addEventListener("click", timeSub1);
    answerC.addEventListener("click", timeSub1);
    answerD.addEventListener("click", timeSub1);

    // if they pick the right answer, add one point, move to next question
    
    // if they pick the wrong answer, subtract time, move to next question
};

let scoreAdd1 = function() {
    score++;
    console.log(score);
    question2();
}

let timeSub1 = function() {
    time--;
    question2();
}

var question2 = function() {
    quiz1.remove();
    var quizHolder = document.createElement("div");
    quizHolder.className = "quiz-hold";
    quiz2.appendChild(quizHolder);

    var question2 = document.createElement("h3");
    question2.textContent = "Which of these will not allow a variable to be changed?";
    question2.className = "question-title";
    quizHolder.appendChild(question2);

    var answerA = document.createElement("button");
    answerA.textContent = "var";
    answerA.className = "answer-btn";
    quizHolder.appendChild(answerA);

    var answerB = document.createElement("button");
    answerB.textContent = "let";
    answerB.className = "answer-btn";
    quizHolder.appendChild(answerB);

    var answerC = document.createElement("button");
    answerC.textContent = "const";
    answerC.className = "answer-btn";
    quizHolder.appendChild(answerC);

    var answerD = document.createElement("button");
    answerD.textContent = "none of the above";
    answerD.className = "answer-btn";
    quizHolder.appendChild(answerD);

    answerA.addEventListener("click", timeSub2);
    answerB.addEventListener("click", timeSub2);
    answerC.addEventListener("click", scoreAdd2);
    answerD.addEventListener("click", timeSub2);
}

let scoreAdd2 = function() {
    score++;
    console.log(score);
    question3();
}

let timeSub2 = function() {
    time--;
    question3();
}

var question3 = function() {
    quiz2.remove();
    var quizHolder = document.createElement("div");
    quizHolder.className = "quiz-hold";
    quiz3.appendChild(quizHolder);

    var question3 = document.createElement("h3");
    question3.textContent = "Which of these can be used to add a value to a variable?";
    question3.className = "question-title";
    quizHolder.appendChild(question3);

    var answerA = document.createElement("button");
    answerA.textContent = "++";
    answerA.className = "answer-btn";
    quizHolder.appendChild(answerA);

    var answerB = document.createElement("button");
    answerB.textContent = "plusOne";
    answerB.className = "answer-btn";
    quizHolder.appendChild(answerB);

    var answerC = document.createElement("button");
    answerC.textContent = "+one";
    answerC.className = "answer-btn";
    quizHolder.appendChild(answerC);

    var answerD = document.createElement("button");
    answerD.textContent = "add2toVar";
    answerD.className = "answer-btn";
    quizHolder.appendChild(answerD);

    answerA.addEventListener("click", scoreAdd3);
    answerB.addEventListener("click", timeSub3);
    answerC.addEventListener("click", timeSub3);
    answerD.addEventListener("click", timeSub3);
}

let scoreAdd3 = function() {
    score++;
    console.log(score);
    question4();
}

let timeSub3 = function() {
    time--;
    question4();
}

var question4 = function() {
    quiz3.remove();
    var quizHolder = document.createElement("div");
    quizHolder.className = "quiz-hold";
    quiz4.appendChild(quizHolder);

    var question4 = document.createElement("h3");
    question4.textContent = "Which of these is the proper syntax to reference an element in HTML?";
    question4.className = "question-title";
    quizHolder.appendChild(question4);

    var answerA = document.createElement("button");
    answerA.textContent = "Document.querySelector";
    answerA.className = "answer-btn";
    quizHolder.appendChild(answerA);

    var answerB = document.createElement("button");
    answerB.textContent = "document,querySelector";
    answerB.className = "answer-btn";
    quizHolder.appendChild(answerB);

    var answerC = document.createElement("button");
    answerC.textContent = "document.querySelector";
    answerC.className = "answer-btn";
    quizHolder.appendChild(answerC);

    var answerD = document.createElement("button");
    answerD.textContent = "document.Queryselector";
    answerD.className = "answer-btn";
    quizHolder.appendChild(answerD);

    answerA.addEventListener("click", timeSub4);
    answerB.addEventListener("click", timeSub4);
    answerC.addEventListener("click", scoreAdd4);
    answerD.addEventListener("click", timeSub4);
};

let scoreAdd4 = function() {
    score++;
    console.log(score);
    question5();
}

let timeSub4 = function() {
    time--;
    question5();
}

var question5 = function() {
    quiz4.remove();
    var quizHolder = document.createElement("div");
    quizHolder.className = "quiz-hold";
    quiz5.appendChild(quizHolder);

    var question5 = document.createElement("h3");
    question5.textContent = "Which of these is the proper symbol to use when endiing a line?";
    question5.className = "question-title";
    quizHolder.appendChild(question5);

    var answerA = document.createElement("button");
    answerA.textContent = ".";
    answerA.className = "answer-btn";
    quizHolder.appendChild(answerA);

    var answerB = document.createElement("button");
    answerB.textContent = ";";
    answerB.className = "answer-btn";
    quizHolder.appendChild(answerB);

    var answerC = document.createElement("button");
    answerC.textContent = ":";
    answerC.className = "answer-btn";
    quizHolder.appendChild(answerC);

    var answerD = document.createElement("button");
    answerD.textContent = ")";
    answerD.className = "answer-btn";
    quizHolder.appendChild(answerD);

    answerA.addEventListener("click", timeSub5);
    answerB.addEventListener("click", scoreAdd5);
    answerC.addEventListener("click", timeSub5);
    answerD.addEventListener("click", timeSub5);
}

let scoreAdd5 = function() {
    score++;
    console.log(score);
    endQuiz();
}

let timeSub5 = function() {
    time--;
    endQuiz();
}

var endQuiz = function() {
    testContent.remove();
    initials.classList.remove("initials");
    subBtn.classList.remove("initials");
}

let scoreSub = function() {
    console.log(initials.value);
    let playerInfo = {
        playerInitials: initials.value,
        playerScore: score
    };
    
    localStorage.setItem("info", JSON.stringify(playerInfo));
    //localStorage.setItem("final-score", score);
    initials.classList.add("initials");
    subBtn.classList.add("initials");
    console.log(playerInfo);
    
};



makeStartBtn();

subBtn.onclick = scoreSub;
// make event listener for start button
btnSection.addEventListener("click", startQuiz);
