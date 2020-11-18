const SimpleAutocompleteController = require('./SimpleAutocompleteController');

describe('SimpleAutocompleteController', () => {
  it('should return all results from suggestions', () => {
    const response = SimpleAutocompleteController.index('biology');

    expect(response.result.length).toEqual(29);

    // TODO: Add more validation for this test case.
  });
});
