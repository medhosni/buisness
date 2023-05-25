import  Brand  from "../Models/Brands.model.js";
import {} from 'dotenv/config'



export async function create(req, res) {
    const brands = new Brand({ ...req.body });
    console.log({ ...req.body });

    brands.Brand_logo = `/img/${req.file.filename}`;

    await brands.save();

    if (brands)
        res.status(200).json(brands);
    else {
        res.status(400).json({ Message: "Can't create this Brand " });
    }
}
export async function getBrands(req, res) {
   Brand.find({}).then(brands =>{
    res.status(200).json(brands)
   }).catch(err => res.status(400).json({message :err}))
}
export async function update(req, res) {
    
    Brand.findByIdAndUpdate(req.body._id, req.body)
    .then((doc1) => {

doc1.Brand_logo=`/img/${req.file.filename}`;
console.log(doc1)
res.status(200).json(doc1);
       
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });

    /*const brand = new Brand(req.body);
    brand.Brand_logo = `/img/${req.file.filename}`;

    const newBrand = await Brand.updateOne(
        { _id: Brand._id },
        Brand
    );

    if (newBrand == null) {
        return res.status(400).json({ message: "not updated " });
    } else {
        console.log(newBrand);
        res.status(200).json(newBrand);
    }*/
}
export async function search(req, res) {
    const { name } = req.body;
    const brand = await Brand.find().or([{ name }]);
    if (brand) {
        res.status(200).json(brand);
    } else {
        res.status(400).json({ Messager: "erroooor" });
    }
}
/*
export async function addPro(req, res) {
    const { name } = req.body;
    const brand = await Brand.find().or([{ name }]);
    if (brand) {
        res.status(200).json(brand);
    } else {
        res.status(400).json({ Messager: "erroooor" });
    }
}*/
