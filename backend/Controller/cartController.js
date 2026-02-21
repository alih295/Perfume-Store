const cartModel = require("../Models/CartModel");
const CartModel = require("../Models/CartModel");

const addToCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { product, price } = req.body;
    const cart = await CartModel.findOne({ user: userId });
    if (!cart) {
      await cartModel.create({ user: userId, items: [] });
    }

    cart.items.push({ product, price });

    cart.totalItems = cart.items.reduce((acc, item) => {
      return acc + 1;
    }, 0);
    cart.totalPrice = cart.items.reduce((acc, item) => {
      return acc + item.price;
    }, 0);

    await cart.save();

    res.status(200).json({ message: "item is added to cart" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getcartitems = async (req, res) => {
  const userId = req.user;
  const cart = await cartModel.findOne({ user: userId })
  return res.status(200).json(cart);
};

module.exports = { addToCart, getcartitems };
