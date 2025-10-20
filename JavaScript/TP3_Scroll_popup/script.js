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

  // popup effect
  if (scrollValue > 0.85) {
    popup.style.opacity = "1";
    popup.style.transform = "none"; //  ou  translateY(0)
  }
});

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
