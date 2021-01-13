import models from "../database/models";

const { user } = models;

class UserService {
  static createUser(User) {
    return user.create(User);
  }

  static findUserByAttribute(attribute) {
    return user.findOne({ where: attribute });
  }
}
export default UserService;
