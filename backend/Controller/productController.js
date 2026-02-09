const  CartModel  = require('../Models/CartModel')
const ProductModel = require('../Models/ProductModel')
const getProduct = async (req,res)=>{
 const product = await ProductModel.find()
 res.status(201).json(product)
}

const addProduct = async (req,res)=>{
   const {title,description,price} =req.body
   const imgSrc = req.file ? req.file.filename : null;
   
const productAdded = await ProductModel.create({
   title,description,imgSrc,price
})

res.status(201).json({message:'product added successfully' , productAdded})

}
 const deleteProduct = async(req,res)=>{
   const itemId = req.body.id
   await ProductModel.findByIdAndDelete(itemId)
 }

const updateProduct = async (req,res)=>{
   try{
        const itemId = req.params.id
   const {title,description,price} =req.body
    const imgSrc = req.file ? req.file.filename : null;
const updateProduct = await ProductModel.findByIdAndUpdate(itemId , {
   title,description,price,imgSrc
} , {new:true})
  res.json({message:'product updated successfully' , updateProduct })
   }
 catch (error){
    res.status(500).json({ error: error.message });

 }
  
}


const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;

    // product nikal lo
    const product = await ProductModel.findById(productId);
    if (!product) return res.status(404).json({ message: "Not found" });

    // cart dhundo (ya naya banao)
    let cart = await CartModel.findOne({ user: userId });
    if (!cart) cart =CartModel({ user: userId, items: [] });

    // item dhundo
    const item = cart.items.find(i => i.product == productId);

    if (item) {
      item.quantity += 1;        // pehle se hai
    } else {
      cart.items.push({          // naya item
        product: productId,
        quantity: 1,
        price: product.price
      });
    }

    await cart.save();

    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



module.exports ={getProduct ,addProduct , deleteProduct ,updateProduct , addToCart}