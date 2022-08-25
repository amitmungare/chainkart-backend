const express = require("express");
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProductsBySubCat,
  newArrivals
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// authorizeRoles("user"),
// isAuthenticatedUser,

router.route("/product/newarrivals").get(newArrivals);

router.route("/product/new").post(createProduct);

router.route("/product/get").post(getAllProducts);

router.route("/product/getBySubCat").post(getProductsBySubCat);

router.route("/product/update/:id").put(updateProduct);

router.route("/product/delete/:id").delete(deleteProduct);

// router.route("/product/:id").get(getProductDetails);

module.exports = router;
