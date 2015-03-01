function filterVisualMedia(type){
    if(type == 0){
        $('.photography').removeClass("hide");
        $('.videography').removeClass("hide"); 
        $('.webDesign').removeClass("hide");
        $('.graphicDesign').removeClass("hide"); 
    }
    else if(type == 1){
        $('.photography').removeClass("hide");
        $('.videography').addClass("hide"); 
        $('.webDesign').addClass("hide");
        $('.graphicDesign').addClass("hide"); 
    }
    else if(type == 2){
        $('.photography').addClass("hide");
        $('.videography').removeClass("hide"); 
        $('.webDesign').addClass("hide");
        $('.graphicDesign').addClass("hide"); 
    }
    else if(type == 3){
        $('.photography').addClass("hide");
        $('.videography').addClass("hide"); 
        $('.webDesign').removeClass("hide");
        $('.graphicDesign').addClass("hide");
    }
    else{
        $('.photography').addClass("hide");
        $('.videography').addClass("hide"); 
        $('.webDesign').addClass("hide");
        $('.graphicDesign').removeClass("hide");
    }
}