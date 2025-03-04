setTimeout(() => document.body.classList.add("loaded"), 100)

window.transitionToPage = function(href) {
    document.body.style.opacity = 0;
    sessionStorage.setItem("fade", "true");
    setTimeout(() => { 
        window.location.href = href;
    }, 500);
};

const nyhet = "Ny timeplan neste uke";

document.getElementById("nyheter").textContent=nyhet;

let greetings = ["Halla folkens", "Lev livet", "Borre's Nettside", "Nettsiden for ALLE"]
let randList = Math.floor(Math.random() * greetings.length)

document.getElementById("welcome-msg").textContent=greetings[randList];

window.transitionToPage = function(href) {
    document.body.style.opacity = 0;
    sessionStorage.setItem("fade", "true");
    setTimeout(() => { 
        window.location.href = href;
    }, 500);
};

    document.addEventListener("DOMContentLoaded", function() {
        if (sessionStorage.getItem("fade") === "true") {
            document.body.style.opacity = 0;
            setTimeout(() => {
                document.body.style.opacity = 1;
                sessionStorage.removeItem("fade");
            }, 50);
        }
    });



    