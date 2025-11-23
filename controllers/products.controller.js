const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../models/products.model");

exports.getProducts = async (req, res) => {
    const [rows] = await getAllProducts();
    res.json(rows);
};

exports.getProduct = async (req, res) => {
    const [rows] = await getProductById(req.params.id);
    res.json(rows[0]);
};

exports.createProductCtrl = async (req, res) => {
    await createProduct(req.body);
    res.json({ message: "Product created" });
};

exports.updateProductCtrl = async (req, res) => {
    await updateProduct(req.body, req.params.id);
    res.json({ message: "Product updated" });
};

exports.deleteProductCtrl = async (req, res) => {
    await deleteProduct(req.params.id);
    res.json({ message: "Product deleted" });
};
