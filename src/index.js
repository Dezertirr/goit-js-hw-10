import './css/styles.css';
import { debounce } from 'lodash';
import Notiflix from 'notiflix';

import { createCountryList, showCountry } from './js/makeMarkup.js';
import { fetchCountries } from './js/fetchCountries.js'


const DEBOUNCE_DELAY = 300;

export const MAX_RESULTS = 10;
export { countryInput };

const countryInput = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

countryInput.addEventListener('input', debounce(() => {
  const searchcontry = countryInput.value.trim();
  if (searchcontry === '') {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
    return;
  }
  fetch(`https://restcountries.com/v3.1/name/${searchcontry}`)
    .then((response) => {
      if (!response.ok) {
        Notiflix.Notify.failure(`Such a country does not exist:${searchcontry}`);
      }
      return response.json();
    })
    .then((data) => {
      countryList.innerHTML = '';
      if (!Array.isArray(data)) {
        const country = data;
        const listItem = createCountryList(country);
        countryList.appendChild(listItem);
        showCountry(country, countryInfo);
      } else if (data.length > MAX_RESULTS) {
        Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.');
      } else {
        data.forEach((country) => {
          const listItem = createCountryList(country);
          countryList.appendChild(listItem);
        });
        if (data.length === 1) {
          showCountry(data[0], countryInfo);
          while (countryList.firstChild) {
            countryList.removeChild(countryList.firstChild);
          }
        } else {
          countryInfo.innerHTML = '';
        }
      }
    })
    .catch(() => {
      countryList.innerHTML = '';
      countryInfo.innerHTML = `<p>This country not found: ${searchcontry}</p>`;
    });
}, DEBOUNCE_DELAY));