//1
/*
Необходимо создать функцию getWeekDay, которая принимает аргументом число(от 1 до 7) 
Необходимо найти строковое название дня недели и вывести его в консоль.
Для вывода результата из функции используем console.log("ваш результат");
Пример вызова: getWeekDay(1); getWeekDay(7);
Пример вывода: Понедельник; Воскресенье
*/
/*let dayNum = day ;
function getWeekDay(dayNum) {
    if (day == 1) {
console.log('Понедельник');
} else if (day == 2) {
console.log('Вторнк');
} else if (day == 3) {
console.log('Среда');
} else if (day == 4) {
console.log('Четверг');
} else if (day == 5) {
console.log('Пятница');
} else if (day == 6) {
console.log('Суббота');
} else if (day == 7) {
console.log('Воскресенье');
}
}
getWeekDay(7);*/

//Этот вариант работает, но мне кажется что не совсем отвечает условиям задачи.

let day = '';
    function getWeekDay(day) {
        switch (day) {
        case '1':
            console.log('Понедельник');
            break;
        case '2':
            console.log('Вторник');
            break;
        case '3':
            console.log('Среда');
            break;
        case '4':
            console.log('Четверг');
            break;
        case '5':
            console.log('Пятница');
            break;
        case '6':
            console.log('Суббота');
            break;
        case '7':
            console.log('Воскресенье');
            break;
    }
}
getWeekDay('1');

//2
/*
Необходимо создать функцию getDistance, которая принимает два объекта в качестве аргументов, каждый объект содержит в себе 2 поля x и y (пример getDistance({x:5,y:-3},{x:6,y:4})), 
Необходимо найти расстояние между двумя точками(координаты точек это и есть то что мы передаем в параметрах) в двухмерном декартовом пространстве, и вывести его в консоль.
Для вывода результата из функции используем console.log("ваш результат");
Пример вызова: getDistance({x:5,y:-3},{x:6,y:4});
Пример вывода: 7.0710678118654755
*/

let a = {
    x1: 0,
    y1: 0,
};
let b = {
    x2: 0,
    y2: 0,
};
function getDistance(a, b) {
    let p1 = a.x1 - b.x2;
    let p2 = a.y1 - b.y2;
    let distance = Math.sqrt(Math.pow((a.x1 - b.x2) * 2 +  (a.y1 - b.y2)* 2));
    console.log(distance);
}
getDistance({ x: 5, y: -3 }, { x: 6, y: 4 });

//3
/*
Необходимо создать функцию numbersToWords, которая принимает аргументом число(от 0 до 999) 
Необходимо получить строку с прописью числа(цифры станут словами) и вывести его в консоль.
Для вывода результата из функции используем console.log("ваш результат");
Пример вызова: numberToWords(25); numberToWords(243);
Пример вывода: Двадцать пять; Триста сорок три
*/

function ChisloPropis(n) {
    let = {
        A1 : ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
        A2 : ['десять','одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
        A3: ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
        A4: ['сто', 'двести', 'триста', 'четыриста', 'пятсот', 'шесот', 'семсот', 'восемсот', 'девятсот',]
    }
    let str = number.toString(), out = '';
    if (str.length == 1) return [number - 1];
    else if (str.length === 2) {
        if (str[0] == 1) out = A2[parseInt(str[1]) - 1];
        else out = (A3[parseInt(str[0]) - 1]);
    }
    else if (str.leght == 3) {
        out = (A1[parsetInt(str[0]) - 1]);
    }
    ;
        let arr = out.split('');
        arr[0] = arr[0].toUpperCase();
        out = arr.join('');
        return out;
    }
console.log(ChisloPropis(5));

//4
/*
Необходимо создать функцию wordsToNumbers, которая принимает аргументом строку с числом прописью(wordsToNumbers(‘Двадцать пять”)) от 0 до 999. 
Необходимо получить число из строковых значений(слова станут цифрами) и вывести его в консоль.
Для вывода результата из функции используем console.log("ваш результат");
Пример вызова: wordsToNumbers(‘Двадцать пять”); wordsToNumbers(‘Триста сорок три”);
Пример вывода: 25; 343
*/

function wordsToNumbers(numberInWords) {
    let wordsToNumbersMap =
    {
        a1: [1, 2, 3, 4, 5, 6, 7, 8, 9,],
        a2: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19,],
        a3: [20, 30, 40, 50, 60, 70, 80,],
        a4: [100, 200, 300, 400, 500, 600, 700, 800, 900,],
        
    }
    let number = 0;
    for (i = 0; i < words.length; i++) {
        let provisionalNumber = wordsToNumbersMap.find(entry => entry[0] == words[i]);
        if (number > 0) {
            console.log(number);

        }
    }
// Не знаю((
}







