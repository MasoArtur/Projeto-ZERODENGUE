
// const objetoUsuario = [
//     {
//         nome: "",
//         telefone: "",
//         email: "",
//         senha_confirmada: "",
//     },
// ]
const nome_usuario = document.getElementById('nome_usuario');

const telefone_usuario = document.getElementById('telefone_usuario');

const email_usuario = document.getElementById('email');

const senha_usuario = document.getElementById('senha');

const confirmar_senha = document.getElementById('confirmar_senha');

function criarUsuario(){
    if(!nome_usuario || !telefone_usuario || !email_usuario || !senha_usuario || !confirmar_senha){
        alert("preencha todos os campos");
    }
}

if(senha_usuario.value == confirmar_senha.value){
    alert("Senha correta, continue com o cadastro por favor!")
}else{
    alert("")
}

    const icon_senha = document.getElementById('olho_senha1');
    const icon_confirmar_senha = document.getElementById("olho_senha2");
    icon_senha.addEventListener("click", mostrarSenha);
    icon_confirmar_senha.addEventListener("click", mostrarSenha);

// testar com query selector para mudar o passwordview
let passwordview = false;

function mostrarSenha(InputID, icon){
    let escrever_senha = document.getElementsByClassName();

    if(passwordview){
        icon_senha.className = "fa-solid fa-eye";
        icon_confirmar_senha.className = "fa-solid fa-eye";
        escrever_senha.type = "password";
    } else{

    }  
}
