class UserBase {
  constructor(users) {
    this.users = users;
  }

  count() {
    return this.users.length;
  }

  getNames() {
    return this.users.map(x => x.getName());
  }

  getIntroductions() {
    return this.users.map(user => user.getIntroduction());
  }
}

module.exports = UserBase;