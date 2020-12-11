$(document).ready(function(){
  const produtos = JSON.parse(localStorage.getItem("produtos"));

  var html = '';
  
  produtos.forEach(function(element, index, array){
    html += '<div class="product" style="background-image: url(\'img/'+element.foto+'\');"><a href="produto.html?id='+element.id+'"><h2>'+element.nome+'</h2></a></div>';
  });

  $('section.products div.products').html(html);
});