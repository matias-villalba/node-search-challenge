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
    // TODO: Implement this.
    return {
      result: [],
    };
  }
}

module.exports = SimpleAutocompleteController;
