import movies from './movies';

describe('Favorite Movies', () => {
  let myMovies = [];
  beforeEach(() => {
    myMovies = [
      {
        title: 'Age of Ultron',
        rate: null
      }
    ];
  });

  it('can add a movie', () => {
    movies.add(myMovies, 'Avatar');
    expect(myMovies).toMatchSnapshot();
  });

  it('can rate a movie', () => {
    movies.rate(myMovies[0], 5);
    expect(myMovies).toMatchSnapshot();
  });
});
