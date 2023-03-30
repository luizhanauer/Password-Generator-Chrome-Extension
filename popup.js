function gerarSenha() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var password = "";
    for (var i = 0; i < 16; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("password").value = password;
    document.getElementById("password").style.fontWeight = "bold";
  }
  
  function copiarSenha() {
    var senha = document.getElementById("password");
    senha.select();
    document.execCommand("copy");
    document.getElementById("mensagem").innerHTML = "Senha copiada para a área de transferência!";
    document.getElementById("mensagem").style.color = "#28a745";
    setTimeout(function() {
      document.getElementById("mensagem").innerHTML = "";
    }, 3000);
  }
  
  document.getElementById("gerar").addEventListener("click", gerarSenha);
  document.getElementById("copiar").addEventListener("click", copiarSenha);
  