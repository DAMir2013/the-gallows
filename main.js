function receiveWord() {
    const  hiddenWord = prompt("Загадайте слово");
    const spliter = hiddenWord.split('');
    return spliter;
}

function receiveAndFillDiscription() {
    const descriptionHiddenWord = prompt("Опишите загаданное слово, чтобы его можно было угадать");
    const description = document.querySelector('#description');
    description.textContent = `${descriptionHiddenWord}`;
}

function createCanvas() {
    const canvasFrame = document.createElement('canvas');
    canvasFrame.setAttribute('id', 'canvasImg');
    canvasFrame.width = '800';
    canvasFrame.height = '300';
    document.querySelector('#image').appendChild(canvasFrame);
}

function makeGallowsFrame() {
    let canvas = document.getElementById('canvasImg');
    const ctx = canvas.getContext('2d');       
    ctx.beginPath();
    ctx.lineWidth = '5';
    ctx.strokeStyle = 'blue';
    ctx.moveTo(250, 2);
    ctx.lineTo(250, 250);
    ctx.stroke();
    ctx.moveTo(250, 2);
    ctx.lineTo(400, 2);
    ctx.stroke();
    ctx.moveTo(400, 2);
    ctx.lineTo(400, 50);
    ctx.stroke();
}

function createLetterCell(index) {
    const cell = document.createElement('div');
    cell.setAttribute('id', `cell${index}`);
    cell.classList.add('letter');
    document.getElementById('word').appendChild(cell);
}

function fillWord(spliter) {
    for(let i = 0; i < spliter.length; i++) {
        createLetterCell(i);
    }
}

function createButton() {
    const button = document.createElement('button');
    button.innerHTML = 'Start Game';
    button.classList.add('buttonClass');
    document.getElementById('newButton').appendChild(button);
    let start = button.addEventListener("click", startGameLoop, { once: true });
}

function startFilling() {
    let spliter = receiveWord();
    receiveAndFillDiscription();
    createCanvas();
    makeGallowsFrame();
    fillWord(spliter);
    createButton(spliter);
return spliter;
}

let arrReceiveWord = startFilling();

function drowHead() {
    const canvas = document.getElementById('canvasImg');
    const ctx = canvas.getContext('2d');
    const pi = Math.PI;
    ctx.beginPath();
    ctx.lineWidth = '5';
    ctx.strokeStyle = 'yellow';
    ctx.arc(400, 75, 25, 2*pi, false);
    ctx.stroke();
}

function drowBody() {
    let canvas = document.getElementById('canvasImg');
    const ctx = canvas.getContext('2d');       
    ctx.beginPath();
    ctx.lineWidth = '5';
    ctx.strokeStyle = 'blue';
    ctx.moveTo(400, 100);
    ctx.lineTo(400, 175);
    ctx.stroke();
}

function drowArms() {
    let canvas = document.getElementById('canvasImg');
    const ctx = canvas.getContext('2d');       
    ctx.beginPath();
    ctx.lineWidth = '5';
    ctx.strokeStyle = 'blue';
    ctx.moveTo(400, 125);
    ctx.lineTo(380, 150);
    ctx.stroke();
    ctx.moveTo(400, 125);
    ctx.lineTo(420, 150);
    ctx.stroke();
}

function drowLegs() {
    let canvas = document.getElementById('canvasImg');
    const ctx = canvas.getContext('2d');       
    ctx.beginPath();
    ctx.lineWidth = '5';
    ctx.strokeStyle = 'blue';
    ctx.moveTo(400, 175);
    ctx.lineTo(380, 225);
    ctx.stroke();
    ctx.moveTo(400, 175);
    ctx.lineTo(420, 225);
    ctx.stroke();
}

function  startGameLoop() {
    let counter = 0;
    function myLoop() {        
        setTimeout(function() {  
            let winner = checkWin();  
            if(winner == arrReceiveWord.length) {
                alert("Вы выиграли");
                return;
            } 
            while(counter < 5){ 
                if(counter == 1) {
                    drowHead();
                }
                if(counter == 2) {
                    drowBody();
                }
                if(counter == 3) {
                    drowArms();
                }
                if(counter == 4) {
                    drowLegs();
                    alert('Вы проиграли');
                    return; 
                }
                
               let emptyCoincidences = checkCoincidences();

               if(emptyCoincidences.length == 0) {
                counter++;
               }
               if(emptyCoincidences.length > 0) {
                fillCellLetters(emptyCoincidences);
               }
                myLoop();  
                break;   
                      
          }                       
        }, 1500);
      }
      myLoop();
}

function checkCoincidences(){
    counterCoincidences = 0;
    let inputLetter = prompt('Введите букву которая, как Вам кажется, есть в загаданном слове');
    let arrayCoincidences = [];
    for(let i = 0; i < arrReceiveWord.length; i++) {
        if(arrReceiveWord[i].toLowerCase() === inputLetter.toLowerCase()) {
            arrayCoincidences.push(i); 
        }
    }
    return arrayCoincidences;
}

function fillCellLetters(arr) {
    for(let i = 0; i < arr.length; i++) {
        let cellPush = document.getElementById(`cell${arr[i]}`);
        cellPush.innerHTML = `${arrReceiveWord[arr[i]]}`;
        cellPush.classList.add('full');
    }
}

function checkWin() {
    let fullCell = document.getElementsByClassName('full');
    return fullCell.length;

}