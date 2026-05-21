// bouton démo

const btn = document.getElementById("demoBtn");

btn.addEventListener("click", function(){

alert("Merci pour votre intérêt pour Gd'Or ERP");

});


// MENU RESPONSIVE

const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

toggle.addEventListener("click", function(){

nav.classList.toggle("active");

});


// SLIDER

let slides = document.querySelectorAll(".slider .slide");
let index = 0;

function showSlide(){

    slides.forEach(slide=>{
    slide.classList.remove("active");
    });

    index++;

    if(index >= slides.length){
    index = 0;
    }

    slides[index].classList.add("active");

}

setInterval(showSlide,3000);

// ================== LEAFLET MAP ==================

var map = L.map('map').setView([9.3, 2.3], 5);

// Fond de carte OpenStreetMap

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

maxZoom: 18,
attribution: '© OpenStreetMap'

}).addTo(map);


// Création de l'icône personnalisée

var logoIcon = L.icon({
    iconUrl: 'images/feuille-gdor.gif',

    iconSize: [25, 25],   // taille du logo
    iconAnchor: [20, 40], // point d'ancrage
    popupAnchor: [0, -40]
});

L.marker([6.37, 2.43], {icon: logoIcon}).addTo(map)
.bindPopup("Bénin");

L.marker([6.13, 1.22], {icon: logoIcon}).addTo(map)
.bindPopup("Togo");

L.marker([13.52, 2.10], {icon: logoIcon}).addTo(map)
.bindPopup("Niger");

L.marker([12.37, -1.52], {icon: logoIcon}).addTo(map)
.bindPopup("Burkina Faso");

L.marker([12.11, 15.05], {icon: logoIcon}).addTo(map)
.bindPopup("Tchad");

// Main slider
let mainSlides = document.querySelectorAll(".main-slider .slide");
let mainIndex = 0;

function showMainSlide() {
    mainSlides.forEach(slide => slide.classList.remove("active"));
    mainSlides[mainIndex].classList.add("active");
    mainIndex++;
    if(mainIndex >= mainSlides.length) mainIndex = 0;
}

setInterval(showMainSlide, 15000); // change every 15s

const slideContents = document.querySelectorAll('.main-slider .slide-content');

slideContents.forEach(content => {
    const bubble = content.querySelector('.slide-bubble');
    bubble && bubble.addEventListener('click', function() {
        slideContents.forEach(item => {
            if (item !== content) item.classList.remove('open');
        });
        content.classList.toggle('open');
    });
});


// Menu modules

const modulesBtn = document.getElementById("modulesBtn");
const megaMenu = document.getElementById("megaMenu");
const megaParent = document.querySelector(".mega-parent");

if (modulesBtn && megaMenu && megaParent) {

    modulesBtn.addEventListener("click", function(e){
        e.preventDefault();
        megaParent.classList.toggle("active");
    });

    // fermer si on clique en dehors
    document.addEventListener("click", function(e){
        if (!e.target.closest(".mega-parent")) {
            megaParent.classList.remove("active");
        }
    });
}


// Sous-menu technologies

const techBtn = document.getElementById("techBtn");
const techMenu = document.getElementById("techMenu");

if (techBtn && techMenu) {
    techBtn.addEventListener("click", function(){
        techMenu.style.display =
        techMenu.style.display === "flex" ? "none" : "flex";
    });
}

window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    window.setTimeout(() => {
        preloader.classList.add('hidden');
        window.setTimeout(() => {
            if (preloader.parentNode) {
                preloader.parentNode.removeChild(preloader);
            }
        }, 600);
    }, 1000);
});

// ================= PROTECTION DU SITE =================

// Désactiver le clic droit (menu contextuel)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Bloquer le copier
document.addEventListener('copy', function(e) {
    e.preventDefault();
});

// Bloquer le coller
document.addEventListener('paste', function(e) {
    e.preventDefault();
});

// Bloquer le couper
document.addEventListener('cut', function(e) {
    e.preventDefault();
});

// Bloquer les raccourcis clavier pour les outils de développement
document.addEventListener('keydown', function(e) {
    // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
    }
});
