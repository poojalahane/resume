let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//////////////------------

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "200px";
}

window.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 768) {
    const header = document.getElementById("header");
    header.style.height = "auto";
    header.style.padding = "20px 10px";

    const headerText = document.querySelector(".header-text");
    headerText.style.marginTop = "20px";
    headerText.style.fontSize = "18px";

    const heading = headerText.querySelector("h1");
    heading.style.fontSize = "26px";
    heading.style.marginTop = "10px";
    heading.style.lineHeight = "1.3";
  }
});
