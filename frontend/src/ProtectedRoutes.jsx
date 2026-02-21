import React, { useState } from 'react'
import {motion} from 'motion/react'
import { Link, useNavigate } from 'react-router-dom'

function ProtectedRoutes({children}) {
   const Navigate = useNavigate()



const handleLogin = ()=>{
   Navigate('/login')
}

   const [login, setLogin] = useState(false)



if(!login){
   return  <div className='w-full gap-5 h-screen flex items-center justify-center flex-col bg-gray-300'> <h1 className='text-xl text'>Please login</h1> 
      <motion.button  whileHover={{scale:1.06 , boxShadow:'2px 2px 10px rgba(0,0,0,0.7)'}} 
      whileTap={{scale:0.9 , opacity:0.7}}
       onClick={handleLogin}
      
      className='px-8  py-3 bg-red-600 rounded-full  text-2xl font-semibold text-white cursor-pointer'> Login</motion.button>

         <Link className='text-gray500 text-xl' to={'/'}>explore our items</Link>

      </div>
}


  return (
    <div> {children}</div>
  )
}

export default ProtectedRoutes