const CartModel = require("../Models/CartModel");

const addToCart = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log(userId)
    const { productId, price } = req.body;
    const cart = await CartModel.findOne({user:userId});

    cart.items.push({ product: productId, price });
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error.message);
  }
};


module.exports = addToCart