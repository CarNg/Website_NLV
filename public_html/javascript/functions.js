$(window).scroll(function() {
if ($(this).scrollTop() >= 150){  
    $('header').addClass("shrink");
    $('#navLogo').addClass("shrink");
  }
  else{
    $('header').removeClass("shrink");
    $('#navLogo').removeClass("shrink");

    }
});

function footerExpand(){
    $('footer').css("padding-bottom", "200px");
    $('.footerLinks').addClass("expand");
    $('html, body').animate({scrollTop:$(document).height()}, 'slow');
}

function footerShrink(){
    $('footer').css("padding-bottom", "0px");
    $('.footerLinks').removeClass("expand");
}