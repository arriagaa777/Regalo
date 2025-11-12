// 💞 scriptMemorama.js — Memorama Romántico DAMM 💞
document.addEventListener("DOMContentLoaded", () => {
  const emojis = ["💍", "❣", "♫", "🏍", "✈", "💌", "💒", "🍣", "📸", "❄️"];
  let cartas = [];
  let seleccionadas = [];
  let bloqueo = false;
  let tablero = document.getElementById("tablero");
  const botonReiniciar = document.getElementById("reiniciar");

  function iniciarJuego() {
    tablero.innerHTML = "";
    seleccionadas = [];
    bloqueo = false;

    // Duplicar y mezclar las cartas
    cartas = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => crearCarta(emoji, index));

    cartas.forEach(carta => tablero.appendChild(carta));
  }

  function crearCarta(emoji, id) {
    const carta = document.createElement("div");
    carta.classList.add("carta");
    carta.dataset.emoji = emoji;
    carta.dataset.id = id;

    carta.innerHTML = `
      <div class="cara frente">💖</div>
      <div class="cara atras">${emoji}</div>
    `;

    carta.addEventListener("click", () => girarCarta(carta));
    return carta;
  }

  function girarCarta(carta) {
    if (bloqueo || carta.classList.contains("encontrada") || carta.classList.contains("girada")) return;

    carta.classList.add("girada");
    seleccionadas.push(carta);

    if (seleccionadas.length === 2) {
      verificarPareja();
    }
  }

  function verificarPareja() {
    const [c1, c2] = seleccionadas;
    bloqueo = true;

    if (c1.dataset.emoji === c2.dataset.emoji) {
      c1.classList.add("encontrada");
      c2.classList.add("encontrada");
      seleccionadas = [];
      bloqueo = false;

      if (document.querySelectorAll(".encontrada").length === cartas.length) {
        setTimeout(() => {
          alert("💞 ¡Ganaste mi amor! 💘");
        }, 500);
      }
    } else {
      setTimeout(() => {
        c1.classList.remove("girada");
        c2.classList.remove("girada");
        seleccionadas = [];
        bloqueo = false;
      }, 1000);
    }
  }

  botonReiniciar.addEventListener("click", iniciarJuego);

  iniciarJuego();
});
