$(window).scroll(function(){
if($(window).scrollTop()>500){
$('.back-to-top').fadeIn()
} else {
    $('.back-to-top').fadeOut()
}

})