require('dotenv').config();
import Autocomplete from './components/autocomplete';

// Insufficient privileges to do the following, will upload data using Algolia app
// const client = algoliasearch('MBJPX7YK9Q', '472dc7c783dca1dcb0f7b692db8c8be2');
// const index = client.initIndex('ccostoso_query_suggestions');

// const records = require('../data/products.json');
// index.saveObjects(records, { autoGenerateObjectIDIfNotExist: true });

class SpencerAndWilliamsSearch {
  constructor() {
    this._initSearch();
    this._registerEvents();
  }

  _initSearch() {
    this.autocompleteDropdown = new Autocomplete();
  }

  _registerEvents() {
    const autocomplete = document.querySelector('.autocomplete');
    const searchbox = document.querySelector('#searchbox input');

    searchbox.addEventListener('click', () => {
      autocomplete.style.display = 'block';
    });

    searchbox.addEventListener('blur', () => {
      autocomplete.style.display = 'none';
    });
  }
}

const app = new SpencerAndWilliamsSearch();
