import express from "express";
import {
  create,
  getOrderItems,search,update,getbyproduct
} from "../Controllers/Order_Items.controlle.js";
import multer from "../Middleware/multer.js";
const router = express.Router();
/**
 * @Path /orderItem
 */
router.route("/")
    .get(getOrderItems)
    .post(multer("image"),create);
    router.route("/product").
    post(getbyproduct)
router.route("/searche")
    .post(search);
router.route("/update")
    .patch(multer("image"),update);

export default router;
