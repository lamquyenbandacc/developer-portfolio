"use strict";

const recommendationForm = document.getElementById("recommendation-form");
const recommendationInput = document.getElementById("new-recommendation");
const recommendationList = document.getElementById("all_recommendations");
const formError = document.getElementById("form-error");
const popup = document.getElementById("popup");
const popupCloseButton = document.getElementById("popup-close");

function buildRecommendationCard(message, isNew) {
  const card = document.createElement("div");
  card.className = "recommendation recommendation-card";
  if (isNew) {
    card.classList.add("newly-added");
  }

  const quote = document.createElement("span");
  quote.className = "quote-mark";
  quote.textContent = "\u201C";

  const content = document.createElement("p");
  content.textContent = message;

  const closingQuote = document.createElement("span");
  closingQuote.className = "closing-quote";
  closingQuote.textContent = "\u201D";

  const metadata = document.createElement("div");
  metadata.className = "rec-meta";
  const dot = document.createElement("span");
  dot.className = "rec-dot";
  metadata.append(dot, document.createTextNode("New recommendation"));

  card.append(quote, content, closingQuote, metadata);
  return card;
}

function showPopup(show) {
  if (show === false) {
    popup.hidden = true;
  } else {
    popup.hidden = false;
  }
}

function addRecommendation(event) {
  event.preventDefault();
  const message = recommendationInput.value.trim();

  if (!message) {
    formError.textContent = "Please enter a valid recommendation.";
    recommendationInput.focus();
    return;
  }

  formError.textContent = "";
  const newCard = buildRecommendationCard(message, true);
  recommendationList.appendChild(newCard);

  recommendationForm.reset();
  showPopup(true);
}

recommendationForm.addEventListener("submit", addRecommendation);
recommendationInput.addEventListener("input", function () {
  formError.textContent = "";
});
popupCloseButton.addEventListener("click", function () {
  showPopup(false);
});
popup.addEventListener("click", function (event) {
  if (event.target === popup) {
    showPopup(false);
  }
});
