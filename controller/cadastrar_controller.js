
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

const confirmar_senha = document.getElementById('confirmar_senha2');

let btn_cadastrar = document.getElementById("btn_conta");
btn_cadastrar.addEventListener("click", () => {
    criarUsuario();
})


function criarUsuario(){
    if(!nome_usuario || !telefone_usuario || !email_usuario || !senha_usuario || !confirmar_senha){
        alert("preencha todos os campos");
    };

    if(senha_usuario.value === confirmar_senha.value){
    alert("Senha correta, continue com o cadastro por favor!")
    }else{
    alert("A senha esta errada")
    };
}


    const icon_senha = document.getElementById('olho_senha1');
    const icon_confirmar_senha = document.getElementById("olho_senha2");
    icon_senha.addEventListener("click", mostrarSenha);
    icon_confirmar_senha.addEventListener("click", mostrarSenha);

// testar com query selector para mudar o passwordview
let passwordview = false;

function mostrarSenha(){
    let escrever_senha = document.getElementById("senha");
    let escrever_confirmar_senha = document.getElementById("confirmar_senha2");

    if(passwordview){
        icon_senha.className = "fa-solid fa-eye";
        icon_confirmar_senha.className = "fa-solid fa-eye";
        escrever_senha.type = "password";
        escrever_confirmar_senha.type = "password";
    } else{
        icon_senha.className = "fa-solid fa-eye-slash";
        icon_confirmar_senha.className = "fa-solid fa-eye-slash";
        escrever_senha.type = "text";
        escrever_confirmar_senha.type = "text";
    }
    passwordview = !passwordview;  
}


//ideia que eu tive com o gpt

/*const icon_senha = document.getElementById('olho_senha1');
const icon_confirmar_senha = document.getElementById("olho_senha2");

const senha_usuario = document.getElementById('senha');
const confirmar_senha = document.getElementById('confirmar_senha2');

icon_senha.addEventListener("click", () => {
    mostrarSenha(senha_usuario, icon_senha);
});

icon_confirmar_senha.addEventListener("click", () => {
    mostrarSenha(confirmar_senha, icon_confirmar_senha);
});

function mostrarSenha(input, icon){

    if(input.type === "password"){
        input.type = "text";
        icon.className = "fa-solid fa-eye-slash";
    } else{
        input.type = "password";
        icon.className = "fa-solid fa-eye";
    }

}
*/