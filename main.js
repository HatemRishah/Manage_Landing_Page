const nav = document.querySelector(".main_nav");
const toggleBtn = document.querySelector(".mobile_nav");
const toggleIcon = toggleBtn.querySelector("img");

toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    toggleIcon.src = "images/icon-close.svg";
  } else {
    toggleIcon.src = "images/icon-hamburger.svg";
  }
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && nav.classList.contains("active")) {
    nav.classList.remove("active");
    toggleIcon.src = "images/icon-hamburger.svg";
  }
});
