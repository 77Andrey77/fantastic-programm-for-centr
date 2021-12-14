// для левой горизонтальной координты
let inputLEl = document.querySelector('#G-left');  //ввод левой координаты
let outputLEl = document.querySelector('#outputL');  //вывод левой координаты

inputLEl.oninput = function () {
    if (inputLEl.value === '') {
        outputLEl.textContent = 0
    } else { outputLEl.textContent = inputLEl.value; }
}

// для правой горизонтальной координты

let inputREl = document.querySelector('#G-right');   //ввод правой координаты
let outputREl = document.querySelector('#outputR');   //вывод правой координаты
let outputLuft = document.querySelector('#luft');     // вывод люфт 


inputREl.oninput = function () {
    if (inputREl.value === '') {
        outputREl.textContent = 0
    } else if (Number(inputLEl.value) > Number(inputREl.value)) {
        outputREl.textContent = inputREl.value;

        outputLuft.textContent=Math.abs((Number(outputREl.textContent)*1000-Number(outputLEl.textContent)*1000)/1000) ;
    } else if (Number(inputLEl.value) < Number(inputREl.value)) {
        outputREl.textContent = inputREl.value;
        
        outputLuft.textContent=Math.abs((Number(outputLEl.textContent)*1000-Number(outputREl.textContent)*1000)/1000) ; 
    } else {
        outputREl.textContent = inputREl.value;

        outputLuft.textContent =Math.abs((Number(outputLEl.textContent)*1000 - Number(outputREl.textContent)*1000)/1000) ;
    }
    //{
       // outputREl.textContent = inputREl.value;
      //  if (Number(inputLEl.value) > Number(inputREl.value)) {
      //       outputLuft.textContent = Number(outputLEl.textContent)-Number(outputREl.textContent);
       // } }
}
// для вертикальной координты
let inputVEl = document.querySelector('#Vertikal');   //ввод вертикальной координаты
let outputVEl = document.querySelector('#outputV');    //вывод вертикальной координаты

inputVEl.oninput = function () {
    if (inputVEl.value === '') {
        outputVEl.textContent = 0
    } else { outputVEl.textContent = inputVEl.value; }
}
//////////////////////выступание - западание//////////////////////
//левая координата
let leftLedge;
let rightLedge;
let inputLLedgeEl = document.querySelector('#LLedge');          //ввод левого выступания
let outputLLedgeEl = document.querySelector('#outputLLedge');     //вывод левого выст
//////
let outputLLedgeElClass = document.querySelector('.outputLLedge');
//////
inputLLedgeEl.oninput = function () {
    outputLLedgeEl.textContent = inputLLedgeEl.value;
    leftLedge = outputLLedgeEl.textContent;
console.log(leftLedge);
}
////////////правая координата
let inputRLedgeEl = document.querySelector('#RLedge');                //ввод правого выступ
let outputRLedgeEl = document.querySelector('#outputRLedge');         //вывод правого выст
//////
let outputRLedgeElClass = document.querySelector('.outputRLedge');
//////
inputRLedgeEl.oninput = function () {
    outputRLedgeEl.textContent = inputRLedgeEl.value;
    rightLedge = outputRLedgeEl.textContent;
// console.log(rightLedge);
    ////смена цвета  но добавить позже 
    // if (leftLedge === rightLedge) {
    //     outputLLedgeElClass.classList.add('output-ok');
    //     outputRLedgeElClass.classList.add('output-ok');
    // } else {
    //     outputLLedgeElClass.classList.remove('output-ok');
    //     outputRLedgeElClass.classList.remove('output-ok'); }
}
///////////////////////////////////////////////////////////

//делаем перемещение для изменения значений координаt

let inputLeftUpEl = document.querySelector('#up-left');
let inputRightUpEl = document.querySelector('#up-right');  ////////
let inputLeftDownEl = document.querySelector('#down-left');
let inputRightDownEl = document.querySelector('#down-right');


inputLeftUpEl.oninput = function () {
    if (inputLeftUpEl.value === "") {
        outputLEl.textContent= Number(inputLEl.value) + 0  
    } else {
        outputLEl.textContent = (Number(inputLEl.value)*1000 + Number(inputLeftUpEl.value) / 2*1000)/1000
        outputVEl.textContent = (Number(inputVEl.value)*1000 + Number(inputLeftUpEl.value) / 2*1000)/1000
        outputLLedgeEl.textContent = (Number(inputLLedgeEl.value)*1000+ Number(inputLeftUpEl.value)*1000)/1000
    }
}

inputRightUpEl.oninput = function () {
    if (inputRightUpEl.value === "") {
        outputREl.textContent= Number(inputREl.value)+0
    } else if (inputRightUpEl.value === inputLeftUpEl.value) {
        outputLEl.textContent = Number(inputLEl.value)
        outputREl.textContent= Number(inputREl.value)
        outputVEl.textContent = (Number(inputVEl.value)*1000 + Number(inputRightUpEl.value)*1000)/1000
        outputRLedgeEl.textContent = (Number(inputRLedgeEl.value)*1000 + Number(inputRightUpEl.value)*1000)/1000
    }
    else if(inputRightUpEl.value > inputLeftUpEl.value ){
        outputLEl.textContent = Number(inputLEl.value)
        outputREl.textContent= (Number(inputREl.value)*1000 +((inputRightUpEl.value*1000 - inputLeftUpEl.value*1000)/2))/1000
        outputVEl.textContent = (Number(inputVEl.value)*1000+ (Number(inputLeftUpEl.value)/2)*1000 + (Number(inputRightUpEl.value)/2)*1000)/1000
        outputRLedgeEl.textContent = (Number(inputRLedgeEl.value)*1000+ Number(inputRightUpEl.value)*1000)/1000
    
    } else {
        outputLEl.textContent = (Number(inputLEl.value)*1000 +(inputLeftUpEl.value*1000 - inputRightUpEl.value*1000)/2)/1000
        outputREl.textContent= Number(inputREl.value)
        outputVEl.textContent = (Number(inputVEl.value)*1000+ (Number(inputLeftUpEl.value)/2)*1000 + (Number(inputRightUpEl.value)/2)*1000)/1000
        outputRLedgeEl.textContent = (Number(inputRLedgeEl.value)*1000+ Number(inputRightUpEl.value)*1000)/1000
    }
}
////////////// перемещения для изменения горизонтальных координат и люфта//////////////////

let outputLElFin = document.querySelector('#outputL-fin');  //вывод левой координаты
let outputRElFin = document.querySelector('#outputR-fin');   //вывод правой координаты


var selectProjectType = document.querySelector('#project-type');
var infoText1 = document.querySelector('#info-text1');
var infoText2 = document.querySelector('#info-text2');


selectProjectType.addEventListener('change', setProjectType);

function setProjectType() {
    var choice = selectProjectType.value;

    if (choice === 'in-the-product') {
         // перемещение влево и право если шпонка в обойме
inputLeftDownEl.oninput = function () {
    if (inputLeftDownEl === "") {
        outputLEl.textContent= Number(inputLEl.value) + 0
    } else {
        outputLEl.classList.add('deactiv');
        outputLElFin.classList.remove('deactiv');

        outputLElFin.textContent = (Number(outputLEl.textContent)*1000 - Number(inputLeftDownEl.value)* 1000)/1000
        
        outputLuft.textContent= (Math.abs(Number(outputLElFin.textContent)*1000 - Number(outputREl.textContent)*1000))/1000
    }
}
        
        inputRightDownEl.oninput = function () {
    if (inputRightDownEl === "") {
        outputREl.textContent= Number(inputREl.value) + 0
    } else {
        outputREl.classList.add('deactiv');
        outputRElFin.classList.remove('deactiv');

        outputRElFin.textContent = (Number(outputREl.textContent) * 1000 + Number(inputRightDownEl.value) * 1000) / 1000
        
        outputLuft.textContent= (Math.abs(Number(outputLElFin.textContent)*1000- Number(outputRElFin.textContent)*1000))/1000

    }
}
        infoText1.textContent = 'Сдвинуть влево = "+" справа ; "-" слева';
        infoText2.textContent = 'Сдвинуть вправо = "+" слева ; "-" справа';
    } else {
        
         // перемещение влево и право если шпонка в корпусе
inputLeftDownEl.oninput = function () {
    if (inputLeftDownEl === "") {
        outputLEl.textContent= Number(inputLEl.value) + 0
    } else {
        outputLEl.classList.add('deactiv');
        outputLElFin.classList.remove('deactiv');

        outputLElFin.textContent = (Number(outputLEl.textContent)*1000 + Number(inputLeftDownEl.value)* 1000)/1000
        
        outputLuft.textContent= (Math.abs(Number(outputLElFin.textContent)*1000 - Number(outputREl.textContent)*1000))/1000
    }
}
        
        inputRightDownEl.oninput = function () {
    if (inputRightDownEl === "") {
        outputREl.textContent= Number(inputREl.value) + 0
    } else {
        outputREl.classList.add('deactiv');
        outputRElFin.classList.remove('deactiv');

        outputRElFin.textContent = (Number(outputREl.textContent) * 1000 - Number(inputRightDownEl.value) * 1000) / 1000
        
        outputLuft.textContent= (Math.abs(Number(outputLElFin.textContent)*1000- Number(outputRElFin.textContent)*1000))/1000

    }
}

         infoText1.textContent = 'Сдвинуть влево = "-" справа ; "+" слева';
        infoText2.textContent = 'Сдвинуть вправо = "-" слева ; "+" справа';
    }
        
    } 













   

// inputLeftDownEl.oninput = function () {
//     if (inputLeftDownEl === "") {
//         outputLEl.textContent= Number(inputLEl.value) + 0
//     } else {
//         outputLEl.classList.add('deactiv');
//         outputLElFin.classList.remove('deactiv');

//         outputLElFin.textContent = (Number(outputLEl.textContent)*1000 - Number(inputLeftDownEl.value)* 1000)/1000
        
//         outputLuft.textContent= (Math.abs(Number(outputLElFin.textContent)*1000 - Number(outputREl.textContent)*1000))/1000
//     }
// }

// inputRightDownEl.oninput = function () {
//     if (inputRightDownEl === "") {
//         outputREl.textContent= Number(inputREl.value) + 0
//     } else {
//         outputREl.classList.add('deactiv');
//         outputRElFin.classList.remove('deactiv');

//         outputRElFin.textContent = (Number(outputREl.textContent) * 1000 + Number(inputRightDownEl.value) * 1000) / 1000
        
//         outputLuft.textContent= (Math.abs(Number(outputLElFin.textContent)*1000- Number(outputRElFin.textContent)*1000))/1000

//     }
// }

