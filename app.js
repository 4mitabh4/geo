const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".mob-nav-links");
const links = document.querySelectorAll(".mob-nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});