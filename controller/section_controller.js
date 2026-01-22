// document.getElementById("btn_campanha").addEventListener("click", mudarSection);

// document.getElementById("btn_quem_somos").addEventListener("click", voltarSection);

// function mudarSection() {
//     document.getElementById("Tentativa").scrollIntoView({ behavior: "smooth" });
// }

// function voltarSection() {
//     document.getElementById("quem-somos").scrollIntoView({ behavior: "smooth" });
// }

//codigo felipetto ajudas
const banners = document.getElementById("banners");

function trocarBanner(numeroBanner) {
    banners.style.top = `-${numeroBanner * 100}vh`;
}