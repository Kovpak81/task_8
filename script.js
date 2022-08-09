let minValue;

function mini(val) {
    minValue = parseInt(val);
    if (minValue < -1000) {
        minValue = -999;
    };
    document.querySelector('#minNum').textContent = minValue;
// ниже фунцию не использую ввиду того, что в HTML для input решил использовать тип number
    // if (!Number.isNaN(minValue) == 'true') {
    // minValue = 0;
    // document.querySelector('#minNum').textContent = 0;
    // };
    return minValue;
}

let maxValue;

function maxi(val) {
    maxValue = parseInt(val);
    if (maxValue > 1000) {
        maxValue = 999;
    }
    document.querySelector('#maxNum').textContent = maxValue;
    return maxValue;
}

let answerNumber;
let answerNumberText;
let orderNumber = 1;
let gameRun;

// работа кнопки старт, решил добавить такую кнопку
function start() {
document.querySelector('#start').textContent = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
answerNumber  = Math.floor((minValue + maxValue) / 2),
orderNumberField.innerText = orderNumber;

let a1 = '';
let a2 = '';
let a3 = '';
let a4 = '';
let a = Math.abs(answerNumber);
if (answerNumber < 0){
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
if (Math.trunc(a / 100) == 1){
    a3 = 'сто';
} else if (Math.trunc(a / 100) == 2){
    a3 = 'двести';
} else if (Math.trunc(a / 100) == 3){
    a3 = 'триста';
} else if (Math.trunc(a / 100) == 4){
    a3 = 'четыреста';
} else if (Math.trunc(a / 100) == 5){
    a3 = 'пятьсот';
} else if (Math.trunc(a / 100) == 6){
    a3 = 'шестьсот';
} else if (Math.trunc(a / 100) == 7){
    a3 = 'семьсот';
} else if (Math.trunc(a / 100) == 8){
    a3 = 'восемьсот';
} else if (Math.trunc(a / 100) == 9){
    a3 = 'девятьсот';
} 
// итого
answerNumberText = `${a4} ${a3} ${a2} ${a1}`;

answerField.innerText = `Вы загадали число ${answerNumberText }?`;

return [
    answerNumber,
    gameRun = true
];
}

// работа кнопки ЗАНОВО
document.getElementById('btnRetry').addEventListener('click', function () {
    location.reload();
})

// кнопка БОЛЬШЕ
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            let phraseRandom = [
                [`Вы играете не честно`],
                [`Вы загадали не правильное число`],
                [`Я сдаюсь`],
                [`Вы нарушаете правила игры!`]
            ]
            let answerPhrase = phraseRandom[ Math.floor( Math.random()*phraseRandom.length)];
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            let a1 = '';
            let a2 = '';
            let a3 = '';
            let a4 = '';
            let a = Math.abs(answerNumber);
            if (answerNumber < 0){
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
            if (Math.trunc(a / 100) == 1){
                a3 = 'сто';
            } else if (Math.trunc(a / 100) == 2){
                a3 = 'двести';
            } else if (Math.trunc(a / 100) == 3){
                a3 = 'триста';
            } else if (Math.trunc(a / 100) == 4){
                a3 = 'четыреста';
            } else if (Math.trunc(a / 100) == 5){
                a3 = 'пятьсот';
            } else if (Math.trunc(a / 100) == 6){
                a3 = 'шестьсот';
            } else if (Math.trunc(a / 100) == 7){
                a3 = 'семьсот';
            } else if (Math.trunc(a / 100) == 8){
                a3 = 'восемьсот';
            } else if (Math.trunc(a / 100) == 9){
                a3 = 'девятьсот';
            } 
            // итого
            answerNumberText = `${a4} ${a3} ${a2} ${a1}`;
            
// делаю массив для случайного выбора предложения при нажатии кнопки больше
            let answerRandoms = [
                [`Возможно это число ${answerNumberText }?`],
                [`Вы загадали число ${answerNumberText }?`],
                [`Ха, это число ${answerNumberText }?`],
                [`Наверное это число ${answerNumberText }?`],
                [`Мне кажется это число ${answerNumberText }?`]
            ];
        let answerRandom = answerRandoms[ Math.floor( Math.random() * answerRandoms.length)];
        answerField.innerText = answerRandom;
        }
    }
})

// кнопка МЕНЬШЕ
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue === minValue){
            let phraseRandom = [
                [`Вы играете не честно`],
                [`Вы загадали не правильное число`],
                [`Я сдаюсь`],
                [`Вы нарушаете правила игры!`]
            ]
            let answerPhrase = phraseRandom[ Math.floor( Math.random()*phraseRandom.length)];
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber; 
             
            let a1 = '';
            let a2 = '';
            let a3 = '';
            let a4 = '';
            let a = Math.abs(answerNumber);
            if (answerNumber < 0){
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
            if (Math.trunc(a / 100) == 1){
                a3 = 'сто';
            } else if (Math.trunc(a / 100) == 2){
                a3 = 'двести';
            } else if (Math.trunc(a / 100) == 3){
                a3 = 'триста';
            } else if (Math.trunc(a / 100) == 4){
                a3 = 'четыреста';
            } else if (Math.trunc(a / 100) == 5){
                a3 = 'пятьсот';
            } else if (Math.trunc(a / 100) == 6){
                a3 = 'шестьсот';
            } else if (Math.trunc(a / 100) == 7){
                a3 = 'семьсот';
            } else if (Math.trunc(a / 100) == 8){
                a3 = 'восемьсот';
            } else if (Math.trunc(a / 100) == 9){
                a3 = 'девятьсот';
            } 
            // итого
            answerNumberText = `${a4} ${a3} ${a2} ${a1}`;
            
// делаю массив для случайного выбора предложения при нажатии кнопки меньше
            let answerRandoms = [
                [`Возможно это число ${answerNumberText }?`],
                [`Вы загадали число ${answerNumberText }?`],
                [`Ха, это число ${answerNumberText }?`],
                [`Наверное это число ${answerNumberText }?`],
                [`Мне кажется это число ${answerNumberText }?`]
            ];
            let answerRandom = answerRandoms[ Math.floor( Math.random() * answerRandoms.length)];

            answerField.innerText = answerRandom;
        }
    }
})

// кнопка ВЕРНО
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        // делаю массив для случайного выбора строки для ответа, после нажатия кнопки верно
        let answerFieldRandoms = [
            [`Я всегда угадываю`],
            [`Конечно я угадал!`],
            [`По другому и быть не могло`],
            [`Угадал, как всегда`],
            [`И снова в яблочко!`]
        ];
    let answerFieldRandom = answerFieldRandoms[ Math.floor( Math.random() * answerFieldRandoms.length)];

        answerField.innerText = answerFieldRandom;
        gameRun = false;
         } 
        //  в случае повторного нажатия на кнопку Верно, делаю вывод текста о повторной игре
        else {
            answerField.innerText = `Если хочешь снова играть, нажми <Заново>`
            gameRun = false;
        }
})

