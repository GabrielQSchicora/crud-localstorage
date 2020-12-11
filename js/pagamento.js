$(document).ready(function(){
  $("input[name=numeroCartao]").inputmask({mask: "9999 9999 9999 9999"});
  $("input[name=validadeCartao]").inputmask({mask: "99/9999"});
  $("input[name=ccv]").inputmask({mask: "999"});

  var carrinho = JSON.parse(localStorage.getItem("carrinho"));

  if(carrinho.length == 0){
    window.location.href = 'carrinho.html';
  }

  var html = '';
  var valorFinal = 0;
  
  carrinho.forEach(function(element, index, array){
    var produto = getProductById(element.id);
    valorFinal += element.quantidade * produto.valor;
  });

  for (var i = 1; i <= 12; i++) {
    var valorParcela = valorFinal / i;

    if(valorFinal < 0){
      break;
    }

    html += "<option value=''>"+i+" X R$ "+formatMoney(valorParcela)+" (sem juros)</option>";
  }

  $('select[name=parcelas]').html(html);

  $('button.pagar').on('click', function(){
    var numeroCartao = $("input[name=numeroCartao]").val();
    var nomeCartao = $("input[name=nomeCartao]").val();
    var validadeCartao = $("input[name=validadeCartao]").val();
    var ccv = $("input[name=ccv]").val();

    if(numeroCartao == '' || nomeCartao == '' || validadeCartao == '' || ccv == ''){
      alert('Preencha todos os campos');
      return false;
    }

    localStorage.setItem('carrinho', JSON.stringify([]));
    alert('Compra finalizada, carrinho esvaziado. Volte sempre.');
    window.location.href = 'index.html';
  });
});