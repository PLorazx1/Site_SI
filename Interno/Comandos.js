function Entrar(){
    var login = document.getElementById("login").value;
    if (login === 'admin') {
        window.location.href = "home.html";
    } 
    else alert("Login ou Senha inválidos");
}

function Redefiniu(){
    var botao = document.querySelector('button');
    var senhas = `
    <button type="button" id="Reenvio" onclick="Reenviar()">Reenviar codigo</button>
    <div>
        <input type="number" id="codigo" placeholder="Codigo do email">
    </div>
    <div>
        <input type="password" id="senha" placeholder="Nova senha:">
    </div>
    <div>
        <input type="password" id="senha_again" placeholder="Nova senha novamente:">
    </div>
    <button type="button" onclick="Recuperei()">Redefinir senha</button>`
    var elementos = document.getElementById("Senha");
    botao.parentElement.removeChild(botao);
    elementos.innerHTML = senhas;
}

function Reenviar(){
    alert("Foi enviado outro codigo no seu email");
}

function Recuperei(){
    alert("Sua senha foi redefinida com sucesso!");
    window.location.href = "login_in.html";
}

function Cadastrei(){
    alert("Você foi cadastrado com sucesso!");
    window.location.href = "login_in.html";
}

function Interno(){
    window.location.href = "Interno/login_in.html";
}

function Externo(){
    window.location.href = "Externo/login.html";
}