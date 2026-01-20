
const objetoUsuario = [
    {
        nome: "",
        telefone: "",
        email: "",
        senha_confirmada: "",
    },
]
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
    alert("")
}else{

}
