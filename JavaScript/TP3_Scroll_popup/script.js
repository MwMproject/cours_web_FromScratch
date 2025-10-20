window.addEventListener("scroll", function () {
  // navbar effect
  if (window.scrollY > 50) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "80px";
  }

  // image improvise effect
  let scrollValue =
    (window.scrollY + window.innerHeight) / this.document.body.offsetHeight;
  if (scrollValue > 0.6) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "none"; //  ou  translateY(0)
  }
});

// Créer un événement au scroll

// Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
