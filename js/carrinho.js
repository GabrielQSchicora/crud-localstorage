$(document).ready(function(){
  var carrinho = JSON.parse(localStorage.getItem("carrinho"));

  var html = '';
  var valorFinal = 0;
  
  carrinho.forEach(function(element, index, array){
    var produto = getProductById(element.id);

    html += '<div><img src="img/'+produto.foto+'"><div class="infos"><h2>'+produto.nome+'</h2><h3 class="quantidade">Quantidade: <span>'+element.quantidade+'</span></h3><h3 class="valor">Valor total: <span>R$ '+formatMoney(element.quantidade * produto.valor)+'</span></h3><button class="remover" idProduto="'+produto.id+'">Remover produto</button></div></div>';

    valorFinal += element.quantidade * produto.valor;
  });

  $('section.products div.list').html(html);
  $('section.finalizar h2.valor span').text('R$ '+formatMoney(valorFinal));

  $('button.remover').on('click', function(){
    var idDelete = $(this).attr('idProduto');

    carrinho.forEach(function(element, index, array){
      if(element.id == idDelete){
        carrinho.splice(index, 1);
      }
    });

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    window.location.reload();
  });

  $('button.finalizar').on('click', function(){
    var carrinho = JSON.parse(localStorage.getItem("carrinho"));
    if(carrinho.length == 0){
      alert('Nenhum produto no carrinho.');
      return false;
    }
    window.location.href = 'pagamento.html';
  });
});