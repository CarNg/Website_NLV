function filterGames(type){
    if(type == 0){
        $('.digitalGames').removeClass("hide");
        $('.analogGames').removeClass("hide");    
    }
    else if(type == 1){
        $('.digitalGames').addClass("hide");
        $('.analogGames').removeClass("hide");
    }
    else{
        $('.analogGames').addClass("hide");
        $('.digitalGames').removeClass("hide");
    }
}