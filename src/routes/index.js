import express from "express";
import SchoolRoute from "./student.route";
import UserRoute from "./user.route";
import LoginRoute from "./user.route";
import StudentGet from "./user.route";
import UserUpdates from "./user.route";

const app = express();

app.use("/api/school", SchoolRoute);
app.use("/api/school", UserRoute);
app.use("/api/school", LoginRoute);
app.use("api/school", StudentGet);
app.use("api/school", UserUpdates);

export default app;
