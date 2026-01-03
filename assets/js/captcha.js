/**
 * Captcha Rotativo Module - Slider com círculo para ajustar a imagem
 */

(function () {
  let targetAngle = 0;
  let currentAngle = 0;
  const tolerance = 15; // Graus de tolerância

  function initCaptcha() {
    const screen = document.getElementById("captcha-screen");
    if (!screen) return;

    const slider = screen.querySelector(".captcha-slider");
    const innerIcon = screen.querySelector(".captcha-verified-icon-inner svg");
    const captchaCircle = screen.querySelector(".captcha-circle");
    const refreshBtn = screen.querySelector(".refresh-captcha");
    const continueBtn = screen.querySelector(".continue-btn");
    const successDiv = screen.querySelector(".captcha-success");

    if (!slider || !innerIcon) return;

    // Gerar ângulo aleatório inicial
    generateRandomAngle();

    // Evento do slider
    slider.addEventListener("input", (e) => {
      currentAngle = parseInt(e.target.value);
      innerIcon.style.transform = `rotate(${currentAngle}deg)`;
      checkAlignment();
    });

    // Botão de refresh
    if (refreshBtn) {
      refreshBtn.addEventListener("click", () => {
        resetCaptcha();
      });
    }

    // Botão continuar
    if (continueBtn) {
      continueBtn.addEventListener("click", () => {
        // Navegar para quiz.html
        window.location.href = "quiz.html";
      });
    }

    function generateRandomAngle() {
      // Ângulo alvo sempre 0° (verificado em pé)
      targetAngle = 0;
      
      // Ângulo inicial aleatório diferente de 0°
      let initialAngle = Math.floor(Math.random() * 360);
      while (initialAngle < 30 || initialAngle > 330) {
        initialAngle = Math.floor(Math.random() * 360);
      }
      
      currentAngle = initialAngle;
      slider.value = initialAngle;
      innerIcon.style.transform = `rotate(${initialAngle}deg)`;
    }

    function checkAlignment() {
      // Calcular diferença considerando wrap-around (0° = 360°)
      let diff = Math.abs(currentAngle - targetAngle);
      if (diff > 180) {
        diff = 360 - diff;
      }

      if (diff <= tolerance) {
        // Alinhamento correto!
        captchaCircle.classList.add("correct");
        successDiv.classList.add("show");
        slider.disabled = true;
      }
    }

    function resetCaptcha() {
      captchaCircle.classList.remove("correct");
      successDiv.classList.remove("show");
      slider.disabled = false;
      generateRandomAngle();
    }
  }

  // Inicializar quando a tela do captcha ficar ativa
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCaptcha);
  } else {
    initCaptcha();
  }

  // Re-inicializar quando navegar para a tela
  document.addEventListener("screenChange", (e) => {
    if (e.detail && e.detail.screenId === "captcha-screen") {
      setTimeout(initCaptcha, 100);
    }
  });
})();
