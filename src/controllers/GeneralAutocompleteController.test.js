const GeneralAutocompleteController = require('./GeneralAutocompleteController');

describe('GeneralAutocompleteController', () => {
  it('should page the simple case', () => {
    const response = GeneralAutocompleteController.index('title:biology', null, 15);

    expect(response.result.length).toEqual(15);
    expect(response.status.moreResults).toEqual(true);

    expect(response.result[0].title).toEqual('A Photographic Atlas for the Microbiology Laboratory');
    expect(response.result[1].title).toEqual('Biology');
    expect(response.result[2].title).toEqual('Biology');
    expect(response.result[3].title).toEqual('Biology');
    expect(response.result[4].title).toEqual('Biology');
    expect(response.result[5].title).toEqual('Biology');
    expect(response.result[6].title).toEqual('Biology For Dummies');
    expect(response.result[7].title).toEqual('BRS Biochemistry, Molecular Biology, and Genetics');
    expect(response.result).toMatchSnapshot();
  });

  it('should support a complex query', () => {
    const response = GeneralAutocompleteController.index(
      'title:biology,attribution:raven',
      null /* fields */,
      15,
    );

    expect(response.result.length).toEqual(1);
    expect(response.status.moreResults).toEqual(false);

    expect(response.result[0].title).toEqual('Biology');
    expect(response.result).toMatchSnapshot();

  });

  it('should return only the selected fields', () => {
    const response = GeneralAutocompleteController.index(
      'title:biology,attribution:raven',
      'publisher,price',
      15,
    );

    expect(response.result.length).toEqual(1);
    expect(response.result[0].publisher).toEqual('McGraw-Hill');
    expect(response.result[0].price).toEqual(139.99);

  });

  it('should indicate the next page of suggestions', () => {
    const response = GeneralAutocompleteController.index(
      'title:biology',
      null,
      15,
    );

    expect(response.status).toBeDefined();
    expect(response.status.moreResults).toEqual(true);
    expect(response.status.pageNext).toEqual(15);
    expect(response.result).toMatchSnapshot();
  });

  it('should return the second page of suggestions', () => {

    const response = GeneralAutocompleteController.index(
      'title:biology',
      null,
      15,
      15,
    );
    expect(response.result.length).toEqual(14);
    expect(response.status.moreResults).toEqual(false);
    expect(response.result).toMatchSnapshot();
  });

  it('should return no results when searchTerm is empty', () => {
    const response = GeneralAutocompleteController.index(
      '',
      null,
      15,
    );

    expect(response.result.length).toEqual(0);

  });

  it('should return no results when searchTerm is undefined', () => {
    const response = GeneralAutocompleteController.index(
      undefined,
      null,
      15,
    );

    expect(response.result.length).toEqual(0);

  });

});
