// const primaryNav = document.querySelector(".primary-navigation");
// const navToggle = document.querySelector(".mobile-nav-toggle");

// navToggle.addEventListener("click", () => {
//     const visibility = primaryNav.getAttribute("data-visible")

//     if (visibility === "false") {
//         primaryNav.setAttribute("data-visible", true);
//         navToggle.setAttribute("arai-expanded", true);
//     } else if (visibility === "true") {
//         primaryNav.setAttribute("data-visible", false);
//         navToggle.setAttribute("arai-expanded", false);
//     }
// });

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.primary-navigation');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})