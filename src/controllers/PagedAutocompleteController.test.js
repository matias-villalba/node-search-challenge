const PagedAutocompleteController = require('./PagedAutocompleteController');

describe('PagedAutocompleteController', () => {
  it('should return the first page of suggestions', () => {
    const response = PagedAutocompleteController.index('biology', 15);

    expect(response.result.length).toEqual(15);

    // TODO: Add more validation for this test case.
  });

  it('should indicate the next page of suggestions', () => {
    const response = PagedAutocompleteController.index('biology', 15);

    expect(response.status.moreResults).toEqual(true);
    expect(response.status.pageNext).toEqual('<somePageKey>');
  });

  it('should return the second page of suggestions', () => {
    const response = PagedAutocompleteController.index(
      'biology',
      15,
      '<somePageKey>'
    );

    expect(response.result.length).toEqual(14);
    expect(response.status.moreResults).toEqual(false);

    // TODO: Add more validation for this test case.
  });
});
