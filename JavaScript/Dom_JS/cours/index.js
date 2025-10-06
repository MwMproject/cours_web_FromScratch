// les selecteurs
//document.querySelector("h4").style.background = "red"; // selectionne le premier h4 et change son background en rouge
//const balisehtml = document.querySelector("h4");

//les click events
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1"); // première méthode
const btn2 = document.getElementById("btn-2"); // deuxième méthode
const answer = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  //questionContainer.classList.add("question-click"); // ajute une classe CSS au click et ne change  plus
  questionContainer.classList.toggle("question-click"); // ajute une classe CSS au click et au click suivant l'enleve
});

btn1.addEventListener("click", () => {
  //answer.style.visibility = "visible"; // sans injecion de CSS
  answer.classList.add("show-answer"); // avec injection de CSS
  answer.style.background = "green";
});
btn2.addEventListener("click", () => {
  //answer.style.visibility = "visible"; // sans injecion de CSS
  answer.classList.add("show-answer"); // avec injection de CSS
  answer.style.background = "red";
});

//---------------------------------------------------------------

//les mouse events
const mousemove = document.querySelector(".mousemouve"); //déclare une variable qui selectionne la div mousemouve

window.addEventListener("mousemove", (e) => {
  // ajoute un evenement au mouvement de la souris dans la fenetre
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)"; // agrandit la div et la centre par rapport au curseur
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)"; // remet la div à sa taille initiale et la centre par rapport au curseur
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
}); // change le background de la div questionContainer au passage de la souris
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "rgba(43, 42, 42, 0.62)";
}); // remet le background de la div questionContainer au passage de la souris

answer.addEventListener("mouseover", () => {
  answer.style.transform = "rotate(2deg)";
}); // fait pivoter la réponse au passage de la souris
//---------------------------------------------------------------

//les keypress event
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
const ring = () => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key; // affiche la touche appuyée dans la div key
  if (e.key === "j") {
    keypressContainer.style.background = "pink"; // change le background de la div keypressContainer en rose si la touche j est appuyée
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal"; // change le background de la div keypressContainer en teal si la touche h est appuyée
  } else {
    keypressContainer.style.background = "red"; // change le background de la div keypressContainer en rouge si une autre touche est appuyée
  }
  ring();
});
