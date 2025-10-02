console.log('Hello, World!');

document.querySelector('.btn-open');

const btn = document.querySelector('.btn-open');
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

const text = 'Lisbon is the capital of portugal';

let votesInteresting = 23;
