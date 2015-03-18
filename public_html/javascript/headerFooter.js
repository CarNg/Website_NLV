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

function expandHeader(){
    if($('header').hasClass("shrink")){
        $('header').removeClass("shrink");
    }
}

function shrinkHeader(){
    if ($(window).scrollTop() >= 150){  
        $('header').addClass("shrink");
    }
}

function showOverlay(overlay){
    $(overlay).addClass("show");
}

function removeOverlay(overlay){
    $(overlay).removeClass("show");
}

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