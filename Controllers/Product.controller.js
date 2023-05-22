import  Product  from "../Models/Product.model";
require("dotenv").config();



export async function create(req, res) {
    const Products = new Product({ ...req.body });
    console.log({ ...req.body });

    Products.photo = `/img/${req.file.filename}`;

    await Products.save();

    if (Products)
        res.status(200).json(Products);
    else {
        res.status(400).json({ Message: "Can't create this Product " });
    }
}
export async function getProducts(req, res) {
    const Products = await Product.find();
    res.json(Products);
}
export async function update(req, res) {
    const Product = new Product(req.body);
    Product.photo = `/img/${req.file.filename}`;

    const newProduct = await Product.updateOne(
        { _id: Product._id },
        Product
    );

    if (newProduct == null) {
        return res.status(400).json({ message: "not updated " });
    } else {
        console.log(newProduct);
        res.status(200).json(newProduct);
    }
}
export async function search(req, res) {
    const { name } = req.body;
    const Product = await Product.find().or([{ name }]);
    if (Product) {
        res.json(Product);
    } else {
        res.json({ Messager: "erroooor" });
    }
}
