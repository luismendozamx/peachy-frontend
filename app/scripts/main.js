$(document).ready(function(){
  adjustHomeElements();

  $('.switch').click( function(){
    console.log('Click Switch')
    $('.boton-verde').toggle(0);
    $('.boton-rojo').toggle(0);
  });

  $('.cancel-btn').click( function(){
    console.log('Click Cancel')
    $('.cancel-confirm').toggle(0);
  });

  $('.remove-item').click(function(){
    console.log(this);
    $(this).closest('.item.row').remove();
  });
});

$(window).resize(function(){
  adjustHomeElements();
});

function adjustHomeElements(){
  $('#intro>.container').height($('#intro').height() - 120);

  // Obtener diferencia entre elementos exitentes arriba de la flech y espacio vacío
  // Restamos 20 para mantener la flecha siempre a 20 px del borde inferior
  var height = ($('#intro>.container').height() - $('.cta').height() - $('.flecha').height()) - 20;

  // Aplicar padding-top con el valor calculado 
  $('.flecha').css("padding-top", height + 'px');
}

$(window).scroll(function() {
  var trigger = $('#how-it-works').offset().top - 70;

  if ($("#main-nav").offset().top >  trigger) {
    $("#main-nav").addClass("white");
  } else {
    $("#main-nav").removeClass("white");
  }
});