// generate a random number from 1 to 6
const firstRandomNum = Math.floor(Math.random() * 6) + 1;

//images/dice1.png upto images/dice6.png

const firstDiceImage = 'img/dice' + firstRandomNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);

// generate a random number from 1 to 6
const secondRandomNum = Math.floor(Math.random() * 6) + 1;

//images/dice1.png upto images/dice6.png

const secondDiceImage = 'img/dice' + secondRandomNum + '.png';

document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

const thirdRandomNum = Math.floor(Math.random() * 6) + 1;

const thirdDiceImage = 'img/dice' + thirdRandomNum + '.png';

document.querySelectorAll('img')[2].setAttribute('src', thirdDiceImage);

const fourthRandomNum = Math.floor(Math.random() * 6) + 1;

const fourthDiceImage = 'img/dice' + fourthRandomNum + '.png';

document.querySelectorAll('img')[3].setAttribute('src', fourthDiceImage);

const fifthRandomNum = Math.floor(Math.random() * 6) + 1;

const fifthDiceImage = 'img/dice' + fifthRandomNum + '.png';

document.querySelectorAll('img')[4].setAttribute('src', fifthDiceImage);

const result =
  firstRandomNum +
  secondRandomNum +
  thirdRandomNum +
  fourthRandomNum +
  fifthRandomNum;
document.write('You rolled:', result);

//logic for winner

// if (firstRandomNum > secondRandomNum) {
//   document.querySelector('h1').innerHTML = 'The Winner is User 1';
// } else if (firstRandomNum < secondRandomNum) {
//   document.querySelector('h1').innerHTML = 'The Winner is User 2';
// } else {
//   document.querySelector('h1').innerHTML = 'It is a draw!';
// }
