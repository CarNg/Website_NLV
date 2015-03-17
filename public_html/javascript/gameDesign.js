function filterGames(type){
    if(type == 0){
        $('#all').addClass("selected");
        $('#analog').removeClass("selected");
        $('#digital').removeClass("selected");
        $('.digitalGames').removeClass("hide");
        $('.analogGames').removeClass("hide");    
    }
    else if(type == 1){
        $('#all').removeClass("selected");
        $('#analog').addClass("selected");
        $('#digital').removeClass("selected");
        $('.digitalGames').addClass("hide");
        $('.analogGames').removeClass("hide");
    }
    else{
        $('#all').removeClass("selected");
        $('#analog').removeClass("selected");
        $('#digital').addClass("selected");
        $('.analogGames').addClass("hide");
        $('.digitalGames').removeClass("hide");
    }
}

function showOverlay(overlay){
    $(overlay).addClass("show");
}

function removeOverlay(overlay){
    $(overlay).removeClass("show");
}

