const bubble = document.createElement("span"); // Création d'un élément span
bubble.classList.add("bubble"); // Ajout de la classe "bubble"
document.body.appendChild(bubble); // Ajout de l'élément au body

const size = Math.random() * 200 + 100 + "px"; // Taille aléatoire des bulles entre 100px et 300px

bubble.style.width = size; // Application de la taille
bubble.style.height = size; // Application de la taille
