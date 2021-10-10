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
let outputLuft = document.querySelector('#luft');


inputREl.oninput = function () {
    if (inputREl.value === '') {
        outputREl.textContent = 0
    } else if (Number(inputLEl.value) > Number(inputREl.value)) {
        outputREl.textContent = inputREl.value;
        outputLuft.textContent=Math.abs(Number.parseFloat(outputREl.textContent)-Number.parseFloat(outputLEl.textContent)) ;
    } else if (Number(inputLEl.value) < Number(inputREl.value)) {
        outputREl.textContent = inputREl.value;
        
        outputLuft.textContent=Math.abs(Number.parseFloat(outputLEl.textContent)-Number.parseFloat(outputREl.textContent)) ; 
    } else {
        outputREl.textContent = inputREl.value;
        outputLuft.textContent =Math.abs(Number.parseFloat(outputLEl.textContent) - Number.parseFloat(outputREl.textContent)) ;
    }
    //{
       // outputREl.textContent = inputREl.value;
      //  if (Number(inputLEl.value) > Number(inputREl.value)) {
      //       outputLuft.textContent = Number(outputLEl.textContent)-Number(outputREl.textContent);
       // } }
}
// для вертикальной координты
let inputVEl = document.querySelector('#Vertikal');
let outputVEl = document.querySelector('#outputV');

inputVEl.oninput = function () {
    if (inputVEl.value === '') {
        outputVEl.textContent = 0
    } else { outputVEl.textContent = inputVEl.value; }
}
//выступание - западание
let inputLLedgeEl = document.querySelector('#LLedge');
let outputLLedgeEl = document.querySelector('#outputLLedge');
inputLLedgeEl.oninput = function () {
    outputLLedgeEl.textContent = inputLLedgeEl.value;
}
//////////
let inputRLedgeEl = document.querySelector('#RLedge');
let outputRLedgeEl = document.querySelector('#outputRLedge');
inputRLedgeEl.oninput = function () {
    outputRLedgeEl.textContent = inputRLedgeEl.value;
}
//////////////проверка выступани западания
//if (Number(outputRLedgeEl.textContent) === Number(outputLLedgeEl.textContent)) {}


///////////////////////////////////////////////////////////

//делаем перемещение для изменения значений координаt

let inputLeftUpEl = document.querySelector('#up-left');
let inputRightUpEl = document.querySelector('#up-right');  ////////
let inputLeftDownEl = document.querySelector('#down-left');
let inputRightDownEl = document.querySelector('#down-right');


inputLeftUpEl.oninput = function () {
    if (inputLeftUpEl.value === "") {
        outputLEl.textContent= Number.parseFloat(inputLEl.value) + 0
    } else {
        outputLEl.textContent = Number.parseFloat(inputLEl.value) + Number.parseFloat(inputLeftUpEl.value) / 2
        outputVEl.textContent = Number.parseFloat(inputVEl.value) + Number(inputLeftUpEl.value) / 2
        outputLLedgeEl.textContent = Number.parseFloat(inputLLedgeEl.value)+ Number.parseFloat(inputLeftUpEl.value)
    }
}

inputRightUpEl.oninput = function () {
    if (inputRightUpEl.value === "") {
        outputREl.textContent= Number.parseFloat(inputREl.value)+0
    } else if (inputRightUpEl.value === inputLeftUpEl.value) {
        outputLEl.textContent = Number.parseFloat(inputLEl.value)
        outputREl.textContent= Number.parseFloat(inputREl.value)
        outputVEl.textContent = Number.parseFloat(outputVEl.textContent) - Number.parseFloat(inputRightUpEl.value) / 2 + Number(inputRightUpEl.value)
        outputRLedgeEl.textContent = Number.parseFloat(inputRLedgeEl.value)+Number.parseFloat(inputRightUpEl.value)
    }
    else {
        outputREl.textContent = Number.parseFloat(inputREl.value) + Number.parseFloat(inputRightUpEl.value) / 2
        outputVEl.textContent = Number.parseFloat(outputVEl.textContent) + Number.parseFloat(inputRightUpEl.value) / 2
        outputRLedgeEl.textContent = Number.parseFloat(inputRLedgeEl.value)+Number.parseFloat(inputRightUpEl.value)
    }
}

inputLeftDownEl.oninput = function () {
    if (inputLeftDownEl === "") {
        outputLEl.textContent= Number.parseFloat(inputLEl.value) + 0
    } else {
       outputLEl.textContent = Number.parseFloat(outputLEl.textContent) + Number.parseFloat(inputLeftDownEl.value)
    }
}

inputRightDownEl.oninput = function () {
    if (inputRightDownEl === "") {
        outputREl.textContent= Number.parseFloat(inputREl.value) + 0
    } else {
        outputREl.textContent= Number.parseFloat(outputREl.textContent)+ Number.parseFloat(inputRightDownEl.value)
    }
}