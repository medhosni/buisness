import express from "express";
import {
  create,
  getProducts,search,update,getbybrand
} from "../Controllers/Product.controller.js";
import multer from "../Middleware/multer.js";
const router = express.Router();
/**
 * @Path /produtc
 */
router.route("/")
    .get(getProducts)
    .post(multer("image"),create);
    router.route("/bybrand")
    .post(getbybrand)
    
router.route("/searche")
    .post(search);
router.route("/update")
    .patch(multer("image"),update);

export default router;
