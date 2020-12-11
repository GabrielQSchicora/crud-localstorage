$(document).ready(function(){
  $('button.cadastro').on('click', function(){
    var nome = $('input[name=nome]').val();
    var login = $('input[name=login]').val();
    var pass = $('input[name=pass]').val();

    if(nome == '' || login == '' || pass == ''){
      alert('Preencha todos os campos.');
      return false;
    }

    var usuarios = JSON.parse(localStorage.getItem("usuarios"));
    var jaExiste = false;

    if(usuarios == null || usuarios == undefined){
      usuarios = [];
    }

    usuarios.forEach(function(element, index, array){
      if(element.login == login){
        jaExiste = true;
        alert('Já existe um usuário cadastrado com esse login.');
      }
    });

    if(!jaExiste){
      usuarios.push({
        nome: nome,
        login: login,
        pass: pass
      });

      localStorage.setItem('usuarios', JSON.stringify(usuarios));

      alert('Cadastro efetuado com sucesso, faça login.');
      window.location.href = 'login.html';
    }
  });
});