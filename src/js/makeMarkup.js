import { countryInfo } from "../index.js";

export function createCountryList(country) {
  const listItem = country.map ((result) => {
return `<li class="list-item">
<img src=${result.flags.svg} alt="" width="30" />
<h3>${result.name.common}</h3>
</li>`;
  }).join('');
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