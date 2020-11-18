class Autocomplete1 {
  constructor(suggestions) {
    this.suggestions = suggestions;
  }

  /**
   * Searches through the possible suggestions, creating an array
   * of matches for any books whose title matches the specified search term.
   *
   * This should perform a case sensitive contains search.
   */
  performSearch(searchTerm) {
    if (!searchTerm || searchTerm.trim() === '') {
      return [];
    }
    const isIn = this._isIn.bind(this, searchTerm);
    return this.suggestions.filter(isIn);
  }

  _isIn(searchTerm, s) {
    return s.title && this._removeExtraSpaces(s.title).includes(this._removeExtraSpaces(searchTerm))
  }

  _removeExtraSpaces(str) {
    return str.split(/\s+/).join(' ');
  }



}

module.exports = Autocomplete1;
