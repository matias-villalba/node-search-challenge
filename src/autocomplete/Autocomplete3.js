class Autocomplete3 {
  constructor(suggestions, filterStrategy) {
    this.suggestions = suggestions;
    this.filterStrategy = filterStrategy;
  }

  /**
   * Searches through the possible suggestions, creating an array
   * of matches for any books whose title matches the specified search term.
   *
   * This should perform a case insensitive contains search and sort the
   * results by title.
   */
  performSearch(query) {
    if (!this._isQueryDefined(query)) {
      return [];
    }
    const filterFunction = this.filterStrategy.bind(this, query);
    return this.suggestions.filter(filterFunction)
      .sort((s1, s2) => s1.title.toLowerCase() < s2.title.toLowerCase() ? -1 : 1);

  }

  _isQueryDefined(query) {
    return query && ((typeof query === 'string' && query.trim() !== '') ||
      (typeof query === 'object' && Object.keys(query).length > 0))
  }

}

module.exports = Autocomplete3;
