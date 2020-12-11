$(document).ready(function(){
  $('button.login').on('click', function(){
    var login = $('input[name=login]').val();
    var pass = $('input[name=pass]').val();

    if(login == '' || pass == ''){
      alert('Preencha todos os campos.');
      return false;
    }

    var usuarios = JSON.parse(localStorage.getItem("usuarios"));
    var cadastrado = false;

    if(usuarios == null || usuarios == undefined){
      alert('Nenhum usuário cadastrado.');
      return false;
    }

    usuarios.forEach(function(element, index, array){
      if(element.login == login && element.pass == pass){
        cadastrado = true;
        localStorage.setItem('session', JSON.stringify(element));
        localStorage.setItem('carrinho', JSON.stringify([]));
        alert('Login efetuado com sucesso, o carrinho foi limpo.');
        window.location.href = 'index.html';
      }
    });

    if(!cadastrado){
      alert('Usuário ou senha incorretos.');
    }
  });
});