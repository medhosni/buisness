import express from "express";
import {
  create,
  getBrands,
  search,
  update,
} from "../Controllers/Brand.controller.js";
import multer from "../Middleware/multer.js";
const router = express.Router();
/**
 * @Path /Brand
 */
router.route("/")
    .get(getBrands)
    .post(multer("image"),create);
router.route("/searche")
    .post(search);
router.route("/update")
    .patch(multer("image"),update);
export default router;
