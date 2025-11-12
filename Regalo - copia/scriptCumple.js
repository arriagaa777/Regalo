// 💝 scriptCumple.js — Sorpresa de cumpleaños 💞

document.addEventListener("DOMContentLoaded", () => {
  function crearPastel() {
    const corazon = document.createElement("div");
    corazon.classList.add("pastel");
    corazon.innerText = "🎂";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(pastel);
    setTimeout(() => pastel.remove(), 5000);
  }

  setInterval(crearPastel, 300);
});
