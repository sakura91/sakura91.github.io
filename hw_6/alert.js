// alert ('I am - JavaScript!')
/*var admin, name;
 name = 'Василий';
 admin = name;
 alert( admin );
 */
// var planetName = 'Земля';
// var userName = 'Петя';



// Среднее арефметическое из трех чисел
function average (a, b, c) {
         var  d = (a + b + c) / 3;
         return d;
        }

var a = average(2, 3, 5);
alert(a);

//Функция которая принимает два аргумента (имя и фамилию) и возвращает их соединенными.
function fullname (name, surname) {
    return name + ' ' + surname;
}

fullname('John', 'Ive');

//Функция которая возвращает наибольшее из трех значений
//Вариант 1.
function max(a, b, c) {
    return Math.max(a, b, c);
}

max(2, 3, 4) // 4
max(4, 2, 3) // 4
max(-1, 5, 2) // 5

//Вариант 2.
function max(a, b, c) {
    var max;
    if (a > b){
        max = a;
    } else {
        max = b;
    }
    if (max < c){
        max =c;
    }

    return max;
}

max(2, 3, 4) // 4
max(4, 2, 3) // 4
max(-1, 5, 2) // 5

// Функция которая выводит разницу между чисел по модулю (всегда положительное число)
//Вариант 1.
function diff(a, b) {
    console.log( Math.abs(a - b));
}

diff(1, 3); // 2
diff(2, 9); // 7
diff(8, 3); // 5

//Вариант 2.
function diff(a, b) {
    var  diff = (a - b);
    if (diff < 0) {
        diff = -diff;
    }
    console.log (diff);
}

diff(1, 3); // 2
diff(2, 9); // 7
diff(8, 13); // 5

//Вычисление площади круга.
function circleArea ( r ) {
    return Math.PI * r * r;
}
var radius = 2;
alert(
    ' Площадь круга с радиусом '
    + radius
    + ' см: '
    + circleArea(2)
    + ' см квадратных '
)

//Функции сравнененияю
function isSick (faceColor) {

    if (faceColor == "normal") {
        console.log("You are OK");
        return false;
    }
    if (faceColor == "green") {
        console.log("I'm calling 03");
        return true;
    }
    if (faceColor == "white") {
        console.log("Rest in peace");
        return true;
    }
}

isSick('normal');//returns FALSE, show massage, and console.log("You are OK")
isSick('green');//returns True, show massage, and console.log("I'm calling 03")
isSick('white');//returns True, show massage, and console.log("Rest in peace")

//Определение четные и нечетные числа.
function number (nat){
    if(nat % 2) {
        console.log('нечетные');
    } else {
        console.log ('четные');
    }
    return;
}

number (12)//Even;
number (7)//Odd;
number (354)//Even;

//Объекты (передвижение по оси координат)
function createPlayer () {
    return {
        show: function () {
            console.log(
                this.positionX,
                this.positionY
            )
        },
        positionX: 0,
        positionY: 0,
        up: function (){
            this.positionY++;
        },
        left: function (){
            this.positionX--;
        },
        down: function (){
            this.positionY--;
        },
        right: function () {
            this.positionX++;
        },
    };
}
var player = createPlayer();
