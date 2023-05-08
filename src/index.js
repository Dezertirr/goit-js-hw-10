import './css/styles.css';
import { debounce } from 'lodash';
import {fetchCountries} from './js/fetchCountries.js'

export { countryInput };

const DEBOUNCE_DELAY = 300;
export const MAX_RESULTS = 10;

const countryInput = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

export function createCountryList(country) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<img class='country-flag' src ='${country.flags.svg}' alt='Flag of ${country.name.official}' width='30' /><p>${country.name.official}</p>`;
    listItem.addEventListener('click', () => {
      showCountry(country);
    });
    listItem.classList.add('country-item');
    return listItem;
  }

export function showCountry(country) {
    const countryInfoHTML = `
        <h2>${country.name.official}</h2>
        <p><span>Capital:</span> ${country.capital}</p>
        <p><span>Population:</span> ${country.population}</p>
        <p><span>Languages:</span> ${Object.values(country.languages).join(", ")}</p>
        <img src="${country.flags.svg}" alt="Flag of ${country.name.official}" width="300" />
    `;
    countryInfo.innerHTML = countryInfoHTML;
}

countryInput.addEventListener("input", debounce(() => {
  fetchCountries(countryInput, countryList, countryInfo);
}, DEBOUNCE_DELAY));

