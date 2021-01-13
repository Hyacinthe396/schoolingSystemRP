import ResponseService from "../services/response.service";
import StudentService from "../services/student.service";

class StudentController {
  static async registerStudent(req, res) {
    const studentData = await StudentService.createStudent({
      fullname: req.body.fullname,
      email: req.body.email,
      birthdate: req.body.birthdate,
      gender: req.body.gender,
      tel: req.body.tel,
      country: req.body.country,
      city: req.body.city,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    });

    const data = {
      id: studentData.id,
      fullname: studentData.fullname,
      email: studentData.email,
      birthdate: studentData.birthdate,
      gender: studentData.gender,
      tel: studentData.tel,
      country: studentData.country,
      city: studentData.city,
      createdAt: studentData.createdAt,
      updatedAt: studentData.updatedAt,
    };

    ResponseService.setSuccess(200, " Student Created successfully!", data);
    return ResponseService.send(res);
  }
}

export default StudentController;
