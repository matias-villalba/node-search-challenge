const Autocomplete2 = require('./Autocomplete2');
const Suggestions = require('./Suggestions');

describe('Autocomplete2', () => {
  it('should perform a case sensitive prefix search', () => {
    const data = Suggestions.load();
    const autocomplete = new Autocomplete2(data);

    const results = autocomplete.performSearch('Biology');

    expect(results.length).toEqual(6);
    expect(results[0]).toMatchSnapshot();
    expect(results[4]).toMatchSnapshot();
  });


  it('should return results that match with prefix that has several words', () => {
    const data = Suggestions.load();
    const autocomplete = new Autocomplete2(data);

    const results = autocomplete.performSearch('Biology For Dummies');

    expect(results.length).toEqual(1);
    expect(results[0]).toMatchSnapshot();
  });

  it('should return no results that match with the search term', () => {
    const data = Suggestions.load();
    const autocomplete = new Autocomplete2(data);

    const results = autocomplete.performSearch('biology');

    expect(results.length).toEqual(0);
  });

  it('should return no results when search term is empty', () => {
    const data = Suggestions.load();
    const autocomplete = new Autocomplete2(data);

    const results = autocomplete.performSearch('');

    expect(results.length).toEqual(0);
  });

  it('should return no results when search term is a string with only spaces', () => {
    const data = Suggestions.load();
    const autocomplete = new Autocomplete2(data);

    const results = autocomplete.performSearch('   ');

    expect(results.length).toEqual(0);
  });

});
