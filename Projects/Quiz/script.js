// const Quizheader = document.querySelector(".quizheader");
// const Quizoptions = document.querySelectorAll(".quizoptionsbutton");
// const Quizresults = document.querySelector(".quizresults");

// const Quizquestion = document.createElement("h1");
// Quizquestion.classList.add("quizquestion");
// Quizheader.appendChild(Quizquestion);

// const questions = [
//   {
//     question: "2+2",
//     option: ["1", "2", "3", "4"],
//     correct: 1,
//   },
//   {
//     question: "3+1",
//     option: ["1", "2", "4", "5"],
//     correct: 2,
//   },
//   {
//     question: "5-2",
//     option: ["1", "3", "2", "4"],
//     correct: 1,
//   },
//   {
//     question: "10/2",
//     option: ["3", "5", "2", "10"],
//     correct: 1,
//   },
//   {
//     question: "1+1",
//     option: ["1", "2", "3", "4"],
//     correct: 1,
//   },
// ];

// let currentQuestion = 0;
// let score = 0;

// function loadQuestion() {
//   const q = questions[currentQuestion];
//   Quizquestion.textContent = q.question;

//   Quizoptions.forEach((btn, index) => {
//     btn.textContent = q.option[index];
//     btn.onclick = () => checkAnswer(index);
//   });
// }

// function checkAnswer(selectedAns) {
//   if (selectedAns === questions[currentQuestion].correct) {
//     score++;
//   }
//   currentQuestion++;

//   if (currentQuestion < questions.length) {
//     loadQuestion();
//   } else {
//     showresult();
//   }
// }

// function showresult() {
//   document.querySelector(".quizbody").style.display = "none";
//   Quizheader.style.display = "none";
//   Quizresults.style.display = "block";
//   Quizresults.querySelector(
//     "div"
//   ).textContent = `${score}/ ${questions.length}`;
// }
// Quizresults.style.display = "none";
// loadQuestion();

const Quizheader = document.querySelector(".quizheader");
const Quizoptions = document.querySelectorAll(".quizoptionsbutton");
const Quizresults = document.querySelector(".quizresults");

const Quizquestion = document.createElement("h1");
Quizquestion.classList.add("quizquestions");
Quizheader.appendChild(Quizquestion);

const questions = [
  {
    question: "2+2",
    option: ["1", "2", "3", "4"],
    correct: 1,
  },
  {
    question: "3+1",
    option: ["1", "2", "4", "5"],
    correct: 2,
  },
  {
    question: "5-2",
    option: ["1", "3", "2", "4"],
    correct: 1,
  },
  {
    question: "10/2",
    option: ["3", "5", "2", "10"],
    correct: 1,
  },
  {
    question: "1+1",
    option: ["1", "2", "3", "4"],
    correct: 1,
  },
];

let score = 0;
let currentQuestion = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  Quizquestion.textContent = q.question;

  Quizoptions.forEach((btn, index) => {
    btn.textContent = q.option[index];
    btn.onclick = () => checkAnswer(index);
  });
}

function checkAnswer(SelectedAnswer) {
  if (SelectedAnswer === questions[currentQuestion].correct) {
    score++;
  }
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showresults();
  }
}

function showresults() {
  document.querySelector(".quizbody").style.display = "none";
  const ans = document.createElement("div");
  Quizheader.style.display = "none";
  Quizresults.style.display = "block";
  Quizresults.appendChild(ans).textContent = `${score}/${questions.length}`;
}

Quizresults.style.body = "none";
loadQuestion();
