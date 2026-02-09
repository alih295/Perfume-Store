import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
function Footer() {
  return (
      <div className='w-full lg:h-100 mt-10  bg-(--secondary) text-white  '>
         <div className='w-full px-10 h-[80%] flex lg:flex-row flex-col lg:items-center lg:justify-evenly gap-10  border-b   border-(--white)  '>
            <div className='lg:w-[22%] w-full flex flex-col  items-center
       gap-5 justify-center   h-full'>
               <img className='w-[90%] h-[60%] object-contain ' src="./images/logo.png" alt="" />
               <h1 className='text-lg font-semibold uppercase'>Follow us on</h1>
               <div className='w-full flex text-2xl items-center justify-center  gap-5'>
                  <span><FaFacebook /> </span>
                  <span><FaInstagram /> </span>
                  <span><RiWhatsappFill /> </span>
               </div>
            </div>
            <div className='lg:w-[22%] w-full capitalize  flex flex-col  items-start gap-5 justify-center   h-full'>
              <h1 className='text-lg' >coustomer service</h1>
               <ul>
                  <li>my accounts</li>
                  <li>FAQS</li>
                  <li>cash on delivery</li>
                  <li>contact us</li>
                  <li>store locator</li>
               </ul>
            </div>
           <div className='lg:w-[22%] w-full capitalize mb-5  flex flex-col  items-start gap-5 justify-center   h-full'>
              <h1 className='text-lg' >Help & Information</h1>
               <ul>
                  <li>About Us</li>
                  <li>Shipping & Exchange Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Payment Information</li>
                  <li>Credit/Debit Card Policy</li>
               </ul>
            </div>
           
         </div>
         <div className='w-full  h-20 flex items-center justify-center '> <p className='text-center'>&copy; 2025, MB FRAGRENCE All Rights Reserved - Powered By Ali Haider</p></div>
      </div>
  )
}

export default Footer