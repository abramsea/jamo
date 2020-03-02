'use strict'

var folder = "black";
var prodNumber;

for (prodNumber = 1; prodNumber <= 14 ; prodNumber++ ) {
    $('#' + prodNumber +' img').attr('src', 'images/' + folder + '/' + prodNumber +'.png');
}






function changeColor(currentProd, shopLink, color) {
    return function() {
    $('#' + currentProd + ' img').attr("src", "images/" + color + "/" + currentProd +".png");
    $('#' + currentProd + ' .products__info a').attr('href', shopLink );
    }
}

$('#' + 1 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeColor(1,'https://pult.ru/product/akustika-dolby-atmos-jamo-s-8-atm-black', 'black'));

$('#' + 1 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeColor(1,'https://pult.ru/product/akustika-dolby-atmos-jamo-s-8-atm-white', 'white'));

$('#' + 1 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeColor(1,'https://pult.ru/product/akustika-dolby-atmos-jamo-s-8-atm-walnut', 'walnut'));


$('#' + 2 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeColor(2,'https://pult.ru/product/polochnaya-akustika-jamo-s-801-black', 'black'));

$('#' + 2 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeColor(2,'https://pult.ru/product/polochnaya-akustika-jamo-s-801-white', 'white'));

$('#' + 2 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeColor(2,'https://pult.ru/product/polochnaya-akustika-jamo-s-801-walnut', 'walnut'));


$('#' + 3 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeColor(3,'https://pult.ru/product/komplekt-akustiki-jamo-s-803-hcs-black', 'black'));

$('#' + 3 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeColor(3,'https://pult.ru/product/komplekt-akustiki-jamo-s-803-hcs-white', 'white'));

$('#' + 3 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeColor(3,'https://pult.ru/product/komplekt-akustiki-jamo-s-803-hcs-walnut', 'walnut'));


$('#' + 4 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeColor(4,'https://pult.ru/product/komplekt-akustiki-jamo-s-805-hcs-black', 'black'));

$('#' + 4 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeColor(4,'https://pult.ru/product/komplekt-akustiki-jamo-s-805-hcs-white', 'white'));

$('#' + 4 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeColor(4,'https://pult.ru/product/komplekt-akustiki-jamo-s-805-hcs-walnut', 'walnut'));


$('#' + 5 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeColor(5,'https://pult.ru/product/komplekt-akustiki-jamo-s-803-hcs-black', 'black'));

$('#' + 5 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeColor(5,'https://pult.ru/product/komplekt-akustiki-jamo-s-803-hcs-white', 'white'));

$('#' + 5 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeColor(5,'https://pult.ru/product/komplekt-akustiki-jamo-s-803-hcs-walnut', 'walnut'));


$('#' + 6 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeColor(6,'https://pult.ru/product/napolnaya-akustika-jamo-s-805-black', 'black'));

$('#' + 6 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeColor(6,'https://pult.ru/product/napolnaya-akustika-jamo-s-805-white', 'white'));

$('#' + 6 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeColor(6,'https://pult.ru/product/napolnaya-akustika-jamo-s-805-walnut', 'walnut'));


$('#' + 7 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeColor(7,'https://pult.ru/product/komplekt-akustiki-jamo-s-807-hcs-black', 'black'));

$('#' + 7 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeColor(7,'https://pult.ru/product/komplekt-akustiki-jamo-s-807-hcs-white', 'white'));

$('#' + 7 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeColor(7,'https://pult.ru/product/komplekt-akustiki-jamo-s-807-hcs-walnut', 'walnut'));


$('#' + 8 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeColor(8,'https://pult.ru/product/napolnaya-akustika-jamo-s-807-black', 'black'));

$('#' + 8 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeColor(8,'https://pult.ru/product/napolnaya-akustika-jamo-s-807-white', 'white'));

$('#' + 8 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeColor(8,'https://pult.ru/product/napolnaya-akustika-jamo-s-807-walnut', 'walnut'));


$('#' + 9 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeColor(9,'https://pult.ru/product/sabvufer-jamo-s-808-sub-black', 'black'));

$('#' + 9 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeColor(9,'https://pult.ru/product/sabvufer-jamo-s-808-sub-white', 'white'));

$('#' + 9 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeColor(9,'https://pult.ru/product/sabvufer-jamo-s-808-sub-walnut', 'walnut'));


$('#' + 10 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeColor(10,'https://pult.ru/product/komplekt-akustiki-jamo-s-809-hcs-black', 'black'));

$('#' + 10 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeColor(10,'https://pult.ru/product/komplekt-akustiki-jamo-s-809-hcs-white', 'white'));

$('#' + 10 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeColor(10,'https://pult.ru/product/komplekt-akustiki-jamo-s-809-hcs-walnut', 'walnut'));


$('#' + 11 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeColor(11,'https://pult.ru/product/napolnaya-akustika-jamo-s-809-black', 'black'));

$('#' + 11 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeColor(11,'https://pult.ru/product/napolnaya-akustika-jamo-s-809-white', 'white'));

$('#' + 11 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeColor(11,'https://pult.ru/product/napolnaya-akustika-jamo-s-809-walnut', 'walnut'));


$('#' + 12 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeColor(12,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-s-81-cen-black', 'black'));

$('#' + 12 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeColor(12,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-s-81-cen-white', 'white'));

$('#' + 12 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeColor(12,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-s-81-cen-walnut', 'walnut'));


$('#' + 13 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeColor(13,'https://pult.ru/product/sabvufer-jamo-s-810-sub-black', 'black'));

$('#' + 13 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeColor(13,'https://pult.ru/product/sabvufer-jamo-s-810-sub-white', 'white'));

$('#' + 13 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeColor(13,'https://pult.ru/product/sabvufer-jamo-s-810-sub-walnut', 'walnut'));


$('#' + 14 + ' .products__info .products__colors .products__color .products__color-circle_black').click(changeColor(14,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-s-83-cen-black', 'black'));

$('#' + 14 + ' .products__info .products__colors .products__color .products__color-circle_white').click(changeColor(14,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-s-83-cen-white', 'white'));

$('#' + 14 + ' .products__info .products__colors .products__color .products__color-circle_walnut').click(changeColor(14,'https://pult.ru/product/akustika-centralnogo-kanala-jamo-s-83-cen-walnut', 'walnut'));










