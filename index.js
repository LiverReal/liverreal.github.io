
const nyhet = "Gratulerer Nemanja for å få 1. plass i quotes, valgt av meg fordi han er den eneste som sendte inn i den siste dagen";

document.getElementById("nyheter").textContent=nyhet;

let greetings = ["Halla folkens", "Lev livet", "Borre's Nettside", "Nettsiden for ALLE"]
let randList = Math.floor(Math.random() * greetings.length)

document.getElementById("welcome-msg").textContent=greetings[randList];

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})