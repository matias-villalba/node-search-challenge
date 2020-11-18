const Autocomplete = require('../autocomplete/Autocomplete3');
const Suggestions = require('../autocomplete/Suggestions');
const filterByTitle = require('../filters/titleFilterStrategy')

class SimpleAutocompleteController {
  /**
   * Performs a case insensitive contains search on book titles.
   *
   * Example:
   *   http://localhost:9000/index?searchTerm=biology
   *
   * @param searchTerm the term to search for.
   */
  static index(searchTerm) {
    const data = Suggestions.load();

    return {
      result: new Autocomplete(data, filterByTitle).performSearch(searchTerm),
    };
  }
}

module.exports = SimpleAutocompleteController;
