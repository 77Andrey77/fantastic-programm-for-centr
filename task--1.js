// для левой горизонтальной координты
let inputLEl = document.querySelector('#G-left');
let outputLEl = document.querySelector('#outputL');

inputLEl.oninput = function () {
    if (inputLEl.value === '') {
        outputLEl.textContent = 0
    } else { outputLEl.textContent = inputLEl.value; }
}

// для правой горизонтальной координты

let inputREl = document.querySelector('#G-right');
let outputREl = document.querySelector('#outputR');

inputREl.oninput = function () {
    if (inputREl.value === '') {
        outputREl.textContent = 0
    } else { outputREl.textContent = inputREl.value; }
}
// для вертикальной координты
let inputVEl = document.querySelector('#Vertikal');
let outputVEl = document.querySelector('#outputV');

inputVEl.oninput = function () {
    if (inputVEl.value === '') {
        outputVEl.textContent = 0
    } else { outputVEl.textContent = inputVEl.value; }
}
///////////////////////////////////////////////////////////

//делаем перемещение для изменения значений координаt

let inputLeftUpEl = document.querySelector('#up-left');
let inputRightUpEl = document.querySelector('#up-right');
let inputLeftDownEl = document.querySelector('#down-left');
let inputRightDownEl = document.querySelector('#down-right');


inputLeftUpEl.oninput = function () {
    if (inputLeftUpEl.value === "") {
        outputLEl.textContent= Number(inputLEl.value) + 0
    } else {
        outputLEl.textContent = Number(inputLEl.value) + Number(inputLeftUpEl.value) / 2
        outputVEl.textContent= Number(inputVEl.value) + Number(inputLeftUpEl.value) / 2
    }
}

inputRightUpEl.oninput = function () {
    if (inputRightUpEl.value === "") {
        outputREl.textContent= Number(inputREl.value)+0
    } else if (inputRightUpEl.value === inputLeftUpEl.value) {
        outputLEl.textContent = Number(inputLEl.value)
        outputREl.textContent= Number(inputREl.value)
        outputVEl.textContent = Number(outputVEl.textContent) - Number(inputRightUpEl.value)/2 +Number(inputRightUpEl.value)
    }
    else {
        outputREl.textContent = Number(inputREl.value) + Number(inputRightUpEl.value) / 2
        outputVEl.textContent= Number(outputVEl.textContent)+ Number(inputRightUpEl.value) / 2
    }
}

inputLeftDownEl.oninput = function () {
    if (inputLeftDownEl === "") {
        outputLEl.textContent= Number(inputLEl.value) + 0
    } else {
       outputLEl.textContent = Number(outputLEl.textContent) + Number(inputLeftDownEl.value)
    }
}

inputRightDownEl.oninput = function () {
    if (inputRightDownEl === "") {
        outputREl.textContent= Number(inputREl.value) + 0
    } else {
        outputREl.textContent= Number(outputREl.textContent)+ Number(inputRightDownEl.value)
    }
}