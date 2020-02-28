menu.onclick = function openHiddenMenu() {
    var x = document.getElementById('topnav');

    if (x.className === 'nav') {
        $('#topnav').addClass(' responsive')
        $('#menu').html('<i class="fas fa-times"></i>');
        $('.logo-pult').addClass(' transparent');
        $('.header__intro').addClass(' transparent-mobile');
    } else {
        x.className = 'nav';
        $('.logo-pult').removeClass(' transparent');
        $('.header__intro').removeClass(' transparent-mobile');
        $('#menu').html('<i class="fas fa-bars"></i>');
    }
}