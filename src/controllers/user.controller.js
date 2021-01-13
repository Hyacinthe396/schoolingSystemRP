import UserService from "../services/user.service";
import ResponseService from "../services/response.service";
import TokenService from "../services/token.service";
import StudentService from "../services/student.service";

class userController {
  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} get a specific user from the database
   */
  static async schoolUsers(req, res) {
    const userData = await UserService.createUser({
      fullname: req.body.fullname,
      email: req.body.email,
      birthdate: req.body.birthdate,
      gender: req.body.gender,
      tel: req.body.tel,
      country: req.body.country,
      role: req.body.role,
      city: req.body.city,
      password: req.body.password,
    });

    const user = {
      id: userData.id,
      fullname: userData.fullname,
      email: userData.email,
      birthdate: userData.birthdate,
      gender: userData.gender,
      tel: userData.tel,
      country: userData.country,
      role: userData.role,
      city: userData.city,
      password: userData.password,
      createdAt: userData.createdAt,
      updatedAt: userData.updatedAt,
    };

    ResponseService.setSuccess(200, " user Created successfully!", user);
    return ResponseService.send(res);
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} the user will login successfully
   */
  static async login(req, res) {
    const users = await UserService.findUserByAttribute({
      email: req.body.email,
    });
    const userData = { ...users.dataValues };
    delete userData.password;
    ResponseService.setSuccess(200, "successfully logged in", {
      token: TokenService.generateToken(userData),
    });
    return ResponseService.send(res);
  }

  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} get a specific user from the database
   */
  static async getStudents(req, res) {
    const students = await StudentService.getAllstudent({});
    // const students = {
    // 	id: student.id,
    // 	fullname: student.fullname,
    // 	email: student.email,
    // 	birthdate: student.birthdate,
    // 	gender: student.gender,
    // 	tel: student.tel,
    // 	country: student.country,
    // 	city: student.city,
    // 	createdAt: student.createdAt,
    // 	updatedAt: student.updatedAt
    // }
    ResponseService.setSuccess(
      200,
      "students retrieved successfully!",
      students
    );
    return ResponseService.send(res);
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} uf
   */
  static async updateInformation(req, res) {
    await UserService.findUserByAttribute(
      { id: req.userData.id },
      {
        fullname: req.body.fullname,
        email: req.body.email,
        birthdate: req.body.birthdate,
        gender: req.body.gender,
        tel: req.body.tel,
        country: req.body.country,
        role: req.body.role,
        city: req.body.city,
        password: req.body.password,
      }
    );
    ResponseService.setSuccess(200, "Your information updated successfully");
    return ResponseService.send(res);
  }
}
export default userController;
