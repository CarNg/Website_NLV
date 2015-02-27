$(function(){
  $('header').load("header.html");
  $('footer').load("footer.html");
});

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

var expanded = false;

function footerExpand(){
    if(!expanded){
        $('footer').css("padding-bottom", "280px");
        $('.footerLinks').addClass("expand");
        $('html, body').animate({scrollTop:$(document).height()}, 'slow').delay(800);
        expanded = true;
    }
    else{
        $('footer').css("padding-bottom", "0px");
        $('.footerLinks').removeClass("expand");
        expanded = false;
    }
}

function footerShrink(){
    $('footer').css("padding-bottom", "0px");
    $('.footerLinks').removeClass("expand");
}