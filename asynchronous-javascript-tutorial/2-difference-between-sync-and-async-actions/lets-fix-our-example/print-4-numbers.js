function print1() {
    const number1 = 1;
    console.log(number1);
}


function print2() {
    function getNumber2() {
        return 2;
    }
    const number2 = getNumber2();
    console.log(number2);
}


function print3() {
    const fs = require('fs');
    const callback = function (err, number3) {
        console.log(number3);
        print4();
    };
    fs.readFile('./number3.txt', 'utf-8', callback);
}


function print4() {
    const number4 = 4;
    console.log(number4);
}

print1();
print2();
print3();
