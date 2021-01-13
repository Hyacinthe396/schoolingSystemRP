import { Router } from "express";
import StudentController from "../controllers/student.controller";
import { validateRegisterInfo } from "../validations/student.validation";

const router = Router();

router.post(
  "/register",
  validateRegisterInfo,
  StudentController.registerStudent
);

export default router;
