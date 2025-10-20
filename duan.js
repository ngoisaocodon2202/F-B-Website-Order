// Toggle Side Menu
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
menuBtn.addEventListener("click", () => {
  sideMenu.style.left = sideMenu.style.left === "0px" ? "-250px" : "0px";
});

// Toggle Login Form
const userBtn = document.getElementById("userBtn");
const formContainer = document.getElementById("formContainer");
const closeForm = document.getElementById("closeForm");
userBtn.addEventListener("click", () => formContainer.style.display = "flex");
closeForm.addEventListener("click", () => formContainer.style.display = "none");

// Banner Slide
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
function showSlide() {
  slides.forEach(s => s.classList.remove("active"));
  slides[slideIndex].classList.add("active");
}
function changeSlide(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlide();
}
setInterval(() => changeSlide(1), 5000);
showSlide();

// Language Switch
document.getElementById("lang-vi").addEventListener("click", () => alert("Chuyển sang Tiếng Việt"));
document.getElementById("lang-en").addEventListener("click", () => alert("Switch to English"));
