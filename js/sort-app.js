'use strict'

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


$('#' + 1 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(1,'https://pult.ru/product/akustika-dolby-atmos-jamo-s-8-atm-black', 'black'));

$('#' + 1 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(1,'https://pult.ru/product/akustika-dolby-atmos-jamo-s-8-atm-white', 'white'));

$('#' + 1 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(1,'https://pult.ru/product/akustika-dolby-atmos-jamo-s-8-atm-walnut', 'walnut'));


$('#' + 2 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(2,'https://pult.ru/product/polochnaya-akustika-jamo-s-801-black', 'black'));

$('#' + 2 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(2,'https://pult.ru/product/polochnaya-akustika-jamo-s-801-white', 'white'));

$('#' + 2 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(2,'https://pult.ru/product/polochnaya-akustika-jamo-s-801-walnut', 'walnut'));


$('#' + 3 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(3,'https://pult.ru/product/komplekt-akustiki-jamo-s-803-hcs-black', 'black'));

$('#' + 3 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(3,'https://pult.ru/product/komplekt-akustiki-jamo-s-803-hcs-white', 'white'));

$('#' + 3 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(3,'https://pult.ru/product/komplekt-akustiki-jamo-s-803-hcs-walnut', 'walnut'));


$('#' + 4 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(4,'https://pult.ru/product/komplekt-akustiki-jamo-s-805-hcs-black', 'black'));

$('#' + 4 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(4,'https://pult.ru/product/komplekt-akustiki-jamo-s-805-hcs-white', 'white'));

$('#' + 4 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(4,'https://pult.ru/product/komplekt-akustiki-jamo-s-805-hcs-walnut', 'walnut'));


$('#' + 5 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(5,'https://pult.ru/product/komplekt-akustiki-jamo-s-803-hcs-black', 'black'));

$('#' + 5 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(5,'https://pult.ru/product/komplekt-akustiki-jamo-s-803-hcs-white', 'white'));

$('#' + 5 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(5,'https://pult.ru/product/komplekt-akustiki-jamo-s-803-hcs-walnut', 'walnut'));


$('#' + 6 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(6,'https://pult.ru/product/napolnaya-akustika-jamo-s-805-black', 'black'));

$('#' + 6 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(6,'https://pult.ru/product/napolnaya-akustika-jamo-s-805-white', 'white'));

$('#' + 6 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(6,'https://pult.ru/product/napolnaya-akustika-jamo-s-805-walnut', 'walnut'));


$('#' + 7 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(7,'https://pult.ru/product/komplekt-akustiki-jamo-s-807-hcs-black', 'black'));

$('#' + 7 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(7,'https://pult.ru/product/komplekt-akustiki-jamo-s-807-hcs-white', 'white'));

$('#' + 7 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(7,'https://pult.ru/product/komplekt-akustiki-jamo-s-807-hcs-walnut', 'walnut'));


$('#' + 8 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(8,'https://pult.ru/product/napolnaya-akustika-jamo-s-807-black', 'black'));

$('#' + 8 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(8,'https://pult.ru/product/napolnaya-akustika-jamo-s-807-white', 'white'));

$('#' + 8 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(8,'https://pult.ru/product/napolnaya-akustika-jamo-s-807-walnut', 'walnut'));


$('#' + 9 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(9,'https://pult.ru/product/sabvufer-jamo-s-808-sub-black', 'black'));

$('#' + 9 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(9,'https://pult.ru/product/sabvufer-jamo-s-808-sub-white', 'white'));

$('#' + 9 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(9,'https://pult.ru/product/sabvufer-jamo-s-808-sub-walnut', 'walnut'));


$('#' + 10 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(10,'https://pult.ru/product/komplekt-akustiki-jamo-s-809-hcs-black', 'black'));

$('#' + 10 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(10,'https://pult.ru/product/komplekt-akustiki-jamo-s-809-hcs-white', 'white'));

$('#' + 10 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(10,'https://pult.ru/product/komplekt-akustiki-jamo-s-809-hcs-walnut', 'walnut'));


$('#' + 11 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(11,'https://pult.ru/product/napolnaya-akustika-jamo-s-809-black', 'black'));

$('#' + 11 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(11,'https://pult.ru/product/napolnaya-akustika-jamo-s-809-white', 'white'));

$('#' + 11 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(11,'https://pult.ru/product/napolnaya-akustika-jamo-s-809-walnut', 'walnut'));


$('#' + 12 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(12,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-s-81-cen-black', 'black'));

$('#' + 12 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(12,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-s-81-cen-white', 'white'));

$('#' + 12 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(12,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-s-81-cen-walnut', 'walnut'));


$('#' + 13 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(13,'https://pult.ru/product/sabvufer-jamo-s-810-sub-black', 'black'));

$('#' + 13 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(13,'https://pult.ru/product/sabvufer-jamo-s-810-sub-white', 'white'));

$('#' + 13 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(13,'https://pult.ru/product/sabvufer-jamo-s-810-sub-walnut', 'walnut'));


$('#' + 14 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(14,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-s-83-cen-black', 'black'));

$('#' + 14 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(14,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-s-83-cen-white', 'white'));

$('#' + 14 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeImage(14,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-s-83-cen-walnut', 'walnut'));



// soundbars buttons



$('#' + 15 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(15,'https://pult.ru/product/saundbar-jamo-sb-36-black-ce', 'black/soundbars'));

$('#' + 15 + ' .products__info .products__colors .products__color .products__color-circle_grey').click(changeImage(15,'https://pult.ru/product/saundbar-jamo-sb-36-lt-grey-ce', 'white/soundbars'));


$('#' + 16 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(16,'https://pult.ru/product/saundbar-jamo-sb-40-black-ce', 'black/soundbars'));

$('#' + 16 + ' .products__info .products__colors .products__color .products__color-circle_grey').click(changeImage(16,'https://pult.ru/product/saundbar-jamo-sb-40-grey-ce', 'white/soundbars'));




// concert 9  buttons


$('#' + 17 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(17,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-c-9-cen-ii-black-ash', 'black/concert-9'));

$('#' + 17 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(17,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-c-9-cen-ii-white-oak', 'white/concert-9'));


$('#' + 18 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(18,'https://pult.ru/product/nastennaya-akustika-jamo-c-9-sur-ii-black-ash', 'black/concert-9'));



$('#' + 19 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(19,'https://pult.ru/product/polochnaya-akustika-jamo-c-91-ii-black-ash', 'black/concert-9'));

$('#' + 19 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(19,'https://pult.ru/product/polochnaya-akustika-jamo-c-91-ii-white-oak', 'white/concert-9'));


$('#' + 20 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(20,'https://pult.ru/product/polochnaya-akustika-jamo-c-93-ii-black-ash', 'black/concert-9'));

$('#' + 20 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(20,'https://pult.ru/product/polochnaya-akustika-jamo-c-93-ii-white-oak', 'white/concert-9'));


$('#' + 21 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(21,'https://pult.ru/product/napolnaya-akustika-jamo-c-95-ii-black-ash', 'black/concert-9'));

$('#' + 21 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(21,'https://pult.ru/product/napolnaya-akustika-jamo-c-95-ii-white-oak', 'white/concert-9'));


$('#' + 22 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeImage(22,'https://pult.ru/product/napolnaya-akustika-jamo-c-97-ii-black-ash', 'black/concert-9'));

$('#' + 22 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeImage(22,'https://pult.ru/product/napolnaya-akustika-jamo-c-97-ii-white-oak', 'white/concert-9'));