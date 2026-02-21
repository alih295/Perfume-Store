const uploadImage = require("../services/storage.service");
const paymentModel = require("../Models/PaymentModel");

const addPayment = async (req, res) => {
  const userId = req.user;

  const { phone, paymentMethod, orderId } = req.body;
  const image = req.file.buffer;
  const result = await uploadImage(image.toString("base64"));

  const payment = await paymentModel.findOne({ order:orderId });

  if (!payment) {
    const newpayment = await paymentModel.create({
     user: userId,
      order: orderId, // Order se link kar diya
      senderNumber: phone,
      image: result.url,
      paymentMethod
    });
    return res
      .status(201)
      .json({ message: "transaction is created ", newpayment });
  }

  return res.status(200).json({message:'payment is already saved '})
};

module.exports = { addPayment };
