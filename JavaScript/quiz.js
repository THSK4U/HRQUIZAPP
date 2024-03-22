// function alert() {
//     const advertisement = document.getElementById('advertisement');
//     advertisement.style.display = 'block';
// }

// window.onload = function() {
//     const timeToDisplay = 1000; // 840000 = 14min
//     setTimeout(alert, timeToDisplay);
// };

const startMinutes = 15;
let time = startMinutes * 60;

const down = document.getElementById('timer');

setInterval(updateCounterDown, 1000);

function updateCounterDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
 
    seconds = seconds < 10 ? "0"+ seconds : seconds;

    down.innerHTML = `${minutes}:${seconds}`;
    time--;
}
const questions = [
{
    question:"how are you!",
    answers:[
        {text: "AN1", correct:false},
        {text: "AN2", correct:true},
        {text: "AN3", correct:false},
        {text: "AN4", correct:false},
    ]
},{
    question:"quistion2",
    answers:[
        {text: "AN1", correct:false},
        {text: "AN2", correct:true},
        {text: "AN3", correct:false}
    ]
},{
    question:"quistion 3",
    answers:[
        {text: "AN1", correct:false},
        {text: "AN2", correct:true},
        {text: "AN3", correct:false}
    ]
},{
    question:"quistion 4",
    answers:[
        {text: "AN1", correct:false},
        {text: "AN2", correct:true},
        {text: "AN3", correct:false}
    ]
}
]

const questionElement = document.querySelector(".quastion h2");
const reponseElement = document.querySelector(".reponse");
const conter = document.querySelector(".NumberQ");
const resulta = document.querySelector(".resulta span");
const progress = document.querySelector(".progress-bar");

let index = 0;
let score = 0;

function Start() {
    index = 0;
    Question();
    progressbar();
}

function Question() {
    let question = questions[index];
    questionElement.innerHTML = question.question;

    reponseElement.innerHTML = '';

    question.answers.forEach(answer => {
        const answerElement = document.createElement("div");
        answerElement.classList.add("input", "rounded-5", "border", "p-3", "mb-4");
        answerElement.innerHTML = `
            <span class="fs-">${answer.text}</span>
        `;
        answerElement.addEventListener("click", function() {
            CheckAnswer(answer.correct);
        });
        reponseElement.appendChild(answerElement);
    });
}
function CheckAnswer(correct) {
    if (correct) {
        score++;
    }
    index++;

    if (index < questions.length) {
        Question();
        progressbar();
    } else {
        alert("Quiz finished! Your score is: " + score);
        window.location.href = '/HTML/echecresultats.html';
        resulta.innerHTML = score;
    }
}
 let hi = 0;
let por ;
function progressbar(){
    hi += 100 / questions.length;
    por = hi + '%';
    progress.style.width = por;

    conter.innerHTML = (index + 1 )+ "/16";
}


Start();