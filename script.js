console.log('Hello, World!');

document.querySelector('.btn-open'); //selecting the button

const btn = document.querySelector('.btn-open'); //selecting the button

const form = document.querySelector('.fact-form');

//SHARE A fACT BUTTON
btn.addEventListener('click', function () {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    btn.textContent = 'close';
  } else {
    form.classList.add('hidden');
    btn.textContent = 'Share a fact';
  }
});

// //values
// //there is const value and let value
// //const cant be updated later
// //let can be updated

// const text = 'Lisbon is the capital of portugal';

// //update later
// let votesInteresting = 23;
// let votesMindblowing = 5;

// //operator
// votesInteresting = votesInteresting + 1;

// votesMindblowing++;
// console.log(votesMindblowing);

// let totalUpvotes = votesInteresting + votesMindblowing;
// console.log('Upvotes', totalUpvotes);

// //logical operatrinos ye
// let voteFalse = 4;
// const isCorrect = voteFalse < totalUpvotes;
// console.log(isCorrect);

//functions

//function to calculate the age of a fact

function calcFactAge(year) {
  const currentYear = new Date().getFullYear(); //2025;//instead of writing the currect year could use a function inside of a function
  const age = currentYear - year;
  return age;
}
const age1 = calcFactAge(2015);
console.log(age1);

//reusing function

console.log(calcFactAge(2020));
console.log(calcFactAge(2017));

let votesInteresting = 20;
let votesMindblowing = 21;

if (votesInteresting === votesMindblowing) {
  alert('this fact is interesting and mindblowing');
} else if (votesInteresting < votesMindblowing) {
  console.log('Mindblowing fact');
}
