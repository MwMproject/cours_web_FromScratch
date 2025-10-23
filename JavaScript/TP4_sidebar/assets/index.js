const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".content");
// Ouvrir et fermer la sidebar au click sur le bouton
btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
// fermer la sidebar si on click sur le contenu principal
content.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// Priorités en CSS : !important > id > classe > baliseHtml
