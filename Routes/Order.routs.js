import express from "express";
import {
  create,
  getOrders,search,update
} from "../Controllers/Order.controller.js";
import multer from "../Middleware/multer.js";
const router = express.Router();
/**
 * @Path /orders
 */
router.route("/")
    .get(getOrders)
    .post(multer("image"),create);
router.route("/searche")
    .post(search);
router.route("/update")
    .patch(multer("image"),update);

export default router;
