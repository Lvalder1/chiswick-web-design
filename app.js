
function hamburgerNav() {
    let x = document.getElementById("siteNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }
