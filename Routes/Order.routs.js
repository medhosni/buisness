import express from "express";
import {
  create,
  getOrders,search,update,getbyuser
} from "../Controllers/Order.controller.js";
import multer from "../Middleware/multer.js";
const router = express.Router();
/**
 * @Path /orders
 */
router.route("/")
    .get(getOrders)
    .post(create);
    router.route("/user")
    .post(getbyuser)
router.route("/searche")
    .post(search);
    router.route("/byuser")
    .post(getbyuser);
router.route("/update")
    .patch(update);

export default router;
