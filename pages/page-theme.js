document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const isQuiz = body.classList.contains("quiz-page");
  const isSurvey = body.classList.contains("survey-page");

  if (!isQuiz && !isSurvey) {
    return;
  }

  const dynamicFontLink = document.createElement("link");
  dynamicFontLink.rel = "stylesheet";
  dynamicFontLink.href = "https://fonts.googleapis.com/css2?family=Bungee:wght@400&family=Fredoka:wght@400;600;700&display=swap";
  document.head.appendChild(dynamicFontLink);

  const questionColor = "#0f0f0fc9";
  const fieldTextColor = "rgba(110, 99, 99, 0.75)";
  const selectPlaceholderColor = "rgba(110, 99, 99, 0.75)";
  const textareaPlaceholderColor = "rgba(110, 99, 99, 0.75)";

  document.documentElement.style.setProperty("--select-placeholder-color", selectPlaceholderColor);
  document.documentElement.style.setProperty("--textarea-placeholder-color", textareaPlaceholderColor);

  const title = document.querySelector(".demo-title");
  const boxes = document.querySelectorAll(".demo-option, .demo-form label, .demo-feedback, .demo-question, .demo-progress");
  const inputs = document.querySelectorAll(".demo-form select, .demo-form textarea, .demo-form input");

  if (isQuiz) {
    if (title) {
      title.textContent = "Juego Quiz Tecnoteca";
      title.style.fontFamily = '"bouncy_2", "Baloo 2", sans-serif';
      title.style.color = "#183764";
      title.style.background = "none";
      title.style.webkitTextFillColor = "#183764";
      title.style.textTransform = "uppercase";
      title.style.textAlign = "center";
      title.style.width = "100%";
    }

    boxes.forEach((el) => {
      el.style.fontFamily = '"Fredoka", "Nunito", sans-serif';
      el.style.color = "#666f80";
    });

    document.querySelectorAll(".demo-question, .demo-progress").forEach((el) => {
      el.style.color = questionColor;
    });

    inputs.forEach((el) => {
      el.style.fontFamily = '"Fredoka", "Nunito", sans-serif';
      el.style.color = fieldTextColor;
      el.style.borderColor = "rgba(24, 55, 100, 0.35)";
    });
  }

  if (isSurvey) {
    if (title) {
      title.textContent = "Ayudanos a mejorar";
      title.style.fontFamily = '"bouncy_2", "Baloo 2", sans-serif';
      title.style.fontWeight = "700";
      title.style.color = "#44a348";
      title.style.background = "none";
      title.style.webkitTextFillColor = "#44a348";
      title.style.textTransform = "uppercase";
      title.style.textAlign = "center";
      title.style.width = "100%";
    }

    boxes.forEach((el) => {
      el.style.fontFamily = '"Fredoka", "Nunito", sans-serif';
      el.style.color = fieldTextColor;
    });

    document.querySelectorAll(".demo-form label").forEach((el) => {
      el.style.color = questionColor;
    });

    inputs.forEach((el) => {
      el.style.fontFamily = '"Fredoka", "Nunito", sans-serif';
      el.style.color = fieldTextColor;
      el.style.borderColor = "rgba(125, 44, 100, 0.35)";
    });
  }
});
