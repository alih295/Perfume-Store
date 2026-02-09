const OrderModel = require('../Models/OrderModel')

const getOrder =async (req,res)=>{
   const ress = await OrderModel.find()
   res.json({
      message:'order is ' , ress
   })
}

const getOrderById = async (req, res) => {
  try {
 

    const order = await OrderModel.findById(req.params.id)
      .populate("addressId");
       
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({ order });
  } catch (err) {
    c
    res.status(500).json({ message: "Server error" });
  }
};

const updateOrderById = async(req,res)=>{
const orderId = req.params.id
const {data} = req.body 
const updatedOrder = await OrderModel.findByIdAndUpdate(orderId ,{orderStatus : data}, {new:true} )

res.json(updatedOrder)
}




const deleteOrderById = async(req,res)=>{
  const order = await OrderModel.findByIdAndDelete(req.params.id)
      .populate("addressId");
  res.json({message:'order is deleted' ,deletedOrder: order._id})
}

const trackOrderById =  async (req, res) => {
  try {
    const order = await OrderModel.findOne({
      publicOrderId: req.params.orderId,
    }).populate("addressId");
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({ order });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


// controllers/salesController.js

const getMonthlySales = async (req, res) => {
  try {
    const result = await OrderModel.aggregate([
      { $match: { paymentStatus: "verified" } },
      {
        $group: {
          _id: { $month: "$createdAt" },
          sales: { $sum: "$totalAmount" },
        },
      },
      { $sort: { "_id": 1 } },
    ]);

    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    const formattedData = result.map(item => ({
      month: months[item._id - 1],
      sales: item.sales,
    }));

    res.json(formattedData);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getMonthlySales };


module.exports = {getOrder , getOrderById , updateOrderById , trackOrderById,  getMonthlySales , deleteOrderById}