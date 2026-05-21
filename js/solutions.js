
// charger préférence utilisateur
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

    localStorage.setItem("theme","dark");
    themeToggle.textContent = "☀️";

}else{

    localStorage.setItem("theme","light");
    themeToggle.textContent = "🌙";

}

});


// ACCORDION

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {

const header = item.querySelector(".accordion-header");

header.addEventListener("click", () => {

item.classList.toggle("active");

});

});


document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const modulesBtn = document.getElementById("modulesBtn");
    const megaMenu = document.getElementById("megaMenu");
    const techBtn = document.getElementById("techBtn");
    const techMenu = document.getElementById("techMenu");

    // MENU MOBILE
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // MEGA MENU
    modulesBtn.addEventListener("click", function (e) {
        e.preventDefault();
        megaMenu.classList.toggle("active");
    });

    // SOUS MENU TECH
    techBtn.addEventListener("click", function () {
        techMenu.classList.toggle("active");
    });

    // FERMER MENU SI CLICK EXTERIEUR
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".mega-parent")) {
            megaMenu.classList.remove("active");
        }
    });

    // FERMER MENU MOBILE SAUF MODULES
    document.querySelectorAll("#navMenu a").forEach(link => {
        link.addEventListener("click", function (e) {

            if (this.id === "modulesBtn") {
                e.stopPropagation();
                return;
            }

            navMenu.classList.remove("active");
        });
    });

});
