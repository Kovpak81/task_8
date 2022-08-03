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
    // } else if (maxValue = 999) {
    //     maxValue == "один"
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
orderNumberField.innerText = orderNumber,
answerField.innerText = `Вы загадали число ${answerNumber }?`;
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
// делаю массив для случайного выбора предложения при нажатии кнопки больше
            let answerRandoms = [
                [`Возможно это число ${answerNumber }?`],
                [`Вы загадали число ${answerNumber }?`],
                [`Ха, это число ${answerNumber }?`],
                [`Наверное это число ${answerNumber }?`],
                [`Мне кажется это число ${answerNumber }?`]
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
     
        // function answerNumberString () {
        //     if (answerNumber <= 20) {
        //     switch (answerNumber){
        //         case '1': answerNumberText = "один";
        //         break;
        //     }
        //     return answerNumberText;
        //     }
        // }

        // answerNumberString ();

// делаю массив для случайного выбора предложения при нажатии кнопки меньше
            let answerRandoms = [
                [`Возможно это число ${answerNumber }?`],
                [`Вы загадали число ${answerNumber }?`],
                [`Ха, это число ${answerNumber }?`],
                [`Наверное это число ${answerNumber }?`],
                [`Мне кажется это число ${answerNumber }?`]
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

