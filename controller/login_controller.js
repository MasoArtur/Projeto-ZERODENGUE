const email_correto = "artur.0950@aluno.pr.senac.br";
const senha_correto = "12345678";

let password_view = false;

function verificarLogin(){
    let email = document.getElementById('email');
    let senha = document.getElementById('senha');

    let email_digitado = email.value;
    let senha_digitada = senha.value;

    if(email_digitado == email_correto){
        if(senha_digitada == senha_correto){
            alert("LOGIN FEITO COM SUCESSO");
            window.location.href = "./../pages/index_1.html";
        }else{
            alert("senha incorreta!");
        }
    }else{
        alert("email, incorreto!");
    }
}

function trocarOlharSenha(){
    let senha = document.getElementById('senha');
    let olho_senha = document.getElementById('olho_senha');

    if(password_view){
        olho_senha.className = "fa-solid fa-eye";
        senha.type = "password";
    }else{
    olho_senha.className = "fa-solid fa-eye-slash";
    senha.type = "text";
    }
    password_view = !password_view;
    //fazer código para voltar o foco no input
}
