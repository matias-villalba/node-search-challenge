const Paginator = require('./Paginator');

describe('Paginator', () => {
  it('should return first page with moreResults: false', () => {

    const paginator = new Paginator(() => ['a', 'b', 'c', 'd']);

    const response = paginator.getItems(0, 4);

    expect(response).toBeDefined();
    expect(response.status).toBeDefined();
    expect(response.status.moreResults).toEqual(false);
    expect(response.result).toBeDefined();

    expect(response.result.length).toEqual(4);
    expect(response.result[0]).toEqual('a');
    expect(response.result[1]).toEqual('b');
    expect(response.result[2]).toEqual('c');
    expect(response.result[3]).toEqual('d');


  });

  it('should return first page with moreResults: true', () => {

    const paginator = new Paginator(() => ['a', 'b', 'c', 'd', 'e']);

    const response = paginator.getItems(0, 4);

    expect(response).toBeDefined();
    expect(response.status).toBeDefined();
    expect(response.status.moreResults).toEqual(true);
    expect(response.status.pageNext).toEqual(4);
    expect(response.result).toBeDefined();

    expect(response.result.length).toEqual(4);
    expect(response.result[0]).toEqual('a');
    expect(response.result[1]).toEqual('b');
    expect(response.result[2]).toEqual('c');
    expect(response.result[3]).toEqual('d');
  });

  it('should return second page with moreResults: false', () => {

    const paginator = new Paginator(() => ['a', 'b', 'c', 'd']);

    const response = paginator.getItems(1, 3);

    expect(response).toBeDefined();
    expect(response.status).toBeDefined();
    expect(response.status.moreResults).toEqual(false);
    expect(response.result).toBeDefined();
    expect(response.result.length).toEqual(3);
    expect(response.result[0]).toEqual('b');
    expect(response.result[1]).toEqual('c');
    expect(response.result[2]).toEqual('d');
  });

  it('should return second page with moreResults: false, when count exceeds the number of items', () => {

    const paginator = new Paginator(() => ['a', 'b', 'c', 'd']);

    const response = paginator.getItems(1, 4);

    expect(response).toBeDefined();
    expect(response.status).toBeDefined();
    expect(response.status.moreResults).toEqual(false);
    expect(response.result).toBeDefined();
    expect(response.result.length).toEqual(3);
    expect(response.result[0]).toEqual('b');
    expect(response.result[1]).toEqual('c');
    expect(response.result[2]).toEqual('d');
  });

  it('should return second page with moreResults: true', () => {

    const paginator = new Paginator(() => ['a', 'b', 'c', 'd', 'e']);

    const response = paginator.getItems(1, 3);

    expect(response).toBeDefined();
    expect(response.status).toBeDefined();
    expect(response.status.moreResults).toEqual(true);
    expect(response.status.pageNext).toEqual(4);
    expect(response.result).toBeDefined();
    expect(response.result.length).toEqual(3);
    expect(response.result[0]).toEqual('b');
    expect(response.result[1]).toEqual('c');
    expect(response.result[2]).toEqual('d');
  });


  it('should return no results and moreResults: false, when page is out of range', () => {

    const paginator = new Paginator(() => ['a', 'b', 'c', 'd', 'e']);

    const response = paginator.getItems(5, 3);

    expect(response).toBeDefined();
    expect(response.status).toBeDefined();
    expect(response.status.moreResults).toEqual(false);
    expect(response.result).toBeDefined();
    expect(response.result.length).toEqual(0);
  });

});
