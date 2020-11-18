class PagedAutocompleteController {
  /**
   * Performs a case insensitive contains search on book titles, returning
   * paged results.
   *
   * For the paging technique use any technique you would like. Feel free to use whatever kind of
   * pageStart you think makes sense. The requirements on paging is that:
   * - When there are more results beyond the current page the response contains
   *   "moreResults": true in the status object of the response. If there are no
   *   more results, "moreResults" should be false.
   * - When there are more results beyond the current page the response contains
   *   a paging key in the "pageNext" field of the "status" object of the
   *   response. That paging key can then be passed as the pageStart url
   *   parameter to get the next page of results.
   *
   * Example:
   *   http://localhost:9000/pagedindex?searchTerm=biology&count=20&pageStart=<pageKey>
   *
   * @param searchTerm the term to search for.
   * @param count the max number of results to return.
   * @param pageStart parameter to indicate where to start the page.
   */
  static index(searchTerm, count, pageStart) {
    // TODO: Implement this.
    return {
      status: {},
      result: [],
    };
  }
}

module.exports = PagedAutocompleteController;
