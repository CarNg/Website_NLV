$(window).scroll(function() {
if ($(this).scrollTop() >= 1 && $(this).scrollTop() <= 50){  
    $('header').addClass("stepOne");
    $('header').removeClass("stepTwo");
    $('#navLogo').addClass("stepOne");
    $('#navLogo').removeClass("stepTwo");
  }
  else if ($(this).scrollTop() >= 50){  
    $('header').removeClass("stepOne");
    $('header').addClass("stepTwo");
    $('#navLogo').removeClass("stepOne");
    $('#navLogo').addClass("stepTwo");
  }
  else{
    $('header').removeClass("stepOne");
    $('header').removeClass("stepTwo");
    $('#navLogo').removeClass("stepOne");
    $('#navLogo').removeClass("stepTwo");
  }
});