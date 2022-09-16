import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

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
console.log(refs);

refs.search.addEventListener('input', debounce(onSearch, 300));

function onSearch(evt) {
  const text = evt.target.value;
  console.log(text);
  Notiflix.Notify.info(`${text}`);
}
