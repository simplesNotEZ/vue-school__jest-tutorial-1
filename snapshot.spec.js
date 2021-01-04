const user = {
  name: 'Tony Tinkertons',
  age: 42,
  job: 'inventor'
};

describe('compare/contrast snapshot testing', () => {
  // NOT as a snapshot
  test('userString as manaully-created string matches user', () => {
    const userString = '{"name":"Tony Tinkertons","age":42,"job":"inventor"}';
    expect(JSON.stringify(user)).toEqual(userString);
  });

  // Yes! as a snapshot
  test('user matches snapshot', () => {
    expect(user).toMatchSnapshot();
  });
});
