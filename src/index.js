import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const countryInput = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

function createCountryList(country) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<img class='country-flag' src ='${country.flags.svg}' alt='Flag of ${country.name.official}' width='30' /><p>${country.name.official}</p>`;
    listItem.addEventListener('click', () => {
      showCountry(country);
    });
    listItem.classList.add('country-item');
    return listItem;
  }

function showCountry(country) {
    const countryInfoHTML = `
        <h2>${country.name.official}</h2>
        <p><span>Capital:</span> ${country.capital}</p>
        <p><span>Population:</span> ${country.population}</p>
        <p><span>Languages:</span> ${Object.values(country.languages).join(", ")}</p>
        <img src="${country.flags.svg}" alt="Flag of ${country.name.official}" width="300" />
    `;
    countryInfo.innerHTML = countryInfoHTML;
}

function searchInput() {
  const searchcontry = countryInput.value;
  if (searchcontry === "") {
    countryList.innerHTML = "";
    countryInfo.innerHTML = "";
    return;
  }
  fetch(`https://restcountries.com/v3.1/name/${searchcontry}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Such a country does not exist:${searchcontry}`);
      }
      return response.json();
    })
    .then((data) => {
      countryList.innerHTML = "";
      data.forEach((country) => {
        const listItem = createCountryList(country);
        countryList.appendChild(listItem);
      });
      if (data.length === 1) {
        showCountry(data[0]);
        while (countryList.firstChild) {
          countryList.removeChild(countryList.firstChild);
        }
      } else {
        countryInfo.innerHTML = "";
      }
    })
    .catch((error) => {
      console.log(error);
      countryList.innerHTML = "";
      countryInfo.innerHTML = `<p class="error-message">${error.message}</p>`;
    });
}

countryInput.addEventListener("input", debounce(searchInput, DEBOUNCE_DELAY));

function debounce(fn, debounceTime) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, debounceTime);
  };
}