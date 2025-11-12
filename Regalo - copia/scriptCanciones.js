function mostrarLetra(id) {
  const p = document.getElementById(id);
  if (!p) return;
  p.textContent = mensajes[id] || "";
  p.classList.add("animar");
  setTimeout(() => p.classList.remove("animar"), 1600);
}


document.addEventListener("DOMContentLoaded", () => {
  const audios = Array.from(document.querySelectorAll("audio"));

  audios.forEach(a => {
    a.addEventListener("play", () => {
      audios.forEach(other => {
        if (other !== a) other.pause();
      });
    });
  });

  window.addEventListener("beforeunload", () => {
    audios.forEach(a => a.pause());
  });
});
