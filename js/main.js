$('.yes').click(function(){
    $('#first_page').fadeOut(0);
    $('#second_page').fadeOut(0);
    $('#thith_page').fadeIn(0,function(){$(this).css("display", "flex");});
    secondBtnNo();
});

$('.no').click(function(){
    $('#first_page').fadeOut(0);
    $('#second_page').fadeIn(0,function(){$(this).css("display", "flex");});
});



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$('.second-no').hover(function () { 
    $(this).css({
        top: getRandomInt(0, window.innerHeight-200)+"px",
        left: getRandomInt(0, window.innerWidth-200)+"px"
    });
}, function () { });