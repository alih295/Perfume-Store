const AddressModel = require("../Models/AddressModel");

const Address = async (req, res) => {
  const userId = req.user;
  const { fullname, country, streetAddress, city, phone, email } = req.body;
  const address = await AddressModel.findOne({ user: userId });
  if (!address) {
    await AddressModel.create({
      user: userId,
      fullname,
      country,
      streetAddress,
      city,
      phone,
      email,
    });
    res.status(201).json({ message: "addres is saved" });
  }

  res.status(200).json(address);
};

module.exports = {
  Address,
};
