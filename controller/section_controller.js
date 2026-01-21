document.getElementById("btn_campanha").addEventListener("click", mudarSection);

document.getElementById("btn_quem_somos2").addEventListener("click",voltarSection);

function mudarSection(){
    document.getElementById("Tentativa").scrollIntoView({behavior: "smooth"});
}

function voltarSection(){
    document.getElementById("quem-somos").scrollIntoView({behavior: "smooth"});
}