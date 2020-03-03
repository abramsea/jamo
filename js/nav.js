menu.onclick = function openHiddenMenu() {
    var x = document.getElementById('topnav');

    if (x.className === 'header__nav') {
        $('#topnav').addClass(' responsive')
        $('#menu').html('<i class="fas fa-times"></i>');
        $('.header__logo').addClass(' transparent');
        $('.header__intro').addClass(' transparent-mobile');
    } else {
        x.className = 'header__nav';
        $('.header__logo').removeClass(' transparent');
        $('.header__intro').removeClass(' transparent-mobile');
        $('#menu').html('<i class="fas fa-bars"></i>');
    }
}