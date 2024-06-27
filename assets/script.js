
  var isFullScreen = false;

 function toggleFullScreen() {
    var navbar = document.querySelector(".navbar");
    var logo = document.getElementById("logo");

    if (!isFullScreen) {
      overlay.style.display = "flex";

      navbar.classList.add("full-screen-active");
      navbar.classList.remove("bg-white");
      navbar.classList.remove("navbar-expand-md");

      document.querySelector("#navbar-toggler #burgerbtn").src =
        "assets/svgs/close.svg";
      logo.src = "assets/svgs/logo-white.svg";

      logo.addEventListener("click", toggleFullScreen);

      document.body.classList.add("no-scroll");
      isFullScreen = true;
    } else {
      overlay.style.display = "none";

      navbar.classList.remove("full-screen-active");
      navbar.classList.add("bg-white");
      navbar.classList.add("navbar-expand-md");

      document.querySelector("#navbar-toggler #burgerbtn").src =
        "assets/svgs/burger.svg";
      logo.src = "assets/svgs/logo.svg";

      logo.removeEventListener("click", toggleFullScreen);

      document.body.classList.remove("no-scroll");
      isFullScreen = false;
    }
  }

function loadContent(url, elementId) {
  document.addEventListener("DOMContentLoaded", function () {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(elementId).innerHTML = data;
      });
  });
}

loadContent("components/navbar.html", "navbar-container");
loadContent("components/contacts.html", "contatti");
