const jwt = require('jsonwebtoken')



const adminLogin = async(req,res)=>{
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

   const {email , password } = req.body
   console.log(email,password)
     if (email !== ADMIN_EMAIL) {
    return res.status(401).json({ message: "Invalid email" });
  }

  const isMatch = password === ADMIN_PASSWORD; 
  // OR bcrypt.compare if hashed

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" });
  }


  const token = jwt.sign(
    {  role: "admin" },
    process.env.JWT_SECRET
   
  );

  res.cookie("token" , token)

 return res.json({
    message: "Admin login successful",
  });

}

module.exports = adminLogin