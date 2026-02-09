import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
const navigate = useNavigate()

const handleSubmit = async (e)=>{
   e.preventDefault();
try{
 const res =  await axios.post('http://localhost:3000/api/admin/login' , {email ,password}, {withCredentials:true})
if(!res){
  alert(err)
}
navigate('/dashboard')

} catch(err){
  setErr(err.message || 'invalid credentials')
}





}


  return (
    <div className="w-full h-screen flex items-center justify-center bg-black/90">
      {/* Blur Card */}
      <div
        className="lg:w-1/3 w-full  backdrop-blur-xl  bg-white/10 border border-white/20 rounded-2xl shadow-xl"
      >
         <form onSubmit={(e)=>{
               handleSubmit(e)
         }}  className=" p-5 flex w-full flex-col gap-5 items-center h-full justify-center" >
            <input value={email} onChange={(e)=>{
                  setEmail(e.target.value)
            }} 
              type="email" required placeholder="Enter Login Email" className="text-lg w-full px-4 py-2 outline-none rounded-lg bg-white" />
            <input value={password} onChange={(e)=>{
                  setPassword(e.target.value)
            }}
              type="password" required placeholder="Enter Password" className="text-lg w-full px-4 py-2 outline-none rounded-lg bg-white" />
            <input  type="submit" required placeholder="Enter Login Email" className="text-lg w-full px-4 py-2 outline-none rounded-lg bg-gray-900 text-white" />
         </form>


      </div>
    </div>
  );
}

export default Login;
