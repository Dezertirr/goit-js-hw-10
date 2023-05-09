export function fetchCountries(countryInput, countryList, countryInfo) {
  const searchcontry = countryInput.value.trim();
  if (searchcontry === "") {
    countryList.innerHTML = "";
    countryInfo.innerHTML = "";
    return;
  }
}