const express = require("express");
const router = express.Router();

const { authBearer } = require("../middlewares/auth.middleware");

const {
    getProducts,
    getProduct,
    createProductCtrl,
    updateProductCtrl,
    deleteProductCtrl
} = require("../controllers/products.controller");

router.get("/", getProducts);
router.get("/:id", getProduct);

router.post("/", authBearer, createProductCtrl);
router.put("/:id", authBearer, updateProductCtrl);
router.delete("/:id", authBearer, deleteProductCtrl);

module.exports = router;
