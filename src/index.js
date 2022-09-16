import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import CountriesApiServises from './fetchCountries';
// import countryNameFlage from './templates/countruFlags.hbs';
// import countryInfo from './templates/countryDetails.hbs';

console.log(countryNameFlage);
console.log(countryInfo);
const DEBOUNCE_DELAY = 300;

// Notifix ------------------------
Notiflix.Notify.success('Sol lucet omnibus');

Notiflix.Notify.failure('Qui timide rogat docet negare');

Notiflix.Notify.warning('Memento te hominem esse');

Notiflix.Notify.info('Cogito ergo sum');
// Notifix ---------------------

const refs = {
  search: document.querySelector('#search-box'),
};
const countriesApiServises = new CountriesApiServises();
// console.log(countriesApiServises.fetchCountries());

refs.search.addEventListener('input', debounce(onSearch, 300));
// let name = '';

function onSearch(evt) {
  countriesApiServises.queryName = evt.target.value;

  // Notiflix.Notify.info(`${name}`);
  if (countriesApiServises.queryName !== '') {
    countriesApiServises.fetchCountries();
  }
}
