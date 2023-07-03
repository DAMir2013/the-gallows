"use strict"

import {createCanvas, makeGallowsFrame, drowHead, drowBody, drowArms, drowLegs} from './modules/canvas.js';

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

function  startGameLoop() {
    let counter = 0;
    
      myLoop(counter);
}

function myLoop(count) {        
    setTimeout(function() {  
        let counter = count;
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
                setTimeout(function(){
                    alert('Вы проиграли');
                }, 500);
                
                return; 
            }
            setTimeout(function() {
                let emptyCoincidences = checkCoincidences();
                   if(emptyCoincidences.length == 0) {
                    counter++;
                   }
                   if(emptyCoincidences.length > 0) {
                    fillCellLetters(emptyCoincidences);
                   }
                    myLoop(counter);         
            }, 1000);
            break;            
      }                       
    }, 1500);
  }

function checkCoincidences(){  
    let counterCoincidences = 0;
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



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!