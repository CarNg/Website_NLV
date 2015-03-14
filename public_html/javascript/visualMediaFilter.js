function filterVisualMedia(type){
    if(type == 0){
        $('#all').addClass("selected");
        $('#photo').removeClass("selected");
        $('#video').removeClass("selected");
        $('#web').removeClass("selected");
        $('#graphic').removeClass("selected");
        $('.photography').removeClass("hide");
        $('.videography').removeClass("hide"); 
        $('.webDesign').removeClass("hide");
        $('.graphicDesign').removeClass("hide"); 
    }
    else if(type == 1){
        $('#all').removeClass("selected");
        $('#photo').addClass("selected");
        $('#video').removeClass("selected");
        $('#web').removeClass("selected");
        $('#graphic').removeClass("selected");
        $('.photography').removeClass("hide");
        $('.videography').addClass("hide"); 
        $('.webDesign').addClass("hide");
        $('.graphicDesign').addClass("hide"); 
    }
    else if(type == 2){
        $('#all').removeClass("selected");
        $('#photo').removeClass("selected");
        $('#video').addClass("selected");
        $('#web').removeClass("selected");
        $('#graphic').removeClass("selected");
        $('.photography').addClass("hide");
        $('.videography').removeClass("hide"); 
        $('.webDesign').addClass("hide");
        $('.graphicDesign').addClass("hide"); 
    }
    else if(type == 3){
        $('#all').removeClass("selected");
        $('#photo').removeClass("selected");
        $('#video').removeClass("selected");
        $('#web').addClass("selected");
        $('#graphic').removeClass("selected");
        $('.photography').addClass("hide");
        $('.videography').addClass("hide"); 
        $('.webDesign').removeClass("hide");
        $('.graphicDesign').addClass("hide");
    }
    else{
        $('#all').removeClass("selected");
        $('#photo').removeClass("selected");
        $('#video').removeClass("selected");
        $('#web').removeClass("selected");
        $('#graphic').addClass("selected");
        $('.photography').addClass("hide");
        $('.videography').addClass("hide"); 
        $('.webDesign').addClass("hide");
        $('.graphicDesign').removeClass("hide");
    }
}

function jumpToBranding(position){
    $('.photography').addClass("hide");
    $('.videography').addClass("hide"); 
    $('.webDesign').addClass("hide");
    $('.graphicDesign').removeClass("hide");
    $(window).scrollTop(position);
}