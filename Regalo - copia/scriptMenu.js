setInterval(crearCorazon, 800);

window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  const mensajes = [
    "💞 Hola, mi amorcito 💞",
    "🌸 Bienvenido a nuestro lugar especial 🌸",
    "❤︎ Gracias por estar aquí conmigo ❤︎",
    "💘 Cada clic aquí es una parte de nuestro amor 💘"
  ];

  const mensaje = document.createElement("p");
  mensaje.textContent = mensajes[Math.floor(Math.random() * mensajes.length)];
  mensaje.style.fontSize = "1.2em";
  mensaje.style.color = "#9d4edd";
  mensaje.style.marginTop = "10px";
  mensaje.style.transition = "opacity 1s ease";
  mensaje.style.opacity = "0";
  document.querySelector(".contenedor").appendChild(mensaje);

  setTimeout(() => mensaje.style.opacity = "1", 500);
});
