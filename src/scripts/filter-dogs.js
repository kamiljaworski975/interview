import { compareValues } from './compareFunc';

import dogData from '../assets/data/dogs.json';

const dogList = document.querySelector('.section__ourdogs--list');
const filterByBreed = document.querySelector('#filter-dogs');
const sortDogs = document.querySelector('#sort-dogs');

const dogArray = dogData.dogs;
let filteredArr = dogData.dogs;

const selectOptions = {};

const dogElement = (title, type, age, gender, image) => `
<div class="section__ourdogs--item">
<div class="section__ourdogs--image">
  <img src="${image}" alt="" />
</div>
<h4>${title} - ${type}</h4>
<span>${gender} &bull; Age ${age}</span>
</div>
`;

const insertElements = (arr) => {
  arr.forEach((el) => {
    const dogHtml = dogElement(el.title, el.type, el.age, el.gender, el.image);
    dogList.insertAdjacentHTML('beforeend', dogHtml);
  });
};

filterByBreed.addEventListener('change', (e) => {
  dogList.innerHTML = '';
  if (e.target.value === 'all') {
    filteredArr = dogArray;
  } else {
    filteredArr = dogArray.filter(
      (el) => el.type.toLocaleLowerCase() == e.target.value.toLocaleLowerCase()
    );
  }

  insertElements(filteredArr);
  sortDogs.value = 'select';
});

sortDogs.addEventListener('change', (e) => {
  dogList.innerHTML = '';
  filteredArr = filteredArr.sort(compareValues(e.target.value));
  let filteredGen;
  if (e.target.value === 'age-min') {
    filteredArr = filteredArr.sort(compareValues('age', 'desc'));
  }
  if (e.target.value === 'male' || e.target.value === 'female') {
    filteredGen = [...filteredArr].filter(
      (el) => el.gender.toLocaleLowerCase() === e.target.value
    );
  }
  insertElements(filteredGen ? filteredGen : filteredArr);
});

insertElements(dogArray);
