const Suggestions = require('../autocomplete/Suggestions');
const Autocomplete = require('../autocomplete/Autocomplete3');
const Paginator = require('../autocomplete/Paginator');
const filterByQuery = require('../filters/queryFilterStrategy');
const FieldsSelectorMapper = require('../autocomplete/FieldsSelectorMapper');
const querystring = require("querystring");

class GeneralAutocompleteController {
  /**
   * Performs a case insensitive contains search on the given fields, optionally returning a
   * subset of the suggestion objects in pages.
   *
   * Example:
   *   http://localhost:9000/generalindex?q=title:biology,attribution:raven&fields=title,subtitle,edition&count=20&pageStart=<pageKey>
   *
   * @param query the search query.
   * @param fields the fields that should be returned.
   * @param count the max number of results to return.
   * @param pageStart parameter to indicate where to start the page.
   */
  static index(query, fields, count, pageStart) {
    count = parseInt(count);
    count = isNaN(count) || count < 0 ? 15 : count;
    pageStart = parseInt(pageStart);
    pageStart = isNaN(pageStart) || pageStart < 0 ? 0 : pageStart;

    const data = Suggestions.load();
    const queryObj = querystring.parse(query, ',', ':');

    const fieldsSelectorMapper = fields && fields.trim() ? new FieldsSelectorMapper(Object.keys(querystring.parse(fields, ',')))
      : new FieldsSelectorMapper([], true);

    const autocomplete = new Autocomplete(data, filterByQuery);
    const paginator = new Paginator(autocomplete.performSearch.bind(autocomplete, queryObj));
    return fieldsSelectorMapper.map(paginator.getItems(pageStart, count));
  }
}

module.exports = GeneralAutocompleteController;
