


// login de cadastro//

function cadastro(){ // utilzei o evento onclic no botão
    var nome = document.getElementById("nome").value  // value coleta informacao do input
alert(`CADASTRO REALIZADO COM SUCESSO!`)   // usei o o alert para imprimir as mensagens

alert(`Seja bem-vindo senhor(a): ${nome} \n
Aqui está o seu cadastro: \n

Login= estacio \n
Senha= maracana`)
    
location.href = "login.html"



}