const envelope = document.getElementById("envelope");
const openBtn  = document.getElementById("openButton");
const closeBtn = document.getElementById("closeButton");

// Ao clicar em "Abrir Carta"
openBtn.addEventListener("click", () => {
  envelope.classList.add("open");   // dispara animação
  openBtn.classList.add("hidden");  // esconde botão abrir
  closeBtn.classList.remove("hidden"); // mostra botão fechar
});

// Ao clicar em "Fechar Carta"
closeBtn.addEventListener("click", () => {
  envelope.classList.remove("open");  // fecha flap e esconde carta
  closeBtn.classList.add("hidden");   // esconde botão fechar
  openBtn.classList.remove("hidden"); // mostra botão abrir de novo
});

