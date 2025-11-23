const express = require("express");
const app = express();
const PORT = 8001;

app.use(express.json());

const productRoutes = require("./routes/products.routes");
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
    res.send("API Project 8 berjalan...");
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
