// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger menu di klik
document.querySelector("#menu").onlick = () => {
  navbarNav.classList.toogle("active");
};

//Klik diluar sidebar untuk menghilangkan nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
