document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
});

function copiarEmail() {
  const email = "contato@estacaodooleoprime.com.br";

  navigator.clipboard.writeText(email).then(() => {
    const popup = document.getElementById("popup");

    // Mostra o pop-up com animação
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.opacity = "1";
      popup.style.transform = "translateX(-50%) translateY(-10px)";
    }, 10); // Pequeno atraso para garantir a animação

    // Oculta o pop-up após 2 segundos
    setTimeout(() => {
      popup.style.opacity = "0";
      popup.style.transform = "translateX(-50%) translateY(0)";
      setTimeout(() => {
        popup.style.display = "none";
      }, 500); // Aguarda o término da animação
    }, 2000);
  }).catch(err => {
    console.error("Erro ao copiar o e-mail:", err);
  });
}