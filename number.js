let val = -115;
let a1 = '';
let a2 = '';
let a4 = '';
let a = Math.abs(val)
if (val<0){
    a4 = 'минус';
}
// единицы
if (!(a > 10 && a < 20) && !(a % 100 > 10 && a % 100 < 20) && a % 10 == 1){
    a1 = 'один';
} else if (!(a > 10 && a < 20) && !(a % 100 > 10 && a % 100 < 20) && a % 10 == 2){
    a1 = 'два';
} else if (!(a > 10 && a < 20) && !(a % 100 > 10 && a % 100 < 20) && a % 10 == 3){
    a1 = 'три';
} else if (!(a > 10 && a < 20) && !(a % 100 > 10 && a % 100 < 20) && a % 10 == 4){
    a1 = 'четыре';
} else if (!(a > 10 && a < 20) && !(a % 100 > 10 && a % 100 < 20) && a % 10 == 5){
    a1 = 'пять';
} else if (!(a > 10 && a < 20) && !(a % 100 > 10 && a % 100 < 20) && a % 10 == 6){
    a1 = 'шесть';
} else if (!(a > 10 && a < 20) && !(a % 100 > 10 && a % 100 < 20) && a % 10 == 7){
    a1 = 'семь';
} else if (!(a > 10 && a < 20) && !(a % 100 > 10 && a % 100 < 20) && a % 10 == 8){
    a1 = 'восемь';
} else if (!(a > 10 && a < 20) && !(a % 100 > 10 && a % 100 < 20) && a % 10 == 9){
    a1 = 'девять';
}
// десятки
if (Math.trunc(a % 100 / 10) == 2){
    a2 = 'двадцать';
} else if (Math.trunc(a % 100 / 10) == 3){
    a2 = 'тридцать';
} else if (Math.trunc(a % 100 / 10) == 4){
    a2 = 'сорок';
} else if (Math.trunc(a % 100 / 10) == 5){
    a2 = 'пятьдесят';
} else if (Math.trunc(a % 100 / 10) == 6){
    a2 = 'шестьдесят';
} else if (Math.trunc(a % 100 / 10) == 7){
    a2 = 'семьдесят';
} else if (Math.trunc(a % 100 / 10) == 8){
    a2 = 'восемьдесят';
} else if (Math.trunc(a % 100 / 10) == 9){
    a2 = 'девяносто';
} else if ((a % 100) == 10){
    a2 = 'десять';
} else if ((a % 100) == 11){
    a2 = 'одиннадцать';
} else if ((a % 100) == 12){
    a2 = 'двенадцать';
} else if ((a % 100) == 13){
    a2 = 'тринадцать';
} else if ((a % 100) == 14){
    a2 = 'четырнадцать';
} else if ((a % 100) == 15){
    a2 = 'пятнадцать';
} else if ((a % 100) == 16){
    a2 = 'шестьнадцать';
} else if ((a % 100) == 17){
    a2 = 'семьнадцать';
} else if ((a % 100) == 18){
    a2 = 'восемьнадцать';
} else if ((a % 100) == 19){
    a2 = 'девятьнадцать';
}
// сотни
if (Math.trunc(a / 10) == 1){
    a3 = 'сто';
} else if (Math.trunc(a / 10) == 2){
    a3 = 'двести';
} else if (Math.trunc(a / 10) == 3){
    a3 = 'триста';
} else if (Math.trunc(a / 10) == 4){
    a3 = 'четыреста';
} else if (Math.trunc(a / 10) == 5){
    a3 = 'пятьсот';
} else if (Math.trunc(a / 10) == 6){
    a3 = 'шестьсот';
} else if (Math.trunc(a / 10) == 7){
    a3 = 'семьсот';
} else if (Math.trunc(a / 10) == 8){
    a3 = 'восемьсот';
} else if (Math.trunc(a / 10) == 9){
    a3 = 'девятьсот';
} 
// итого
a = `$(a4) $(a3) $(a2) $(a1)`;
