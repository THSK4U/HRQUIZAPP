
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
        question:"Quelle est la capitale du Japon ?",
          answers:[
              {text:"Pékin ",correct: false},
              {text:"Tokyo",correct:true},
              {text:"Séoul",correct:false},
              {text:"Bangkok",correct:false},
      
          ]
      
      },{
        question:"Combien de planètes dans notre système solaire?",
          answers:[
              {text:"11" , correct:false},
              {text:"7",correct:false},
              {text:"8",correct:true},
              {text:"10",correct:false},
          ]
      },
      {
        question:"Qui a écrit 'Romeo et Juliette'",
      
          answers:[
              {text:"William Shakespeare" , correct:true},
              {text:"Charles Dickens",correct:false},
              {text:"Jane Austen",correct:false},
              {text:"Mark Twain",correct:false},]
      },{
          
              question:"Quel est l'élément le plus abondant dans l'atmosphère terrestre?",
              answers:[
                  {text:"Azote" , correct:false},
                  {text:"Hydrogène",correct:false},
                  {text:"Dioxyde de carbone ",correct:false},
                  {text:"Oxygène",correct:true},
              ]
          
      }
      ,{
        question:"What is the opposite of 'hot'?",
        answers:[
            {text:"Warm" , correct:false},
            {text:"Cold",correct:true},
            {text:"Spicy",correct:false},
            {text:"Cool",correct:false},
        ]
      }
      ,{
        question:"Which of the following is a type of fruit?",
        answers:[
            {text:"Potato" , correct:false},
            {text:"Carrot",correct:false},
            {text:"Apple",correct:true},
            {text:"Broccoli",correct:false},
        ]
      }
      ,{
        question:"Complete the famous proverb: 'A bird in the hand is worth...",
        answers:[
            {text:"Two in the bush" , correct:false},
            {text:"One in the tree",correct:false},
            {text:"None at all",correct:false},
            {text:"Two in the hand",correct:true},
        ]
      }
      ,{
        question:"What does the acronym 'NASA' stand for?",
        answers:[
            {text:"National Air and Space Association" , correct:false},
            {text:"National Aeronautics and Space Administration",correct:true},
            {text:"North American Space Agency",correct:false},
            {text:"New Astronomical Studies Association",correct:false},
        ]
      }
      ,{
        question:"Qu'est-ce que HTML?",
        answers:[
            {text:"Un langage de programmation pour le développement web" , correct:false},
            {text:"Un langage de balisage pour créer des pages web",correct:true},
            {text:"Un langage de programmation pour l'intelligence artificielles",correct:false},
            {text:"Un système d'exploitation pour les serveurs web",correct:false},
        ]
      }
      ,{
        question:"Quelle est la signification de CSS ?",
        answers:[
            {text:"Cascading Style Sheets " , correct:true},
            {text:"Computer Software System",correct:false},
            {text:"UCreative Style System",correct:false},
            {text:" Coding Style System",correct:false},
        ]
      }
      
      ,{
        question:"Quel langage de programmation est souvent utilisé pour le développement côté serveur ?",
        answers:[
            {text:"HTML " , correct:false},
            {text:"JavaScript",correct:false},
            {text:"Python",correct:false},
            {text:"PHP",correct:true},
        ]
      }
      ,{
        question:"Quelle est la fonction principale de Git ?",
        answers:[
            {text:"Éditer des fichiers texte " , correct:false},
            {text:"Contrôler les versions de code source et faciliter la collaboration ",correct:true},
            {text:"Créer des bases de données relationnelles",correct:false},
            {text:"Analyser des données statistiques",correct:false},
        ]
      }
      ,{
        question:"Quelle est la signification de l'acronyme 'SQL' ?",
        answers:[
            {text:"Structured Query Language " , correct:true},
            {text:"Simple Question Language",correct:false},
            {text:"System Quality Language",correct:false},
            {text:"Server Query Logic",correct:false},
        ]
      }
      ,{
        question:"Quel est le langage de programmation utilisé pour créer des applications Android ?",
        answers:[
            {text:"Java " , correct:true},
            {text:"Python",correct:false},
            {text:"C++",correct:false},
            {text:"JavaScript",correct:false},
        ]
      }
      ,{
        question:"Qu'est-ce qu'un algorithme ?",
        answers:[
            {text:"Un type de serveur web " , correct:false},
            {text:"Une procédure ou une formule pour résoudre un problème",correct:true},
            {text:"Un type de base de données",correct:false},
            {text:"Une fonction JavaScript",correct:false},
        ]
      },{
        question:"Qu'est-ce que PHP ?",
        answers:[
            {text:"Un langage de balisage" , correct:false},
            {text:"Un langage de programmation pour créer des pages web statiques",correct:false},
            {text:"Un langage de programmation pour le développement web côté serveu",correct:true},
            {text:"  Un framework JavaScript",correct:false},
        ]
      }
];

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
        localStorage.setItem('score', score);
    }
    index++;

    if (index < questions.length) {
        Question();
        progressbar();
    } else {
        window.location.href = '/HTML/echecresultats.html';
    }
}

let hi = 0;
let por ;

function progressbar(){
    hi += 100 / questions.length;
    por = hi + '%';
    progress.style.width = por;

    conter.innerHTML = (index + 1) + "/16";
}
 
function alert() {
    const advertisement = document.getElementById('advertisement');
    advertisement.style.display = 'block';
}

window.onload = function() {
    const savedScore = localStorage.getItem('score');
    if (savedScore !== null) {
        score = parseInt(savedScore);
        resulta.innerHTML = score;
    }

    const timeToDisplay = 840000; // 840000 = 14min
    setTimeout(alert, timeToDisplay);
    
    localStorage.removeItem('score');
};

Start(); 
