
// считаем элипс

let inputA = document.querySelector('#a'); //ввод a
let inputB = document.querySelector('#b'); //ввод b
let inputC = document.querySelector('#c'); //ввод c

let outputElips = document.querySelector('#output-elips'); //вывод значения элипca

let arrowElipsEl = document.querySelector('.arrow-elips'); //поиск стрелки по классу

inputA.oninput = function () {
    if (inputA.value === '') {
        outputElips.textContent = 0;
    } else { outputElips.textContent = "Введите значение B";}
}

inputB.oninput = function () {
    if (inputB.value === '') {
        outputElips.textContent = 0;
    } else { outputElips.textContent = "Введите значение С"; }
}

inputC.oninput = function () {
    if (inputC.value === '') {
        outputElips.textContent = 0;
    } else {
        outputElips.textContent = ((Number(inputA.value) * 1000 + Number(inputC.value) * 1000) / 2 - Number(inputB.value) * 1000) / 1000;
         
        if (Number(outputElips.textContent) < 0) {
        arrowElipsEl.classList.add('arrow-rotate');
         } else {
                     arrowElipsEl.classList.remove('arrow-rotate');
}
}       
}

