$(document).ready(function(){
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  const produtos = JSON.parse(localStorage.getItem("produtos"));
  
  produtos.forEach(function(element, index, array){
    if(productId == element.id){
      $('section.produto h1.title').text(element.nome);
      $('section.produto img').attr('src', 'img/'+element.foto);
      $('section.produto p.description').text(element.descricao);
      $('section.produto h2.value').text('R$ '+formatMoney(element.valor));
    }
  });

  $('button.comprar').on('click', function(){
    var produtosCarrinho = JSON.parse(localStorage.getItem("carrinho"));
    var jaSelecionado = false;

    if(produtosCarrinho == null || produtosCarrinho == undefined){
      produtosCarrinho = [];
    }

    produtosCarrinho.forEach(function(element, index, array){
      if(element.id == productId){
        element.quantidade += 1;
        jaSelecionado = true;
      }
    });

    if(!jaSelecionado){
      produtosCarrinho.push({
        id: productId,
        quantidade: 1
      });
    }

    localStorage.setItem('carrinho', JSON.stringify(produtosCarrinho));

    alert('Produto adicionado com sucesso');
  });
});