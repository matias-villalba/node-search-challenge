class Autocomplete2 {
  constructor(suggestions) {
    this.suggestions = suggestions;
  }

  /**
   * Searches through the possible suggestions, creating an array
   * of matches for any books whose title matches the specified search term.
   *
   * This should perform a case sensitive prefix search.
   */
  performSearch(searchTerm) {
    if (!searchTerm || searchTerm.trim() === '') {
      return [];
    }
    const isPrefix = this._isPrefix.bind(this, searchTerm);
    return this.suggestions.filter(isPrefix);
  }

  _isPrefix(searchTerm, s) {
    return s.title && s.title.startsWith(searchTerm);
  }

}

module.exports = Autocomplete2;
