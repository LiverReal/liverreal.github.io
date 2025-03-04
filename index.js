setTimeout(() => document.body.classList.add("loaded"), 50)

window.transitionToPage = function(href) {
    document.body.style.opacity = 0;
    sessionStorage.setItem("fade", "true");
    setTimeout(() => { 
        window.location.href = href;
    }, 400);
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

const nyhet = "Ny timeplan neste uke";

document.getElementById("nyheter").textContent=nyhet;

let greetings = ["Halla folkens", "Lev livet", "Borre's Nettside", "Nettsiden for ALLE", "Gratulerer du er super kul!"]
let randList = Math.floor(Math.random() * greetings.length)

document.getElementById("welcome-msg").textContent=greetings[randList];



document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
document.addEventListener('gesturechange', function (e) {
    e.preventDefault();
});
document.addEventListener('gestureend', function (e) {
    e.preventDefault();
});
