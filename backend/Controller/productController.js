const CartModel = require("../Models/CartModel");
const ProductModel = require("../Models/ProductModel");
const uploadImage = require("../services/storage.service");

const getProduct = async (req, res) => {
  const product = await ProductModel.find();
  res.status(200).json(product);
};
const addProduct = async (req, res) => {
  const { title, description, price } = req.body;
  const imgSrc = req.file.buffer;
  const result = await uploadImage(imgSrc.toString("base64"));

  const productAdded = await ProductModel.create({
    title,
    description,
    imgSrc: result.url,
    price,
  });
  res.status(201).json({ message: "product added successfully", productAdded });
};

const deleteProduct = async (req, res) => {
  const itemId = req.body.id;
  await ProductModel.findByIdAndDelete(itemId);
};

const updateProduct = async (req, res) => {
  const {title , description , price}= req.body
  try {
    const itemId = req.params.id;
      const product = ProductModel.findById(itemId)
      if(!product){
        return  res.status(400).json({message:"product is invalid"})
      }
      const updatedProduct = product.

    // const { title, description, price } = req.body;
    // const imgSrc = req.file ? req.file.filename : null;
    // const updateProduct = await ProductModel.findByIdAndUpdate(
    //   itemId,
    //   {
    //     title,
    //     description,
    //     price,
    //     imgSrc,
    //   },
    //   { new: true },
    // );
    // res.json({ message: "product updated successfully", updateProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = { getProduct, addProduct, deleteProduct, updateProduct };
