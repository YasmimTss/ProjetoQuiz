const questions = [
  {
    question: "Quem pintou a obra “Mona Lisa”?",
    answers: [
      { id: 1, text: "Michelangelo", correct: false },
      { id: 2, text: "Leonardo da Vinci", correct: true },
      { id: 3, text: "Van Gogh", correct: false },
      { id: 4, text: "Pablo Picasso", correct: false },
    ],
  },
  {
    question: "Qual é o país com a maior população do mundo?",
    answers: [
      { id: 1, text: "EUA", correct: false },
      { id: 2, text: "Austrália", correct: false },
      { id: 3, text: "Índia", correct: true },
      { id: 4, text: "China", correct: false },
    ],
  },
  {
    question: "Quem escreveu 'Dom Quixote'?",
    answers: [
      { id: 1, text: "Machado de Assis", correct: false },
      { id: 2, text: "Miguel de Cervantes", correct: true },
      { id: 3, text: "Jane Austen", correct: false },
      { id: 4, text: "Gabriel García Márquez", correct: false },
    ],
  },
  {
    question: "Qual desses artistas é conhecido como o “Rei do Pop”?",
    answers: [
      { id: 1, text: "Michael Jackson", correct: true },
      { id: 2, text: "Freddie Mercury", correct: false },
      { id: 3, text: "Prince", correct: false },
      { id: 4, text: "Elvis Presley", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quiz-container");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  startScreen.style.display = "none";
  quizContainer.style.display = "block";

  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Próxima";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    button.dataset.id = answer.id;

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  answers = questions[currentQuestionIndex].answers;
  const correctAnswer = answers.filter((answer) => answer.correct == true)[0];
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.id == correctAnswer.id) {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
  nextButton.innerHTML = "Tentar Novamente";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
   
    startScreen.style.display = "none";
    startQuiz();
  }
});

startButton.addEventListener("click", () => {
  startQuiz();
});
