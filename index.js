setTimeout(() => document.body.classList.add("loaded"), 250)


const nyhet = "Ny timeplan neste uke";

document.getElementById("nyheter").textContent=nyhet;

let greetings = ["Halla folkens", "Lev livet", "Borre's Nettside", "Nettsiden for ALLE"]
let randList = Math.floor(Math.random() * greetings.length)

document.getElementById("welcome-msg").textContent=greetings[randList];

    // Function to transition out and navigate
    window.transitionToPage = function(href) {
        document.body.style.opacity = 0;
        sessionStorage.setItem("fade", "true"); // Store fade state
        setTimeout(() => { 
            window.location.href = href;
        }, 500);
    };

    // Ensure fade-in happens correctly every time
    document.addEventListener("DOMContentLoaded", function() {
        
        if (sessionStorage.getItem("fade") === "true") {
            document.body.style.opacity = 0; // Start from 0
            setTimeout(() => {
                document.body.style.opacity = 1; // Then fade in
                sessionStorage.removeItem("fade"); // Remove flag
            }, 50);
        } else {
            document.body.classList.add("loaded");
        }
        ;
    });
