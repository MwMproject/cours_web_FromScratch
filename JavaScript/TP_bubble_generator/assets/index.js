const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span"); // Création d'un élément span
  bubble.classList.add("bubble"); // Ajout de la classe "bubble"
  document.body.appendChild(bubble); // Ajout de l'élément au body

  const size = Math.random() * 200 + 100 + "px"; // Taille aléatoire des bulles entre 100px et 300px

  bubble.style.width = size; // Application de la taille
  bubble.style.height = size; // Application de la taille

  bubble.style.left = Math.random() * 100 + "%"; // Position horizontale aléatoire
  bubble.style.top = Math.random() * 100 + 50 + "%"; // Position verticale aléatoire

  const plusMinus = Math.random() < 0.5 ? -1 : 1; // Choix aléatoire entre -1 et 1 pour la direction de l'animation
  bubble.style.setProperty("--left", Math.random() * 100 + plusMinus + "%"); // Définition de la variable CSS --left pour les animations

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter; // Mise à jour du compteur affiché
    bubble.remove(); // Suppression de la bulle au clic
  });

  setTimeout(() => {
    bubble.remove(); // Suppression de l'élément après l'animation (gérée en CSS)
  }, 8000); // Durée de vie de la bulle avant suppression
};

setInterval(bubbleMaker, 1000); // Appel de la fonction bubbleMaker toutes les 300 millisecondes
