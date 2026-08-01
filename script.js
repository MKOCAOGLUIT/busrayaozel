window.onload = function () {

    setTimeout(function () {

        document.getElementById("intro").classList.add("hide");

    }, 4000);

};

// Tanışma tarihi
const startDate = new Date("2026-04-14T00:00:00");
const timer = document.getElementById("timer");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timer.innerHTML = `
        ${days} Gün<br>
        ${hours} Saat ${minutes} Dakika ${seconds} Saniye
    `;
}

setInterval(updateTimer, 1000);
updateTimer();


// Başla butonu
document.getElementById("startBtn").onclick = function () {

    document.querySelector(".hero").style.display = "none";

    document.querySelector(".counter").style.display = "flex";

};



// Kalpler
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.animation = "heartUp 5s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 800);


// Kalp animasyonu
const style = document.createElement("style");

style.innerHTML = `
@keyframes heartUp{
    0%{
        transform:translateY(0);
        opacity:1;
    }
    100%{
        transform:translateY(-120vh);
        opacity:0;
    }
}
`;

document.head.appendChild(style);
document.head.appendChild(style);

function showSurprise() {
  document.getElementById("surprise").style.display = "block";
}
function showSurprise() {
    document.getElementById("surprise").style.display = "block";
}
function showSurprise() {
    document.getElementById("surprise").style.display = "block";
    function showSurprise() {
    const surprise = document.getElementById("surprise");
    surprise.style.display = "block";
    
}
}
