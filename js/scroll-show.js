$(window).scroll(function(){
    if($(window).scrollTop()>500){
            $('.advants__item:first-of-type').css({left: 0});
        } 
    })


$(window).scroll(function(){
    if($(window).scrollTop()>800){
            $('.advants__item:not(:first-of-type)').css({left: 0});
        } 
    })