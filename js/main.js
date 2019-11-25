document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("btn0").addEventListener("click", function() {
        let binWindow = document.getElementById("bin-string-window");
        binWindow.value += "0";
    });
    document.getElementById("btn1").addEventListener("click", function() {
        let binWindow = document.getElementById("bin-string-window");
        binWindow.value += "1";
    });
    document.getElementById("btnClr").addEventListener("click", function() {
        let binWindow = document.getElementById("bin-string-window");
        binWindow.value = "";
    });

    let toDecim = (numB) => {
        let base = 2;
        let pow = 1;
        let numD = 0;
        for (let j = 0; j < numB.length; ++j) {
            numD += pow * (parseInt(numB[numB.length - 1 - j], 10));
            pow *= base;
        }
        return numD;
    };
    let toBinary = (numD) => {
        let bi = 0;
        let binStr = '';
        while (numD > 0) {
            bi = numD % 2
            numD = Math.floor(numD / 2)
            binStr += bi
        }
        return reverse(binStr);
    };
    let reverse = (stringTobeReversed) => {
        let revStr = stringTobeReversed.split('').reverse().join('')
        return revStr
    };

    document.getElementById("btnEql").addEventListener("click", function() {
        let binWindow = document.getElementById("bin-string-window");
        if (binWindow.value.includes("+")) {
            let sum = (expression) => {
                let resStr = expression.split("+");
                let result = []
                for (let i = 0; i < resStr.length; ++i) {
                    decimal = toDecim(resStr[i])
                    result.push(decimal);
                }
                let num = 0
                for (let i = 0; i < result.length; ++i) {
                    num += result[i]
                }
                return toBinary(num);
            };

            binWindow.value = sum(binWindow.value);
        }
        if (binWindow.value.includes("-")) {
            let subs = (expression) => {
                let resStr = expression.split("-");
                let result = []
                for (let i = 0; i < resStr.length; ++i) {
                    decimal = toDecim(resStr[i])
                    result.push(decimal);
                }
                let num = result[0] - result[1];

                return toBinary(num);
            };

            binWindow.value = subs(binWindow.value)
        }
        if (binWindow.value.includes("*")) {
            let mult = (expression) => {
                let resStr = expression.split("*");
                let result = []
                for (let i = 0; i < resStr.length; ++i) {
                    decimal = toDecim(resStr[i])
                    result.push(decimal);
                }
                let num = result[0] * result[1]

                return toBinary(num)
            };

            binWindow.value = mult(binWindow.value)
        }
        if (binWindow.value.includes("/")) {
            let divide = (expression) => {
                let resStr = expression.split("/");
                let result = []
                for (let i = 0; i < resStr.length; ++i) {
                    decimal = toDecim(resStr[i])
                    result.push(decimal);
                }
                let num = Math.floor(result[0] / result[1])

                return toBinary(num)
            };

            binWindow.value = divide(binWindow.value)
        }
    });

    document.getElementById("btnSum").addEventListener("click", function() {
        let binWindow = document.getElementById("bin-string-window");
        binWindow.value += "+";
    });

    document.getElementById("btnSub").addEventListener("click", function() {
        let binWindow = document.getElementById("bin-string-window");
        binWindow.value += "-";
    });

    document.getElementById("btnMul").addEventListener("click", function() {
        let binWindow = document.getElementById("bin-string-window");
        binWindow.value += "*";
    });

    document.getElementById("btnDiv").addEventListener("click", function() {
        let binWindow = document.getElementById("bin-string-window");
        binWindow.value += "/";
    });
});