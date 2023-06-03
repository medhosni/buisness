import express from "express";
import { getUsers, createUser, login, showprofile, update, search, fogetpwd ,updatePwd,deleteUser} from "../Controllers/User.controller.js";
import multer from "../Middleware/multer.js";
const router = express.Router();
/**
 * @Path /users

 */
router.get("/", getUsers);
router.post("/", createUser);
router.post("/login", login);
router.get("/show", showprofile);
router.patch("/",update)
router.patch("/changePwd",updatePwd)
router.post("/search",search);
router.post("/forgetpwd",fogetpwd)
router.delete("/delete/:email",deleteUser)
export default router;