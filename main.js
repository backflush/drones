const menuBtn = document.querySelector(".menu-btn");
const exitBtn = document.querySelector(".exit-btn");
const menu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    menu.style.transform = "translateX(0)";
});

exitBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(100%)';
});