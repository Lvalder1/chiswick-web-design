
function hamburgerNav() {
    let siteNav = document.getElementById("siteNav");
    if (siteNav.className === "nav") {
        siteNav.className += " responsive";
    } else {
      siteNav.className = "nav";
    }
  }
