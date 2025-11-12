function verificarContraseña() {
  const clave = document.getElementById("clave").value;
  const mensaje = document.getElementById("mensaje");

  if (clave === "171208") {
    mensaje.textContent = "💖 Bienvenido, mi amor 💖";
    mensaje.style.color = "#9d4edd";
    setTimeout(() => window.location.href = "menu.html", 1000);
  } else {
    mensaje.textContent = "💔 Contraseña incorrecta, intenta de nuevo 💔";
    mensaje.style.color = "red";
  }
}
