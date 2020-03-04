'use strict'

$(document).ready(function () {

    var folder = "black";
    var prodNumber;

    for (prodNumber = 1; prodNumber <= 14 ; prodNumber++ ) {
        $('#' + prodNumber +' img').attr('src', 'images/' + folder + '/' + prodNumber +'.png');
    }

    var folder = "black/soundbars";

    for (prodNumber = 15; prodNumber <= 16 ; prodNumber++ ) {
        $('#' + prodNumber +' img').attr('src', 'images/' + folder + '/' + prodNumber +'.png');
    }

    var folder = "black/concert-9";

    for (prodNumber = 17; prodNumber <= 22 ; prodNumber++ ) {
        $('#' + prodNumber +' img').attr('src', 'images/' + folder + '/' + prodNumber +'.png');
    }




    function changeImage(currentProd, shopLink, folder) {
        return function() {
        $('#' + currentProd + ' img').attr("src", "images/" + folder + "/" + currentProd +".png");
        $('#' + currentProd + ' .products__info a').attr('href', shopLink );
        }
    }



    // studio 8 buttons 


    $('#' + 1 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(1,'https://pult.ru/product/akustika-dolby-atmos-jamo-s-8-atm-black?from=jamo', 'black'));

    $('#' + 1 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(1,'https://pult.ru/product/akustika-dolby-atmos-jamo-s-8-atm-white?from=jamo', 'white'));

    $('#' + 1 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(1,'https://pult.ru/product/akustika-dolby-atmos-jamo-s-8-atm-walnut?from=jamo', 'walnut'));


    $('#' + 2 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(2,'https://pult.ru/product/polochnaya-akustika-jamo-s-801-black?from=jamo', 'black'));

    $('#' + 2 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(2,'https://pult.ru/product/polochnaya-akustika-jamo-s-801-white?from=jamo', 'white'));

    $('#' + 2 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(2,'https://pult.ru/product/polochnaya-akustika-jamo-s-801-walnut?from=jamo', 'walnut'));


    $('#' + 3 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(3,'https://pult.ru/product/komplekt-akustiki-jamo-s-803-hcs-black?from=jamo', 'black'));

    $('#' + 3 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(3,'https://pult.ru/product/komplekt-akustiki-jamo-s-803-hcs-white?from=jamo', 'white'));

    $('#' + 3 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(3,'https://pult.ru/product/komplekt-akustiki-jamo-s-803-hcs-walnut?from=jamo', 'walnut'));


    $('#' + 4 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(4,'https://pult.ru/product/komplekt-akustiki-jamo-s-805-hcs-black?from=jamo', 'black'));

    $('#' + 4 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(4,'https://pult.ru/product/komplekt-akustiki-jamo-s-805-hcs-white?from=jamo', 'white'));

    $('#' + 4 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(4,'https://pult.ru/product/komplekt-akustiki-jamo-s-805-hcs-walnut?from=jamo', 'walnut'));


    $('#' + 5 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(5,'https://pult.ru/product/komplekt-akustiki-jamo-s-803-hcs-black?from=jamo', 'black'));

    $('#' + 5 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(5,'https://pult.ru/product/komplekt-akustiki-jamo-s-803-hcs-white?from=jamo', 'white'));

    $('#' + 5 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(5,'https://pult.ru/product/komplekt-akustiki-jamo-s-803-hcs-walnut?from=jamo', 'walnut'));


    $('#' + 6 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(6,'https://pult.ru/product/napolnaya-akustika-jamo-s-805-black?from=jamo', 'black'));

    $('#' + 6 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(6,'https://pult.ru/product/napolnaya-akustika-jamo-s-805-white?from=jamo', 'white'));

    $('#' + 6 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(6,'https://pult.ru/product/napolnaya-akustika-jamo-s-805-walnut?from=jamo', 'walnut'));


    $('#' + 7 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(7,'https://pult.ru/product/komplekt-akustiki-jamo-s-807-hcs-black?from=jamo', 'black'));

    $('#' + 7 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(7,'https://pult.ru/product/komplekt-akustiki-jamo-s-807-hcs-white?from=jamo', 'white'));

    $('#' + 7 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(7,'https://pult.ru/product/komplekt-akustiki-jamo-s-807-hcs-walnut?from=jamo', 'walnut'));


    $('#' + 8 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(8,'https://pult.ru/product/napolnaya-akustika-jamo-s-807-black?from=jamo', 'black'));

    $('#' + 8 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(8,'https://pult.ru/product/napolnaya-akustika-jamo-s-807-white?from=jamo', 'white'));

    $('#' + 8 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(8,'https://pult.ru/product/napolnaya-akustika-jamo-s-807-walnut?from=jamo', 'walnut'));


    $('#' + 9 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(9,'https://pult.ru/product/sabvufer-jamo-s-808-sub-black?from=jamo', 'black'));

    $('#' + 9 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(9,'https://pult.ru/product/sabvufer-jamo-s-808-sub-white?from=jamo', 'white'));

    $('#' + 9 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(9,'https://pult.ru/product/sabvufer-jamo-s-808-sub-walnut?from=jamo', 'walnut'));


    $('#' + 10 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(10,'https://pult.ru/product/komplekt-akustiki-jamo-s-809-hcs-black?from=jamo', 'black'));

    $('#' + 10 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(10,'https://pult.ru/product/komplekt-akustiki-jamo-s-809-hcs-white?from=jamo', 'white'));

    $('#' + 10 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(10,'https://pult.ru/product/komplekt-akustiki-jamo-s-809-hcs-walnut?from=jamo', 'walnut'));


    $('#' + 11 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(11,'https://pult.ru/product/napolnaya-akustika-jamo-s-809-black?from=jamo', 'black'));

    $('#' + 11 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(11,'https://pult.ru/product/napolnaya-akustika-jamo-s-809-white?from=jamo', 'white'));

    $('#' + 11 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(11,'https://pult.ru/product/napolnaya-akustika-jamo-s-809-walnut?from=jamo', 'walnut'));


    $('#' + 12 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(12,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-s-81-cen-black?from=jamo', 'black'));

    $('#' + 12 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(12,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-s-81-cen-white?from=jamo', 'white'));

    $('#' + 12 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(12,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-s-81-cen-walnut?from=jamo', 'walnut'));


    $('#' + 13 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(13,'https://pult.ru/product/sabvufer-jamo-s-810-sub-black?from=jamo', 'black'));

    $('#' + 13 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(13,'https://pult.ru/product/sabvufer-jamo-s-810-sub-white?from=jamo', 'white'));

    $('#' + 13 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(13,'https://pult.ru/product/sabvufer-jamo-s-810-sub-walnut?from=jamo', 'walnut'));


    $('#' + 14 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(14,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-s-83-cen-black?from=jamo', 'black'));

    $('#' + 14 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(14,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-s-83-cen-white?from=jamo', 'white'));

    $('#' + 14 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(14,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-s-83-cen-walnut?from=jamo', 'walnut'));



    // soundbars buttons



    $('#' + 15 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(15,'https://pult.ru/product/saundbar-jamo-sb-36-black-ce?from=jamo', 'black/soundbars'));

    $('#' + 15 + ' .products__info .products__colors .products__color .products__color-circle_grey').click(changeImage(15,'https://pult.ru/product/saundbar-jamo-sb-36-lt-grey-ce?from=jamo', 'white/soundbars'));


    $('#' + 16 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(16,'https://pult.ru/product/saundbar-jamo-sb-40-black-ce?from=jamo', 'black/soundbars'));

    $('#' + 16 + ' .products__info .products__colors .products__color .products__color-circle_grey').click(changeImage(16,'https://pult.ru/product/saundbar-jamo-sb-40-grey-ce?from=jamo', 'white/soundbars'));




    // concert 9  buttons


    $('#' + 17 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(17,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-c-9-cen-ii-black-ash?from=jamo', 'black/concert-9'));

    $('#' + 17 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(17,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-c-9-cen-ii-white-oak?from=jamo', 'white/concert-9'));


    $('#' + 18 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(18,'https://pult.ru/product/nastennaya-akustika-jamo-c-9-sur-ii-black-ash?from=jamo', 'black/concert-9'));



    $('#' + 19 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(19,'https://pult.ru/product/polochnaya-akustika-jamo-c-91-ii-black-ash?from=jamo', 'black/concert-9'));

    $('#' + 19 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(19,'https://pult.ru/product/polochnaya-akustika-jamo-c-91-ii-white-oak?from=jamo', 'white/concert-9'));


    $('#' + 20 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(20,'https://pult.ru/product/polochnaya-akustika-jamo-c-93-ii-black-ash?from=jamo', 'black/concert-9'));

    $('#' + 20 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(20,'https://pult.ru/product/polochnaya-akustika-jamo-c-93-ii-white-oak?from=jamo', 'white/concert-9'));


    $('#' + 21 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(21,'https://pult.ru/product/napolnaya-akustika-jamo-c-95-ii-black-ash?from=jamo', 'black/concert-9'));

    $('#' + 21 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(21,'https://pult.ru/product/napolnaya-akustika-jamo-c-95-ii-white-oak?from=jamo', 'white/concert-9'));


    $('#' + 22 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(22,'https://pult.ru/product/napolnaya-akustika-jamo-c-97-ii-black-ash?from=jamo', 'black/concert-9'));

    $('#' + 22 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(22,'https://pult.ru/product/napolnaya-akustika-jamo-c-97-ii-white-oak?from=jamo', 'white/concert-9'));

})