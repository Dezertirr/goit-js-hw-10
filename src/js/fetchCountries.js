export function fetchCountries(searchCountry) {
  
  return fetch(`https://restcountries.com/v3.1/name/${searchCountry}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Oops, there is no country with that name');
      }
    });
}