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
//---------------------------------------------------------------

//les scroll event
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } // fait apparaître la nav si on scroll de plus de 120px
  else {
    nav.style.top = "-50px";
  } // fait disparaître la nav si on scroll de moins de 120px
});
//---------------------------------------------------------------

//les form events
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = ""; // variable pour stocker le pseudo
let language = ""; // variable pour stocker le language

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value; // stocke la valeur de l'input dans la variable pseudo
});

select.addEventListener("input", (e) => {
  language = e.target.value; // stocke la valeur du select dans la variable language
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // empêche le rechargement de la page
  if (cgv.checked) {
    // vérifie si les CGV sont cochées
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Language préféré : ${language}</h4>
    `; // affiche le pseudo et le language préféré dans la div du formulaire
  } else {
    alert("Veuillez accepter les CGV"); // affiche une alerte si les CGV ne sont pas cochées
  }
});
//---------------------------------------------------------------

//les load events
window.addEventListener("load", () => {
  console.log("document chargé");
}); // affiche un message dans la console lorsque la page est complètement chargée
//---------------------------------------------------------------

//les forEach
const boxes = document.querySelectorAll(".box"); // sélectionne toutes les divs avec la classe box

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.9)"; // rétrécit la div cliquée
  });
});

//------------------------------------------------

// addEventListener Vs onclick

// document.body.onclick = function() {
//   console.log("Scroll !");
// };

// Bubbling => fin (de base l'eventlistener est paramétré en mode Bublbing)
document.body.addEventListener("click", () => {
  console.log("click 1 !");
});

// Usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !");
  },
  true
);

// https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/

//-------------------------------------------------

// Stop propagation

// questionContainer.addEventListener("click", (e) => {
//   alert("Test !");
//   e.stopPropagation();
// });

// removeEventListener

//-------------------------------------------------

//Le BOM (Browser Object Model)

//console.log(window.innerHeight);
//console.log(window.scrollY);

//window.open("http://google.com", "Cours JS", "height=600, width=800");
//window.close();

// Evenements adossés à window
//alert("hello");

//Confirm
btn2.addEventListener("click", () => {
  confirm("voulez-vous vraiment donner la mauvaise réponse...?");
});

// Prompt¨
btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom");
  questionContainer.innerHTML += // = remplace le questionContainer += l'ajoute
    "<h3>Bravo " + answer + " vous avez trouvé la bonne réponse ! </h3>";
});

// Time out (compte à rebours)
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);

//let interval = setInterval(() => {
//document.body.innerHTML +=
//'<div class="box"> <h2>Nouvelle boite avec setInterval! </h2></div>';
//}, 1000);

document.body.addEventListener("click", () => {
  //e.target.remove();
  clearInterval(interval);
});

// Location pour rediriger vers des les liens
//console.log(location.href);
//console.log(location.host);
//console.log(location.pathname);
//console.log(location.search);
//location.replace("http://lequipe.fr");

//window.onload = () => {
//  location.href = "http://twitter.fr";
//};

// Navigator
console.log(navigator.userAgent);

// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

// Pour la géolocalisation trouvé sur le site si dessus
// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   var crd = pos.coords;

//   console.log("Votre position actuelle est :");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude : ${crd.longitude}`);
//   console.log(`La précision est de ${crd.accuracy} mètres.`);
// }

// function error(err) {
//   console.warn(`ERREUR (${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

// History
//console.log(history); //affiche l'historique dans la console
// window.history.back(); // retourne en arrière dans l'historique
// history.go(-2)
//------------------------------------------------

// SetProperty
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
