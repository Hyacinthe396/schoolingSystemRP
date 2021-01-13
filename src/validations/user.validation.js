import Joi from "joi";
import ResponseService from "../services/response.service";

export const validateLoginBody = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      "any.required": "Email is required",
      "string.email": "Email must be a valid email",
      "string.empty": "Email must not be empty",
    }),
    password: Joi.string().required().messages({
      "any.required": "Password is required",
      "string.empty": "Password must not be empty",
    }),
  }).options({ abortEarly: false });

  const { error } = schema.validate(req.body);

  if (error) {
    const errors = error.details.map((err) => err.message);
    ResponseService.setError(422, errors);
    return ResponseService.send(res);
  }
  next();
};
