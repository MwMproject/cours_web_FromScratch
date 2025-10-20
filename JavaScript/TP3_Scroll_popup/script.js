let playOnce = true; // pour le popup s'affiche une seule fois

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
  if (scrollValue > 0.85 && playOnce) {
    popup.style.opacity = "1";
    popup.style.transform = "none"; //  ou  translateY(0)
    playOnce = false; // pour que le popup s'affiche une seule fois
  }
});

// close popup
closeBtn.addEventListener("click", () => {
  popup.style.opacity = "0";
  popup.style.transform = "translateY(500px)";
});
