import express from "express";
import {
  create,
  getProducts,search,update,getbybrand,getProduct,getbycategorie
} from "../Controllers/Product.controller.js";
import multer from "../Middleware/multer.js";
const router = express.Router();
/**
 * @Path /produtc
 */
router.route("/")
    .get(getProducts)
    .post(create);
    router.route("/getone")
    .get(getProduct)
    router.route("/bybrand")
    .post(getbybrand)
    router.route("/bycategorie")
    .post(getbycategorie)
router.route("/searche")
    .post(search);
router.route("/update")

    .patch(update);

export default router;
