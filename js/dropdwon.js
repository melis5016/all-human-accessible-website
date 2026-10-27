const menuButton = document.querySelector("header > button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", openMenu);

function openMenu(){
    nav.classList.add("menuOpen");
}