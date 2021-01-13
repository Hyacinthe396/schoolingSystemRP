import models from "../database/models";

const { students } = models;

class StudentService {
  static async updateStudentByAttribute(attribute, property) {
    return students.update(property, { where: attribute });
  }

  static findStudentByAttribute(attribute) {
    return students.findOne({ where: attribute });
  }

  static createStudent(newStudents) {
    return students.create(newStudents);
  }
  static async getAllstudent(newStudents) {
    return students.findAll({ where: newStudents });
  }
}
export default StudentService;
