$(document).ready(function(){
  const produtos = JSON.parse(localStorage.getItem("produtos"));

  var html = '';

  for (var i = 0; i < 4; i++) {
    html += '<div class="product" style="background-image: url(\'img/'+produtos[i].foto+'\');"><a href="produto.html?id='+produtos[i].id+'"><h2>'+produtos[i].nome+'</h2></a></div>';
  }

  $('section.products div.products').html(html);
});