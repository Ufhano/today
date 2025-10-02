console.log('Hello, World!');

document.querySelector('.btn-open');

const btn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');

//SHARE A fACT BUTTON
btn.addEventListener('click', function () {
  if (form.classList.contains('hidden'));
  {
    form.classList.remove('hidden');
  }
});
