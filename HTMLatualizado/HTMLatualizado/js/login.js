function log() {
    var login = document.getElementById("login").value;    // coletei informação com value, usando id login
    var senha = document.getElementById("senha").value;

    console.log("Login:", login); 
    console.log("Senha:", senha); 

        if (login === "estacio" && senha === "maracana") {        // se a condição for verdadeira "Estacio", vai ser redirecionado para a pagina de usuario
            location.href = "usuario.html"
            
        } else {
        location.href = "usuario.html"
    }
}
