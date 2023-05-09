import {countryInfo} from '../index.js'

export function createCountryList(country) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<img class='country-flag' src ='${country.flags.svg}' alt='Flag of ${country.name.official}' width='30' /><p>${country.name.official}</p>`;
    listItem.addEventListener('click', () => {
        showCountry(country, countryInfo);
      });
    listItem.classList.add('country-item');
    return listItem;
  }



  export function showCountry(country, countryInfo) {
    if (countryInfo) {
      const countryInfoHTML = `
          <h2>${country.name.official}</h2>
          <p><span>Capital:</span> ${country.capital}</p>
          <p><span>Population:</span> ${country.population}</p>
          <p><span>Languages:</span> ${Object.values(country.languages).join(", ")}</p>
          <img src="${country.flags.svg}" alt="Flag of ${country.name.official}" width="300" />
      `;
      countryInfo.innerHTML = countryInfoHTML;
    }
  }