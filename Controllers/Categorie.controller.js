import  Categorie  from "../Models/Categorie.model.js";
import {} from 'dotenv/config'



export async function create(req, res) {
    const categories = new Categorie({ ...req.body });
    console.log({ ...req.body });

    categories.photo = `/img/${req.file.filename}`;

    await categories.save();

    if (categories)
        res.status(200).json(categories);
    else {
        res.status(400).json({ Message: "Can't create this Categorie " });
    }
}
export async function getCategories(req, res) {
    const categorie = await Categorie.
    find({})
    .populate('products').
    exec();
if (categorie!= null){
    res.status(200).json(categorie);
}else{
    res.status(400).json({message :"errr"});
}
}
export async function update(req, res) {
    
    Categorie.findByIdAndUpdate(req.body._id, req.body)
    .then((doc1) => {

doc1.photo=`/img/${req.file.filename}`;
console.log(doc1)
res.status(200).json(doc1);
       
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });

res.status(200).json(newCategorie);
    
}


export async function getbyproduct(req, res) {
    const { products } = req.body;
    const categories = await Categorie.find().or([{ products }]);
    if (categories) {
        res.status(200).json(categories);
    } else {
        res.status(400).json({ Messager: "erroooor" });
    }
}
export async function search(req, res) {
    const { name } = req.body;
    const categories = await Categorie.find().or([{ name }]);
    if (categories) {
        res.status(200).json(categories);
    } else {
        res.status(400).json({ Messager: "erroooor" });
    }
}

