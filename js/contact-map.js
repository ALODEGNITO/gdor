// Carte Leaflet Contact

var map = L.map('contact-map').setView([9.3, 2.3], 5);

// Fond de carte

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

maxZoom: 18,
attribution: '© OpenStreetMap'

}).addTo(map);


// Icône personnalisée

var logoIcon = L.icon({
iconUrl: 'images/feuille-gdor.gif',
iconSize: [25, 25],
iconAnchor: [20, 40],
popupAnchor: [0, -40]
});


// Pays d’intervention

L.marker([6.37, 2.43], {icon: logoIcon}).addTo(map)
.bindPopup("Bénin - Bureau principal");

L.marker([6.13, 1.22], {icon: logoIcon}).addTo(map)
.bindPopup("Togo");

L.marker([13.52, 2.10], {icon: logoIcon}).addTo(map)
.bindPopup("Niger");

L.marker([12.37, -1.52], {icon: logoIcon}).addTo(map)
.bindPopup("Burkina Faso");

L.marker([12.11, 15.05], {icon: logoIcon}).addTo(map)
.bindPopup("Tchad");

L.marker([48.85, 2.35], {icon: logoIcon}).addTo(map)
.bindPopup("France - Paris");


// ================= MODE SOMBRE =================

const themeToggle = document.getElementById("themeToggle");

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


// Menu modules

const modulesBtn = document.getElementById("modulesBtn");
const megaMenu = document.getElementById("megaMenu");

modulesBtn.addEventListener("click", function(e){

e.preventDefault();

megaMenu.style.display =
megaMenu.style.display === "block" ? "none" : "block";

});


document.addEventListener("click", function(e){

if(!e.target.closest(".mega-parent")){

megaMenu.style.display="none";

}

});


const techBtn = document.getElementById("techBtn");
const techMenu = document.getElementById("techMenu");

techBtn.addEventListener("click", function(){

techMenu.style.display =
techMenu.style.display === "flex" ? "none" : "flex";

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