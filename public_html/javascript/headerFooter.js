$(function(){
  $('header').load("header.html");
  $('footer').load("footer.html");
});

$(window).scroll(function() {
if ($(this).scrollTop() >= 150){  
    $('header').addClass("shrink");
  }
  else{
    $('header').removeClass("shrink");
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