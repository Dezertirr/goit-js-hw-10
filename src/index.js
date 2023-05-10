import './css/styles.css';
import { debounce } from 'lodash';
import Notiflix from 'notiflix';
import { createCountryList, showCountry } from './js/makeMarkup.js';
import {fetchCountries} from './js/fetchCountries.js'

const DEBOUNCE_DELAY = 300;

export const MAX_RESULTS = 10;
export const countryInput = document.getElementById('search-box');
export const countryList = document.querySelector('.country-list');
export const countryInfo = document.querySelector('.country-info');


countryInput.addEventListener('input',debounce((evt) => {
  const searchCountry = evt.target.value.trim();
    countryList.innerHTML = "";
    countryInfo.innerHTML = "";

if(!searchCountry) return
  fetchCountries(searchCountry)
    .then((data) => {
   
      if (data.length <= 10 && data.length >= 2) {
        const country = data;
        const listItem = createCountryList(country);
     countryList.innerHTML = listItem
        return
      } 
      if (data.length > MAX_RESULTS) {
        Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.');
        return
      }

        if (data.length === 1) {
          showCountry(data[0]);
          return
        }

    })
    .catch((Error) => {
      Notiflix.Notify.failure(`${Error}`)
    });
},DEBOUNCE_DELAY));