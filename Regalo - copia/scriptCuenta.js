document.addEventListener("DOMContentLoaded", () => {
  const fechaObjetivo = new Date("September 17, 2026 00:00:00").getTime();

  const diasElem = document.getElementById("dias");
  const horasElem = document.getElementById("horas");
  const minutosElem = document.getElementById("minutos");
  const segundosElem = document.getElementById("segundos");
  const mensajeFinal = document.getElementById("mensajeFinal");

  const intervalo = setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
      clearInterval(intervalo);
      document.querySelector(".contador").style.display = "none";
      mensajeFinal.innerHTML = "🎉 ¡Feliz aniversario amor! 💖<br>Gracias por este hermoso año juntos 💞";
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    diasElem.textContent = dias;
    horasElem.textContent = horas.toString().padStart(2, '0');
    minutosElem.textContent = minutos.toString().padStart(2, '0');
    segundosElem.textContent = segundos.toString().padStart(2, '0');
  }, 1000);
});
