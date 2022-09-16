export default class CountriesApiServises {
  constructor() {
    this.name = '';
  }

  fetchCountries() {
    const url = `https://restcountries.com/v2/name/${this.name}?fields=name,capital,population,flags,languages`;
    fetch(url).then(response => response.json().then(console.log));
  }

  get queryName() {
    return this.name;
  }

  set queryName(newQueryName) {
    this.name = newQueryName;
  }
}
