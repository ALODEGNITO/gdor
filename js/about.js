// ================= ACCORDION (VERSION FIABLE) =================

document.addEventListener("DOMContentLoaded", () => {

    const accordions = document.querySelectorAll(".accordion-header");

    accordions.forEach(header => {
        header.addEventListener("click", () => {

            const item = header.parentElement;

            // Fermer les autres
            document.querySelectorAll(".accordion-item").forEach(el => {
                if (el !== item) {
                    el.classList.remove("active");
                    const span = el.querySelector("span");
                    if (span) span.textContent = "+";
                }
            });

            // Toggle actuel
            item.classList.toggle("active");

            // Changer + / -
            const icon = header.querySelector("span");
            if (icon) {
                icon.textContent = item.classList.contains("active") ? "−" : "+";
            }
        });
    });

});


// ================= COMPTEURS =================

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const updateCounter = () => {

            const target = +counter.getAttribute("data-target");
            const suffix = counter.getAttribute("data-suffix") || "";
            const current = +counter.innerText.replace(/\D/g, '');
            const increment = target / 120;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment) + suffix;
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target + suffix;
            }

        };

        updateCounter();

    });

});


// ================= MODE SOMBRE (SÉCURISÉ) =================

document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.getElementById("themeToggle");

    if (!themeToggle) return;

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }

    });

});