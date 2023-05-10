export function fetchCountries(countryInput, countryList, countryInfo) {
  const searchcontry = countryInput.value;
  if (searchcontry === "") {
    countryList.innerHTML = "";
    countryInfo.innerHTML = "";
    return;
  }
}