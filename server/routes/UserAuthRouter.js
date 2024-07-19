import express from "express";
import {
  signup,
  login,
  logout,
  myDetails,
} from "../controllers/UserAuthController.js";
import { verifyToken } from "../middlewares/verifytoken.js";

const UserAuthRouter = express.Router();

UserAuthRouter.post("/signup", signup);
UserAuthRouter.post("/login", login);
UserAuthRouter.post("/logout", logout);

UserAuthRouter.get("/my-details", verifyToken, myDetails);

export default UserAuthRouter;
