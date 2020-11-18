const PagedAutocompleteController = require('./PagedAutocompleteController');

describe('PagedAutocompleteController', () => {
  it('should return the first page of suggestions', () => {
    const response = PagedAutocompleteController.index('biology', 15);

    expect(response.result.length).toEqual(15);
    expect(response.result).toMatchSnapshot();

  });

  it('should indicate the next page of suggestions', () => {
    const response = PagedAutocompleteController.index('biology', 15);

    expect(response.status).toBeDefined();
    expect(response.status.moreResults).toEqual(true);
    expect(response.status.pageNext).toEqual(15);
  });

  it('should return the second page of suggestions', () => {
    const response = PagedAutocompleteController.index(
      'biology',
      15,
      15
    );

    expect(response.result.length).toEqual(14);
    expect(response.status.moreResults).toEqual(false);
    expect(response.result).toMatchSnapshot();

  });

  it('should return no results when searchTerm is empty', () => {
    const response = PagedAutocompleteController.index('', 15);
    expect(response.result.length).toEqual(0);
  });

  it('should return no results when searchTerm is undefined', () => {
    const response = PagedAutocompleteController.index(undefined, 15);
    expect(response.result.length).toEqual(0);
  });

});
