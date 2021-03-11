'use strict';
// Global variables
let caseValues = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let gameScreen = document.getElementById('game-screen');
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
  console.log(caseValues);
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
