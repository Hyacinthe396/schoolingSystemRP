import ResponseService from "../services/response.service";

const verifyAdmin = async (req, res, next) => {
  const { role } = req.userData;
  if (role !== "Admin") {
    ResponseService.setError(403, "You can not perform this Action");
    return ResponseService.send(res);
  }
  next();
};
export default verifyAdmin;
