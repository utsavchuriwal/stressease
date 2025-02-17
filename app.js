const hamMenu = document.getElementById("menuToggle");
const offScreenMenu = document.getElementById("menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const slideNumber = document.querySelector(".slide-number");

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach(slide => slide.classList.remove("active"));
    slides[currentSlide].classList.add("active");

    slideNumber.textContent = currentSlide + 1;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Initial display
showSlide(currentSlide);
