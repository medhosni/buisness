import  Product  from "../Models/Product.model.js";
import {} from 'dotenv/config'



export async function create(req, res) {
    const products = new Product({ ...req.body });
    console.log({ ...req.body });

    products.photo = `/img/${req.file.filename}`;
    products.prix_groupage=products.prix_unitaire*products.unite

    await products.save();

    if (products)
   { 
        res.status(200).json(products);}
    else {
        res.status(400).json({ Message: "Can't create this Product " });
    }
}
export async function getProducts(req, res) {
    const products =await Product.
    find({})
    .populate('brand categorie').
    exec();
if (products!= null){
    res.status(200).json(products);
}else{
    res.status(400).json({message :"errr"});
}
}
export async function update(req, res) {
    const product = new Product(req.body);
  const photo= `/img/${req.file.filename}`;
if (photo==null)
{
    product.photo =photo
}
    const newProduct = await product.updateOne(
        { _id: product._id },
        product
    );

    if (newProduct == null) {
        return res.status(400).json({ message: "not updated " });
    } else {
        console.log(newProduct);
        res.status(200).json(newProduct);
    }
}
export async function getbybrand(req, res) {
    const { brand } = req.body;
    const product = await Product.find().or([{ brand }]);
    if (product.length>0) {
       
        res.json(product);
    } else {
        res.json({ Messager: "no product found" });
    }
}
export async function search(req, res) {
    const { name } = req.body;
    const product = await Product.find().or([{ name }]);
    if (product.length>0) {
       
        res.json(product);
    } else {
        res.json({ Messager: "no product found" });
    }
}
