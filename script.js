const navMeun = document.querySelector(".menu_bar");
const navLinks = document.querySelector("nav_link");

navMeun.addEventListener('click', () => {

   navLinks.classList.toggle("active");
   console.log("click");
});

// document.addEventListener('DOMContentLoaded', () => {
//     const navMenu = document.querySelector(".menu_bar");
//     const navLinks = document.querySelector(".nav_link");

//     if (navMenu && navLinks) {
//         navMenu.addEventListener('click', () => {
//             navLinks.classList.toggle("active");
//             console.log("click");
//         });
//     } else {
//         console.error("Menu bar or nav links not found");
//     }
// });

