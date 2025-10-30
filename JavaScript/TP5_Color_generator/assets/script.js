// Fonction pour générer une couleur RGB aléatoire et mettre à jour le fond de la page
function rgbGenerator() {
  const r = Math.floor(Math.random() * 256); // 0-255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  let rgb = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = rgb;

  // Afficher le code RGB au centre de la page + ajout de style css pour le texte
  const rgbText = document.createElement("div");
  rgbText.style.position = "absolute";
  rgbText.style.top = "50%";
  rgbText.style.left = "50%";
  rgbText.style.transform = "translate(-50%, -50%)";
  rgbText.style.fontSize = "2em";
  rgbText.style.fontFamily = "Arial, sans-serif";
  rgbText.style.color = "#ffffff";
  rgbText.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  rgbText.style.borderRadius = "10px";
  rgbText.style.padding = "20px 20px";
  rgbText.innerText = rgb;

  document.body.innerHTML = ""; // nettoyer le contenu précédent
  document.body.appendChild(rgbText); // ajouter le nouveau texte
}
rgbGenerator(); // Appel initial pour afficher une couleur dès le chargement de la page
setInterval(rgbGenerator, 1000); // Mettre à jour la couleur toutes les 3 secondes

// Vérsion From Scratch :
// setInterval(() => {
//const r = Math.floor(Math.random() * 255); // 0-255
// const g = Math.floor(Math.random() * 255);
// const b = Math.floor(Math.random() * 255);

// const color = `rgb(${r}, ${g}, ${b})`;

// document.body.style.backgroundColor = color;
// document.body.innerText = `<h2>${color}</h2>`;
// }, 3000);
