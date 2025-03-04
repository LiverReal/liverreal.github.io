
window.transitionToPage = function(href) {
    document.body.style.opacity = 0;
    sessionStorage.setItem("fade", "true");
    setTimeout(() => { 
        window.location.href = href;
    }, 400);
};  

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("loaded");
    if (sessionStorage.getItem("fade") === "true") {
        document.body.style.opacity = 0;
        setTimeout(() => {
            document.body.style.opacity = 1;
            sessionStorage.removeItem("fade");
        }, 50);
    }
});

document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
document.addEventListener('gesturechange', function (e) {
    e.preventDefault();
});
document.addEventListener('gestureend', function (e) {
    e.preventDefault();
});

function id_exists(id) {
    let el = document.getElementById(id);

    if (el != null) {
        return true;
    } else {
        return false;
    }
}


const nyhet = "Ny timeplan neste uke";
let greetings = ["Halla folkens", "Halla flokens", "Salam malekum", "Malekum salam", "Lev livet", "Borre's Nettside", "Sponset av 10A", "Sponset av Betonmast", "Nettsiden for ALLE", "Gratulerer du er super kul!"]

if (id_exists("nyheter")) {
    document.getElementById("nyheter").textContent=nyhet;
}

if (id_exists("welcome-msg")) {
    let randList = Math.floor(Math.random() * greetings.length)
    document.getElementById("welcome-msg").textContent=greetings[randList];
}