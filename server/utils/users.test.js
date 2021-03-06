const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Paul',
      room: 'course'
    }, {
      id: '2',
      name: 'Tine',
      room: 'developer'
    }, {
      id: '3',
      name: 'Arik',
      room: 'course'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: 123,
      name: 'Paul',
      room: 'course'
    };
    var res = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toBeFalsy();
  });

  it('should return names for course room', () => {
    var userList = users.getUserList('course');

    expect(userList).toEqual(['Paul', 'Arik']);
  });

  it('should return names for developer room', () => {
    var userList = users.getUserList('developer');

    expect(userList).toEqual(['Tine']);
  });
});
