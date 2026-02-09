const AddressModel = require("../Models/AddressModel");
const OrderModel = require("../Models/OrderModel");
const paymentModel = require('../Models/PaymentModel')


const placeOrder = async (req, res) => {
  try {
    const {
      customer,
      items,
      subTotal,
      shipping,
      total,
      paymentStatus: pending,
    } = req.body;
    const address = await AddressModel.create({
      fullName: customer.fullName,
      country: customer.country,
      streetAddress: customer.streetAddress,
      city: customer.city,
      phone: customer.phone,
      email: customer.email,
      paymentStatus: "pending",
      orderStatus: "pending",
    });

    const generateOrderId = () => {
  return "ORD-" + Math.floor(100000 + Math.random() * 900000);
};

    const order = await OrderModel.create({
      customerName: customer.fullName,
        publicOrderId: generateOrderId(),
      addressId: address._id,
      items,
      subTotal,
      shipping,
      total,
    });

    res.status(201).json({
      message: "Order placed successfully",
      orderId: order._id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Order placement failed",
      error: error.message,
    });
  }
};

const verifyPayment = async(req,res)=>{

  const {orderId,transactionId,senderNumber,paymentMethod} = req.body

  const payment = await paymentModel.create({
    orderId,transactionId,senderNumber, screenshot: req.file.filename,paymentMethod
  })
  
res.json({
  messgae :'payment is succedede' , payment
})

 
}

const getOrderById = async(req,res)=>{
 const selectedOrder =  await OrderModel.findById(req.params.orderId).populate("addressId");

res.json(selectedOrder)

}

const getPayment = async(req,res)=>{
  const payment = await paymentModel.find().populate('orderId')
  res.json({message:'payment is fetched' , payment})
}


const deletePaymentById = async(req,res)=>{
  const id = req.params.id
  const deletedPayment = await paymentModel.findByIdAndDelete(id)
  res.json({
    deletedPayment
  })
}


const UpdatePaymentStatus = async(req,res)=>{
  const id = req.params.id 
  const {data} = req.body
  const updatedStatus = await paymentModel.findByIdAndUpdate(id , {paymentStatus:data} , {new:true})
  res.json({updatedStatus})
}



module.exports = { placeOrder ,verifyPayment , getOrderById , getPayment , UpdatePaymentStatus,deletePaymentById };
