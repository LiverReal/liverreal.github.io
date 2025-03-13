
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


const nyhet = "Kjeder du deg i timen? Gjett hva! Jeg også..";
let greetings = ["Halla folkens", "Halla flokens", "Salam malekum", "Malekum salam", "Lev livet", "Borre's Nettside", "Sponset av 10A", "Sponset av Betonmast", "Nettsiden for ALLE", "Gratulerer du er super kul!", "Til dovre faller!", "BlimE inn på wordchat og vær deg selv", "Halla Even"]

if (id_exists("nyheter")) {
    document.getElementById("nyheter").textContent=nyhet;
}

if (id_exists("welcome-msg")) {
    let lastGreeting = localStorage.getItem("lastGreeting");
    console.log(lastGreeting);

    let randList = Math.floor(Math.random() * greetings.length);
    while (greetings[randList] == lastGreeting) {
        randList = Math.floor(Math.random() * greetings.length);
    }

    document.getElementById("welcome-msg").textContent=greetings[randList];
    localStorage.setItem("lastGreeting", greetings[randList]);
}

let visitCount = localStorage.getItem("visitCount") ?? 0;

if (!sessionStorage.getItem("visited")) {
    console.log("First time visiting this page! This session anyways rite?");
    sessionStorage.setItem("visited", "true");

    console.log(visitCount);
    visitCount++;
    console.log(visitCount);
    localStorage.setItem("visitCount", visitCount);
}

if (id_exists("visit-count")) {
    document.getElementById("visit-count").textContent=visitCount;
}