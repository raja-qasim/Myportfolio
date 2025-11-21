// Mobile Menu Toggle
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li a");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const textElement = document.querySelector(".typing-text");
const textArray = [
  "Frontend Developer",
  "Beginner Python Developer",
  "Future AI/ML Engineer",
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = textArray[textIndex];

  if (isDeleting) {
    charIndex--;
    textElement.textContent = currentText.substring(0, charIndex);
  } else {
    charIndex++;
    textElement.textContent = currentText.substring(0, charIndex);
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typeSpeed = 2000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex++;
    if (textIndex === textArray.length) {
      textIndex = 0;
    }
    typeSpeed = 500;
  }

  setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);
