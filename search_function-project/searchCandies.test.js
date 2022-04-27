const { capitalizeFirst, nameOnly, namesOnly, searchCandies, candies } = require('./searchCandies');

describe('searchCandies', () => {

  it('returns the names of the candies which start with the search criteria', () => {
    expect(searchCandies('Ma', 10)).toEqual(
      [ 'Mars', 'Maltesers']
    );
  });

  it('returns the names of candies whose price is less than the max price', () => {
    expect(searchCandies('Ma', 2)).toEqual(
      [ 'Mars' ]
    );
  });

  it('returns the names even where the search criteria is only one letter', () => {
    expect(searchCandies('S', 10)).toEqual(
      [ 'Skitties', 'Skittles', 'Starburst' ]
    );
  });

  it('returns names matching both search and below max price', () => {
    expect(searchCandies('S', 4)).toEqual(
      [ 'Skitties', 'Skittles' ]
    );
  });

  it('works even when the search criterion is given in lower case', () => {
    expect(searchCandies('ma', 10)).toEqual(
      [ 'Mars', 'Maltesers' ]
    );
  });

  it('works even when the search criterion is given in upper case', () => {
    expect(searchCandies('MA', 10)).toEqual(
      [ 'Mars', 'Maltesers' ]
    );
  });

  it('works even when the search criterion is given in funny case', () => {
    expect(searchCandies('mA', 10)).toEqual(
      [ 'Mars', 'Maltesers' ]
    );
  });

});