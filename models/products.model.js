const db = require('./db.config');

exports.getAllProducts = () => {
    return db.query("SELECT * FROM products");
};

exports.getProductById = (id) => {
    return db.query("SELECT * FROM products WHERE id = ?", [id]);
};

exports.createProduct = (data) => {
    return db.query(
        "INSERT INTO products (nama, deskripsi, harga, foto) VALUES (?, ?, ?, ?)",
        [data.nama, data.deskripsi, data.harga, data.foto]
    );
};

exports.updateProduct = (data, id) => {
    return db.query(
        "UPDATE products SET nama=?, deskripsi=?, harga=?, foto=? WHERE id=?",
        [data.nama, data.deskripsi, data.harga, data.foto, id]
    );
};

exports.deleteProduct = (id) => {
    return db.query("DELETE FROM products WHERE id=?", [id]);
};
