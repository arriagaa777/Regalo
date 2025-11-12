// 💌 scriptCartas.js — versión final con animación
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".btn-carta");
  const contenedor = document.getElementById("contenidoCarta");

  botones.forEach((btn, index) => {
    btn.addEventListener("click", () => mostrarCarta(index + 1));
  });

  function mostrarCarta(numero) {
    let texto = "";

    switch (numero) {
      case 1:
        texto = `
        💕 Cada dia que pasa va creciendo mi amor por ti,
         por que me tienes muy locamente enamorada y eso
         es bueno mi amor. Pero enserio que te amo y mucho,
         no sabes cuanto espero el dia para verte, abrasarte 
         y darte besitos jsjs💕`;
        break;
      case 2:
        texto = `
        🌸 Eres lo mejor que me a pasado en la vida,
        haces que cada dia que pasa me sienta afortunada
        y solo por el simple echo de que soy tu novia
        pero enserio que eres lo mejor que me a pasado
        espero el momento para verte y decirtelo en persona
        por que enserio que no sabes cuanto te amo 🌸`;
        break;
      case 3:
        texto = `
        💖 Si llegas a sentirte mal con cualquier cosa
        no dudes en decirme mi amor, sabes que siempre
        estare contigo, en las buenas y en las malas tambien quiero
        que sepas que estoy muy orgullosa de ti
        y en cada logro que hagas yo siempre estare orgullosa de ti 💖`;
        break;
    }

    contenedor.innerHTML = `<p class="texto-carta animar">${texto}</p>`;
  }
});
