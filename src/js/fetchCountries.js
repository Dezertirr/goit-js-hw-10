import Notiflix from "notiflix";
import {createCountryList, showCountry} from './makeMarkup';
import { MAX_RESULTS } from '../index.js';


export function fetchCountries(countryInput, countryList, countryInfo) {
  const searchcontry = countryInput.value.trim();
  if (searchcontry === "") {
    countryList.innerHTML = "";
    countryInfo.innerHTML = "";
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
        countryList.innerHTML = "";
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
            countryInfo.innerHTML = "";
          }
        }
      })
    .catch((error) => {
      console.log(error);
      countryList.innerHTML = "";
      countryInfo.innerHTML = `<p class="error-message">${error.message}</p>`;
    });
}
