let toogle_boxNav = document.getElementById("toogle_boxNav");
let more = document.getElementById("more");
more.onclick = function () {
  toogle_boxNav.classList.toggle("ouvert");

  if (toogle_boxNav.classList.contains("ouvert")) {
    more.src = "img/close.png";
  } else {
    more.src = "img/more.png";
  }
};

//Replace
const retourAccueil = document.getElementById("logo");
retourAccueil.addEventListener("click", function () {
  // Redirection vers l'URL de la page d'accueil
  window.location.href = "./index.html";
});

// animation des btn
function animBtn() {}

// animation d'arriere plan
function FonduZoom() {}

// animation card actualite
function perspectiveCard() {}

// remplacement images par videos
function videos() {}
