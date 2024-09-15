const navMeun = document.querySelector(".menu_bar");
const navLinks = document.querySelector(".nav_link");

navMeun.addEventListener('click', () => {

   navLinks.classList.toggle("active");
   
});


