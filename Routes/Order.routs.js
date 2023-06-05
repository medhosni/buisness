import express from "express";
import {
  create,
  getOrders,search,update,getbyuser,confirme
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
    router.route("/confirme")
    .patch(confirme);
    router.route("/update")
    .patch(update);

export default router;
