import { Router } from "express";
import UserController from "../controllers/user.controller";
import { validateLoginBody } from "../validations/user.validation";
import verifyAdmin from "../middlewares/verify-admin.middleware";
import protectRoute from "../middlewares/verification.middleware";

const router = Router();

router.post("/sign-up", UserController.schoolUsers);
router.post("/login", validateLoginBody, UserController.login);
router.get("/students", protectRoute, verifyAdmin, UserController.getStudents);
router.patch("/user-update", protectRoute, UserController.updateInformation);

export default router;
