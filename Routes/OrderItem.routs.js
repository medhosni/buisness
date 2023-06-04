import express from "express";
import {
  create,
  getOrderItems,search,update,getbyproduct,addproduct,getOrderItem
} from "../Controllers/Order_Items.controlle.js";
import multer from "../Middleware/multer.js";
const router = express.Router();
/**
 * @Path /orderItem
 */
router.route("/")
    .get(getOrderItems)
    .post(create);
    router.route("/product").
    post(getbyproduct)
router.route("/searche")
    .post(search);
    router.route("/getone")
    .post(getOrderItem);
router.route("/addproduct")
    .patch(addproduct);
router.route("/update")
    .patch(update);

export default router;
