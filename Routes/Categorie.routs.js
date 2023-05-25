import express from "express";
import {
  create,
  getCategories,
  search,
  update,
} from "../Controllers/Categorie.controller.js";
import multer from "../Middleware/multer.js";
const router = express.Router();
/**
 * @Path /Categorie
 */
router.route("/")
    .get(getCategories)
    .post(multer("image"),create);
router.route("/searche")
    .post(search);
router.route("/update")
    .patch(multer("image"),update);
export default router;
