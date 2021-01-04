import User from './user.js';

describe('User', () => {
  // it and test are synonyms
  it('name returns full name', () => {
    const user = new User({ firstname: 'Jane', lastname: 'Doe' });
    expect(user.name).toBe('Jane Doe');
  });
});
