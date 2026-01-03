/**
 * Quiz Module - 6 perguntas estilo TikTok
 */

(function () {
  const quizQuestions = [
    {
      question: "Qual é a sua rede social favorita?",
      answers: ["TikTok", "Instagram", "Twitter", "Facebook"],
    },
    {
      question: "Com que frequência você assiste vídeos no TikTok?",
      answers: ["Todos os dias", "Algumas vezes por semana", "Raramente", "Nunca"],
    },
    {
      question: "Que tipo de conteúdo você mais gosta?",
      answers: ["Comédia", "Dança", "Educativo", "Lifestyle"],
    },
    {
      question: "Você costuma criar conteúdo ou apenas assistir?",
      answers: ["Apenas assisto", "Crio às vezes", "Crio frequentemente", "Sou criador profissional"],
    },
    {
      question: "Qual recurso do TikTok você mais usa?",
      answers: ["For You Page", "Following", "Live", "Mensagens"],
    },
    {
      question: "Você já participou de algum desafio viral?",
      answers: ["Sim, vários", "Sim, alguns", "Não, mas gostaria", "Não tenho interesse"],
    },
  ];

  let currentQuestion = 0;
  let answers = [];

  function initQuiz() {
    const screen = document.getElementById("quiz-screen");
    if (!screen) return;

    currentQuestion = 0;
    answers = [];

    renderQuestion();
    updateProgress();

    // Navigation buttons
    const nextBtn = screen.querySelector(".quiz-btn-next");
    const backBtn = screen.querySelector(".quiz-btn-back");

    if (nextBtn) {
      nextBtn.addEventListener("click", handleNext);
    }

    if (backBtn) {
      backBtn.addEventListener("click", handleBack);
    }
  }

  function renderQuestion() {
    const screen = document.getElementById("quiz-screen");
    if (!screen) return;

    const questionData = quizQuestions[currentQuestion];
    const questionCard = screen.querySelector(".quiz-question-card");
    const questionNumber = screen.querySelector(".question-number");
    const questionText = screen.querySelector(".question-text");
    const answersContainer = screen.querySelector(".quiz-answers");
    const nextBtn = screen.querySelector(".quiz-btn-next");
    const backBtn = screen.querySelector(".quiz-btn-back");

    // Atualizar conteúdo
    if (questionNumber) {
      questionNumber.textContent = `Pergunta ${currentQuestion + 1} de ${quizQuestions.length}`;
    }

    if (questionText) {
      questionText.textContent = questionData.question;
    }

    if (answersContainer) {
      answersContainer.innerHTML = "";
      questionData.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.className = "quiz-answer";
        button.textContent = answer;
        button.dataset.index = index;

        // Marcar resposta já selecionada
        if (answers[currentQuestion] === index) {
          button.classList.add("selected");
        }

        button.addEventListener("click", () => {
          selectAnswer(index);
        });

        answersContainer.appendChild(button);
      });
    }

    // Controlar botões
    if (backBtn) {
      backBtn.disabled = currentQuestion === 0;
      backBtn.style.display = currentQuestion === 0 ? "none" : "block";
    }

    if (nextBtn) {
      nextBtn.disabled = answers[currentQuestion] === undefined;
      if (currentQuestion === quizQuestions.length - 1) {
        nextBtn.textContent = "Finalizar";
      } else {
        nextBtn.textContent = "Próxima";
      }
    }

    // Animação de entrada
    if (questionCard) {
      questionCard.style.animation = "none";
      setTimeout(() => {
        questionCard.style.animation = "slideIn 0.4s ease forwards";
      }, 10);
    }
  }

  function selectAnswer(index) {
    answers[currentQuestion] = index;

    // Atualizar UI
    const answersContainer = document.querySelector(".quiz-answers");
    if (answersContainer) {
      const buttons = answersContainer.querySelectorAll(".quiz-answer");
      buttons.forEach((btn, i) => {
        if (i === index) {
          btn.classList.add("selected");
        } else {
          btn.classList.remove("selected");
        }
      });
    }

    // Habilitar botão next
    const nextBtn = document.querySelector(".quiz-btn-next");
    if (nextBtn) {
      nextBtn.disabled = false;
    }
  }

  function handleNext() {
    if (answers[currentQuestion] === undefined) return;

    if (currentQuestion < quizQuestions.length - 1) {
      currentQuestion++;
      renderQuestion();
      updateProgress();
    } else {
      // Quiz finalizado
      finishQuiz();
    }
  }

  function handleBack() {
    if (currentQuestion > 0) {
      currentQuestion--;
      renderQuestion();
      updateProgress();
    }
  }

  function updateProgress() {
    const progressFill = document.querySelector(".quiz-progress-fill");
    const progressText = document.querySelector(".quiz-progress");

    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

    if (progressFill) {
      progressFill.style.width = progress + "%";
    }

    if (progressText) {
      progressText.textContent = `${currentQuestion + 1}/${quizQuestions.length}`;
    }
  }

  function finishQuiz() {
    // Navegar para obrigado.html
    window.location.href = "obrigado.html";
  }

  function createConfetti() {
    const congratsScreen = document.getElementById("congrats-screen");
    if (!congratsScreen) return;

    const colors = ["#FE2C55", "#FF6B9D", "#FFD700", "#00F2EA", "#fff"];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 3 + "s";
      confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
      congratsScreen.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }
  }

  // Inicializar quando a tela estiver ativa
  document.addEventListener("DOMContentLoaded", () => {
    const quizScreen = document.getElementById("quiz-screen");
    if (quizScreen && quizScreen.classList.contains("is-active")) {
      initQuiz();
    }

    // Botão de pegar prêmio da página de obrigado
    const thankYouBtn = document.querySelector(".thank-you-btn");
    if (thankYouBtn) {
      thankYouBtn.addEventListener("click", () => {
        if (typeof window.showScreen === "function") {
          window.showScreen("one");
        } else {
          location.hash = "#one";
        }
      });
    }

    // Botão de pegar prêmio da página de parabéns (backup)
    const claimBtn = document.querySelector(".congrats-btn");
    if (claimBtn) {
      claimBtn.addEventListener("click", () => {
        if (typeof window.showScreen === "function") {
          window.showScreen("one");
        } else {
          location.hash = "#one";
        }
      });
    }
  });

  // Hook para inicializar quando a tela for exibida via router
  if (window.showScreen && typeof window.showScreen === "function") {
    const originalShowScreen = window.showScreen;
    window.showScreen = function (id, push) {
      originalShowScreen(id, push);
      if (id === "quiz-screen") {
        setTimeout(initQuiz, 100);
      }
    };
  }

  window.__quiz_helpers = {
    initQuiz,
    answers,
  };
})();
