import './css/styles.css';
import { debounce } from 'lodash';
import {fetchCountries} from './js/fetchCountries.js'

export { countryInput };

const DEBOUNCE_DELAY = 300;


export const MAX_RESULTS = 10;

const countryInput = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');


export const countryInfo = document.querySelector('.country-info');




countryInput.addEventListener("input", debounce(() => {
  fetchCountries(countryInput, countryList, countryInfo);
}, DEBOUNCE_DELAY));

