describe('sortUsers.js -> should sort users according to given params', function() {
  const users = [
    { id: '1', name: 'Ann', dob: '1999-01-01' },
    { id: '2', name: 'Lora', dob: '1992-09-01' },
    { id: '3', name: 'Jack', dob: '1978-09-12' },
    { id: '5', name: 'Yack', dob: '2001-09-12' },
  ];

  it('Base test', function() {
    expect(usersSort(users, 'name', 'asc')[0]).toEqual({ id: '1', name: 'Ann', dob: '1999-01-01' });
    expect(usersSort(users, 'name', 'desc')[0]).toEqual({ id: '5', name: 'Yack', dob: '2001-09-12' });
    expect(usersSort(users, 'dob', 'asc')[0]).toEqual({ id: '3', name: 'Jack', dob: '1978-09-12' });
    expect(usersSort(users, 'dob', 'desc')[0]).toEqual({ id: '5', name: 'Yack', dob: '2001-09-12' });
    expect(usersSort(users, 'id', 'desc')[0]).toEqual({ id: '5', name: 'Yack', dob: '2001-09-12' });
    expect(usersSort(users, 'id', 'asc')[0]).toEqual({ id: '1', name: 'Ann', dob: '1999-01-01' });
  });
});
