const Autocomplete1 = require('./Autocomplete1');
const Suggestions = require('./Suggestions');

describe('Autocomplete1', () => {
  it('should perform a case sensitive contains search', () => {
    const data = Suggestions.load();
    const autocomplete = new Autocomplete1(data);

    const results = autocomplete.performSearch('biology');

    expect(results.length).toEqual(15);
    expect(results[0]).toMatchSnapshot();
  });

  it('should return results that match with words that contain upper and lower case', () => {
    const data = Suggestions.load();
    const autocomplete = new Autocomplete1(data);

    const results = autocomplete.performSearch('Microbiology');

    expect(results.length).toEqual(13);
    expect(results[0]).toMatchSnapshot();
  });

  it('should return no results that match with the search term', () => {
    const data = Suggestions.load();
    const autocomplete = new Autocomplete1(data);

    const results = autocomplete.performSearch('microbiology');

    expect(results.length).toEqual(0);
  });

  it('should return no results when search term is empty', () => {
    const data = Suggestions.load();
    const autocomplete = new Autocomplete1(data);

    const results = autocomplete.performSearch('');

    expect(results.length).toEqual(0);
  });

  it('should return no results when search term is a string with only spaces', () => {
    const data = Suggestions.load();
    const autocomplete = new Autocomplete1(data);

    const results = autocomplete.performSearch('  ');

    expect(results.length).toEqual(0);
  });

});
