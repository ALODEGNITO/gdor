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


 // Fonction image futuriste pour les app mobiles
const card = document.querySelector('.futuristic');

card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) / 20;
    const moveY = (y - rect.height / 2) / 20;

    card.style.transform = `rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});


