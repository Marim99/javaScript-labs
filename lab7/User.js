export default class User {
  constructor(user, password) {
    this.user = user;
    this.password = password;
  }
  validUser() {
    if (this.user == "admin" && this.password == "123") {
      return true;
    }
    return false;
  }
}
