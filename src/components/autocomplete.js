import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';

// Instant Search Widgets
import { hits, searchBox, configure, index } from 'instantsearch.js/es/widgets';

// Autocomplete Template
import autocompleteProductTemplate from '../templates/autocomplete-product';
import autocompleteSuggestionTemplate from '../templates/autocomplete-suggestion';

/**
 * @class Autocomplete
 * @description Instant Search class to display content in the page's autocomplete
 */
class Autocomplete {
  /**
   * @constructor
   */
  constructor() {
    this._registerClient();
    this._registerWidgets();
    this._startSearch();
  }

  /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */
  _registerClient() {
    this._searchClient = algoliasearch(
      'MBJPX7YK9Q',
      process.env.ALGOLIA_APIKEY
    );

    this._searchInstance = instantsearch({
      indexName: 'ccostoso_query_suggestions',
      searchClient: this._searchClient,
    });
  }

  /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
   */
  _registerWidgets() {
    this._searchInstance.addWidgets([
      // Identifying #searchbox element
      searchBox({
        container: '#searchbox',
      }),

      // Configuring primary/query suggestions index
      index({
        indexName: 'ccostoso_query_suggestions',
      }).addWidgets([
        configure({
          hitsPerPage: 3,
        }),

        hits({
          container: '#autocomplete-hits',
          templates: { item: autocompleteSuggestionTemplate },
        }),
      ]),

      // Configuring secondary/products index
      index({
        indexName: 'ccostoso',
      }).addWidgets([
        configure({
          hitsPerPage: 3,
        }),

        hits({
          container: '.results',
          templates: {
            item: autocompleteProductTemplate,
          },
        }),
      ]),
    ]);
  }

  /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */
  _startSearch() {
    this._searchInstance.start();
    // this._querySuggestionsInstance.start();
  }
}

export default Autocomplete;