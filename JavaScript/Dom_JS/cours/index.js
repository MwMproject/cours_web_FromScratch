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
