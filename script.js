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

//values
//there is const value and let value
//const cant be updated later
//let can be updated

const text = 'Lisbon is the capital of portugal';

//update later
let votesInteresting = 23;
let votesMindblowing = 5;

//operator
votesInteresting = votesInteresting + 1;

votesMindblowing++;
console.log(votesMindblowing);

let totalUpvotes = votesInteresting + votesMindblowing;
console.log('Upvotes', totalUpvotes);

//logical operatrinos ye
let voteFalse = 4;
const isCorrect = voteFalse < totalUpvotes;
console.log(isCorrect);
