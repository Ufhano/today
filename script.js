const initialFacts = [
  {
    id: 1,
    text: 'React is being developed by Meta (formerly facebook)',
    source: 'https://opensource.fb.com/',
    category: 'technology',
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: 'Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%',
    source:
      'https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids',
    category: 'society',
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: 'Lisbon is the capital of Portugal',
    source: 'https://en.wikipedia.org/wiki/Lisbon',
    category: 'society',
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

document.querySelector('.btn-open'); //selecting the button

const CATEGORIES = [
  { name: 'technology', color: '#3b82f6' },
  { name: 'science', color: '#16a34a' },
  { name: 'finance', color: '#ef4444' },
  { name: 'society', color: '#eab308' },
  { name: 'entertainment', color: '#db2777' },
  { name: 'health', color: '#14b8a6' },
  { name: 'history', color: '#f97316' },
  { name: 'news', color: '#8b5cf6' },
];

//SELECTING DOM ELEMENTS
const btn = document.querySelector('.btn-open'); //selecting the button

const form = document.querySelector('.fact-form');
const factsList = document.querySelector('.facts-list');

//CREATE DOM ELEMENTS : RENDER FACTS IN LIST
factsList.innerHTML = '';

//load data from Supabase
const res = fetch('https://vxaviwkqaugxbrgsagdd.supabase.co/rest/v1/facts', {
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4YXZpd2txYXVneGJyZ3NhZ2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwOTEzMjQsImV4cCI6MjA3NDY2NzMyNH0.HeiouZfyihPZa69Qqm7xzlu3NVGwFw3YOZntPjfKb3E',

    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4YXZpd2txYXVneGJyZ3NhZ2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwOTEzMjQsImV4cCI6MjA3NDY2NzMyNH0.HeiouZfyihPZa69Qqm7xzlu3NVGwFw3YOZntPjfKb3E',
  },
});

console.log(res);
createFactsList(initialFacts);

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class ="fact">
  <p>
  ${fact.text}
  <a
  class ="source"
  href ="${fact.source}"
  target="_blank"
  >(Source)</a>
  </p>
  <span class="tag" styles ="background-color:
  #3b82f6">${fact.category} </span>
  </li>`
  );
  console.log(htmlArr);
  const html = htmlArr.join();
  factsList.insertAdjacentHTML('afterbegin', html);
}

// const htmlArr = initialFacts.map(
//   (fact) => `<li class ="fact">
//   <p>
//   ${fact.text}
//   <a
//   class ="source"
//   href ="${fact.source}"
//   target="_blank"
//   >(Source)</a>
//   </p>
//   <span class="tag" styles ="background-color:
//   #3b82f6">${fact.category} </span>
//   </li>`
// );
// console.log(htmlArr);
// const html = htmlArr.join();
// factsList.insertAdjacentHTML('afterbegin', html);

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

// function calcFactAge(year) {
//   const currentYear = new Date().getFullYear(); //2025;//instead of writing the currect year could use a function inside of a function
//   const age = currentYear - year;

//   if (age >= 0) return age;
//   else
//     return `impossible year .Year needs to be less or equal to ${currentYear}`;
// }
// const age1 = calcFactAge(2015);
// console.log(age1);

// //reusing function

// console.log(calcFactAge(2020));
// console.log(calcFactAge(2017));
// console.log(calcFactAge(2026));

// let votesInteresting = 20;
// let votesMindblowing = 5;

// if (votesInteresting === votesMindblowing) {
//   alert('this fact is interesting and mindblowing');
// } else if (votesInteresting < votesMindblowing) {
//   console.log('Mindblowing fact');
// } else if (votesInteresting > votesMindblowing) {
//   console.log('Interesting Fact');
// }

// //truthy and falsy values
// //falsy valkues are 0, null, {} ,'',`undefined, NaN
// //truthy values are '0', ' ', [], 1, -1, 'false', true

// if (votesInteresting) {
//   console.log('truthy ');
// } else {
//   console.log('not all that ');
// }

// //ternary operation

// //if else statements are cool and all but when we want a value we use a ternary operation
// //3parts
// //A condition
// //Bthe rue side
// //C false part
// //example
// //defination btw
// let votesFalse = 20;
// const totalUpvotes = votesInteresting + votesMindblowing;
// // const message = totalUpvotes > votesFalse ? 'absolutely true' : 'really false';
// // alert(message);
// //working with strings
// const text = 'Lisbon is the capital of portugal';

// //passing variables in string s?
// const upperText = text.toUpperCase();
// console.log(upperText);

// //
// //using these `` means we can poass in a value in the string
// const str = `the current fact is "${text}".Its is ${calcFactAge(
//   2015
// )} years old .It is probably${
//   totalUpvotes > votesFalse ? ' facts' : 'not true'
// }`;
// console.log(str);

//soo arrow functions , these save us time so instead of using a return statemnet we use an arrow fuction ?
//interestinog? =>

//basic
// const calcFactAge2 = year - 2022;
//arrow function
// const calcFactAge2 = (year) =>
//   //thats a fucntiion btw , now we use a tertnary function
//   year <= new Date().getFullYear()
//     ? new Date().getFullYear() - year
//     : `impossible year .Year needs to be less or equal to ${new Date().getFullYear()}`;

//arrays

// const fact = [' Johannesburg is the capital of South Africa', 2015, true];
// console.log(fact);
// console.log(fact[1]);
// console.log(fact.length);
// console.log(fact.length - 1);

// //creating multiple var
// const [text, createdIn] = fact;

// console.log(createdIn);
// const newFact = [...fact, 'society'];
// console.log(newFact);
//objects

//so an obj is like an array just that in objs you can name your value , instead of indexes

// const factObj = {
//   text: 'Johannesburg is the capital of South Africa',
//   category: 'society',
//   createdIn: 2015,
//   isCorrect: true,
//   //method
//   createSummary: function () {
//     return `The fact ${
//       this.text
//     } is from the category ${this.category.toUpperCase()}`;
//   },
// };
//destructuring objs

// const { category, isCorrect } = factObj;
// console.log(category);
// console.log(factObj.createSummary());

//looping over arrays

// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });

//make the array x 10
// const times10 = [2, 4, 6, 8].map(function (el) {
//   return el * 10;
// });
// console.log(times10);
//use arrow function
// const times10 = [2, 4, 6, 8].map((el) => el * 10);
// {
// }
// console.log(times10);

//array of objects
// const CATEGORIES = [
//   { name: 'technology', color: '#3b82f6' },
//   { name: 'science', color: '#16a34a' },
//   { name: 'finance', color: '#ef4444' },
//   { name: 'society', color: '#eab308' },
//   { name: 'entertainment', color: '#db2777' },
//   { name: 'health', color: '#14b8a6' },
//   { name: 'history', color: '#f97316' },
//   { name: 'news', color: '#8b5cf6' },
// ];

// const allCategories = CATEGORIES.map((el) => el.name);
// {
//   console.log(allCategories);
// }

// const initialFacts = [
//   {
//     id: 1,
//     text: 'React is being developed by Meta (formerly facebook)',
//     source: 'https://opensource.fb.com/',
//     category: 'technology',
//     votesInteresting: 24,
//     votesMindblowing: 9,
//     votesFalse: 4,
//     createdIn: 2021,
//   },
//   {
//     id: 2,
//     text: 'Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%',
//     source:
//       'https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids',
//     category: 'society',
//     votesInteresting: 11,
//     votesMindblowing: 2,
//     votesFalse: 0,
//     createdIn: 2019,
//   },
//   {
//     id: 3,
//     text: 'Lisbon is the capital of Portugal',
//     source: 'https://en.wikipedia.org/wiki/Lisbon',
//     category: 'society',
//     votesInteresting: 8,
//     votesMindblowing: 3,
//     votesFalse: 1,
//     createdIn: 2015,
//   },
// ];

// const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
// console.log(factAges);
// console.log(factAges.join(`:`));

// //what is dom
// //documnet object model
// //dom allows us to change html using javascript
