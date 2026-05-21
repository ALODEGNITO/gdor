function detectScreen(){

    const width = window.innerWidth;

    if(width >= 1200){

    document.body.classList.add("desktop");

    }

    else if(width >= 768){

    document.body.classList.add("tablet");

    }

    else{

    document.body.classList.add("mobile");

    }

}

detectScreen();

window.addEventListener("resize", function(){

document.body.classList.remove("desktop","tablet","mobile");

detectScreen();

});


document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

});

