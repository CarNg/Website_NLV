$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$(function(){
    $('header').load("altHeader.html");
    $('footer').load("altFooter.html");
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
        $('footer').css("padding-bottom", "270px");
        $('.footerSections').addClass("expand");
        $('html, body').animate({scrollTop:$(document).height()}, 'slow');
        expanded = true;
    }
    else{
        $('footer').css("padding-bottom", "0px");
        $('.footerSections').removeClass("expand");
        expanded = false;
    }
}