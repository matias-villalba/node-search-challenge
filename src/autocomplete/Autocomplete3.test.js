const Autocomplete3 = require('./Autocomplete3');
const Suggestions = require('./Suggestions');
const filterByTitle = require('../filters/titleFilterStrategy');


describe('Autocomplete3', () => {
  it('should perform a case insensitive contains search', () => {
    const data = Suggestions.load();
    const autocomplete = new Autocomplete3(data, filterByTitle);

    const results = autocomplete.performSearch('BIOLOGY');

    expect(results.length).toEqual(29);
    expect(results[1]).toMatchSnapshot();
    expect(results[3]).toMatchSnapshot();
  });

  it('should return results that match with word in lower case', () => {
    const data = Suggestions.load();
    const autocomplete = new Autocomplete3(data, filterByTitle);

    const results = autocomplete.performSearch('biology');

    expect(results.length).toEqual(29);
    expect(results[1]).toMatchSnapshot();
    expect(results[3]).toMatchSnapshot();
  });

  it('should return no results that match with the search term', () => {
    const data = Suggestions.load();
    const autocomplete = new Autocomplete3(data, filterByTitle);

    const results = autocomplete.performSearch('a search term that does not match');

    expect(results.length).toEqual(0);
  });

  it('should return no results when search term is empty', () => {
    const data = Suggestions.load();
    const autocomplete = new Autocomplete3(data, filterByTitle);

    const results = autocomplete.performSearch('');
    expect(results.length).toEqual(0);
  });

  it('should return no results when search term is a string with only spaces', () => {
    const data = Suggestions.load();
    const autocomplete = new Autocomplete3(data, filterByTitle);

    const results = autocomplete.performSearch('  ');

    expect(results.length).toEqual(0);
  });

  it('should return results in correct order', () => {
    const data = Suggestions.load();
    const autocomplete = new Autocomplete3(data, filterByTitle);

    const results = autocomplete.performSearch('biology');

    expect(results.length).toEqual(29);
    expect(results[0].title).toEqual('A Photographic Atlas for the Microbiology Laboratory');
    expect(results[1].title).toEqual('Biology');
    expect(results[2].title).toEqual('Biology');
    expect(results[3].title).toEqual('Biology');
    expect(results[4].title).toEqual('Biology');
    expect(results[5].title).toEqual('Biology');
    expect(results[6].title).toEqual('Biology For Dummies');
    expect(results[7].title).toEqual('BRS Biochemistry, Molecular Biology, and Genetics');
    expect(results).toMatchSnapshot();

  });

});
