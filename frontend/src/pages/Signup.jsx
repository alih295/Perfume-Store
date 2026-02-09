import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Signup() {
   return (
      <div className='w-full h-screen text-(--text) flex-col flex items-center justify-center  bg-(--bg)'>
         <Link className='text-lg border border-(--yellow) px-4 py-2 rounded-lg absolute  top-5 left-5' to={'/'}>Continue to shop</Link>
      <h1 className='lg:text-6xl text-(--yellow) font-[heading] mb-10'>MB FRAGRENCE</h1>
         <div className='w-1/3 p-5 border border-(--black) rounded-lg '>
         
            <h1 className='text-2xl mb-5  font-semibold text-center'>Sign Up </h1>
            <form className='w-full flex flex-col items-center gap-5 ' >
               <input required className='w-full py-2 outline-none text-lg border rounded-lg px-4' type="text" placeholder='Full Name' />
               <input required className='w-full py-2 outline-none text-lg border rounded-lg px-4' type="email" placeholder='email' />
               <input required className='w-full py-2 outline-none text-lg border rounded-lg px-4' type="password" placeholder='Password' />
               <p>already Have an Account | <Link to={'/login'} className='text-(--yellow) cursor-pointer '>Login</Link>  </p>
               <input className='w-full text-(--bg) text-lg font-semibold cursor-pointer hover:scale-105 transition-all duration-150 py-2 rounded-full bg-(--yellow)' value={"Login"} type="submit" />
            </form>

         </div>
       

      </div>
   )
}

export default Signup