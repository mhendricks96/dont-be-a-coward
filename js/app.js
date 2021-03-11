'use strict';
// Global variables
let caseValues = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let gameScreen = document.getElementById('game-screen');
let div = document.createElement('div');
let casesLeft = document.getElementById('cases-left');
let casesList = document.createElement('li');


let firstCase = document.getElementById('first-case');
let secondCase = document.getElementById('second-case');
let thirdCase = document.getElementById('third-case');
let fourthCase = document.getElementById('fourth-case');
let fifthCase = document.getElementById('fifth-case');
let sixthCase = document.getElementById('sixth-case');
let seventhCase = document.getElementById('seventh-case');
let eighthCase = document.getElementById('eighth-case');
let ninthCase = document.getElementById('ninth-case');
let tenthCase = document.getElementById('tenth-case');

function gameLoop() {
  let valuePicked = caseValues.splice(Math.floor(Math.random() * caseValues.length), 1);
  console.log(valuePicked);
  //console.log(caseValues);
  div.textContent = `$${valuePicked}!!`;
  gameScreen.appendChild(div);

  casesList.textContent = caseValues;
  casesLeft.appendChild(casesList);
}



function pickFirstCase() {
  console.log('first case picked');
  gameLoop();
  firstCase.removeEventListener('click', pickFirstCase);
}

function pickSecondCase() {
  console.log('second case picked');
  gameLoop();
  secondCase.removeEventListener('click', pickSecondCase);
}

function pickThirdCase() {
  console.log('third case picked');
  gameLoop();
  thirdCase.removeEventListener('click', pickThirdCase);
}

function pickFourthCase() {
  console.log('fourth case picked');
  gameLoop();
  fourthCase.removeEventListener('click', pickFourthCase);
}

function pickFifthCase() {
  console.log('fifth case picked');
  gameLoop();
  fifthCase.removeEventListener('click', pickFifthCase);
}

function pickSixthCase() {
  console.log('sixth case picked');
  gameLoop();
  sixthCase.removeEventListener('click', pickSixthCase);
}

function pickSeventhCase() {
  console.log('seventh case picked');
  gameLoop();
  seventhCase.removeEventListener('click', pickSeventhCase);
}

function pickEighthCase() {
  console.log('fourth case picked');
  gameLoop();
  eighthCase.removeEventListener('click', pickEighthCase);
}

function pickNinthCase() {
  console.log('ninth case picked');
  gameLoop();
  ninthCase.removeEventListener('click', pickNinthCase);
}

function pickTenthCase() {
  console.log('fourth case picked');
  gameLoop();
  tenthCase.removeEventListener('click', pickTenthCase);
}



firstCase.addEventListener('click', pickFirstCase);
secondCase.addEventListener('click', pickSecondCase);
thirdCase.addEventListener('click', pickThirdCase);
fourthCase.addEventListener('click', pickFourthCase);
fifthCase.addEventListener('click', pickFifthCase);
sixthCase.addEventListener('click', pickSixthCase);
seventhCase.addEventListener('click', pickSeventhCase);
eighthCase.addEventListener('click', pickEighthCase);
ninthCase.addEventListener('click', pickNinthCase);
tenthCase.addEventListener('click', pickTenthCase);
