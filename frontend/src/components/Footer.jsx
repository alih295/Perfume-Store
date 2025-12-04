import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
function Footer() {
  return (
      <footer className='w-full   flex items-center justify-between px-10 text-white h-20 bg-black'>
        <div className=''>
          <p>© 2025 MB Fragrance</p>
        </div>
        <div className='flex gap-5'>
          <span className='text-2xl    text-white cursor-pointer '>
            <FaFacebook />
          </span>
          <span className='text-2xl   text-white cursor-pointer '>
            <FaInstagram />
          </span>
          <span className='text-2xl   text-white cursor-pointer '>
            <RiWhatsappFill />
          </span>
        </div>
      </footer>
  )
}

export default Footer