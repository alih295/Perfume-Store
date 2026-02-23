const cartModel = require("../Models/CartModel");
const orderModel = require("../Models/OrderModel");

const getOrder = async (req, res) => {
  const userId = req.user._id


  const order = await orderModel.findOne({user:userId}).populate("user" , "fullName" );
  res.json({
    message: "order is ",
    order,
  });
};

const getOrderById = async (req, res) => {
  try {
    const order = await orderModel
      .findById(req.params.id)
      .populate("addressId");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({ order });
  } catch (err) {
    c;
    res.status(500).json({ message: "Server error" });
  }
};

const updateOrderById = async (req, res) => {
  const orderId = req.params.id;
  const { data } = req.body;
  const updatedOrder = await orderModel.findByIdAndUpdate(
    orderId,
    { orderStatus: data },
    { new: true },
  );

  res.json(updatedOrder);
};

const deleteOrderById = async (req, res) => {
  const order = await OrderModel.findByIdAndDelete(req.params.id).populate(
    "addressId",
  );
  res.json({ message: "order is deleted", deletedOrder: order._id });
};

const placeOrder = async (req, res) => {
  const userId = req.user;

  const allItems = await cartModel.findOne({ user: userId });

  if (!allItems || allItems.items.lenght === 0) {
    return res.status(400).json({ message: "cart is empty" });
  }

  const order = new orderModel({
    user: userId,
    items: allItems.items,
    subTotal: allItems.totalPrice,
    total: allItems.totalPrice + 200,
    paymentStatus: "pending",
    orderStatus: "pending",
  });
  await order.save();

  allItems.items = [];
  await allItems.save();

  res.status(201).json({ message: "order placed", order });
};

module.exports = {
  getOrder,
  getOrderById,
  updateOrderById,
  deleteOrderById,
  placeOrder,
};
