const SimpleAutocompleteController = require('./SimpleAutocompleteController');

describe('SimpleAutocompleteController', () => {
  it('should return all results from suggestions', () => {
    const response = SimpleAutocompleteController.index('biology');

    expect(response.result.length).toEqual(29);
    expect(response.result).toMatchSnapshot();

  });

  it('should return no results when searchTerm is empty', () => {
    const response = SimpleAutocompleteController.index('');
    expect(response.result.length).toEqual(0);

  });

  it('should return no results when searchTerm is undefined', () => {
    const response = SimpleAutocompleteController.index();
    expect(response.result.length).toEqual(0);

  });

});
