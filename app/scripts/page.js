$(document).ready(function(){

  $('.switch').click( function(){
    console.log('Click Switch')
    $('.boton-verde').toggle(0);
    $('.boton-rojo').toggle(0);
  });

  $('.cancel-btn').click( function(){
    console.log('Click Cancel')
    $('.cancel-confirm').toggle(0);
  });

});

$(window).resize(function(){
  
});

function adjustHomeElements(){
  $('#intro>.container').height($('#intro').height() - 120);

  // Obtener diferencia entre elementos exitentes arriba de la flech y espacio vacío
  // Restamos 20 para mantener la flecha siempre a 20 px del borde inferior
  var height = ($('#intro>.container').height() - $('.cta').height() - $('.flecha').height()) - 20;

  // Aplicar padding-top con el valor calculado 
  $('.flecha').css("padding-top", height + 'px');
}