import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function PaymentVerification() {

  const { orderId } = useParams()

  const [senderNumber, setsenderNumber] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('jazzcash')
  const [transactionId, setTransactionId] = useState('')
  const [screenshot, setScreenshot] = useState('')

  const formData = new FormData();

  formData.append("orderId", orderId);
  formData.append("paymentMethod", paymentMethod);
  formData.append("transactionId", transactionId);
  formData.append("senderNumber", senderNumber);
  formData.append("screenshot", screenshot);
  const navigate = useNavigate()
  const [orderDets, setOrderDets] = useState([])


  const submitHandler = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3000/api/payment-verification', formData)
    navigate(`/order-tracking/${orderId}`);

  }





  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/order/${orderId}`
        );
        console.log("ORDER API RESPONSE:", res.data);

        setOrderDets(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (orderId) fetchOrder();
  }, [orderId]);

console.log(orderDets)
  return (
    <div className='w-full relative text-(--secondary) bg-(--bg) min-h-screen flex font-[simple] flex-col'>
      <Nav />

      <div className='w-[80vw]  p-10 flex gap-5 h-50  border rounded-lg mt-5 mx-auto border-(--elem)'>

        <div className='w-1/2 h-full flex flex-col gap-4'>
          <p>Status: Payment Pending
          </p>
          <p className='font-semibold text-red-600'>Total: PKR {orderDets.total}</p></div>
        <div className='w-1/2 h-full text-lg flex  items-center justify-between'>
          <h1 className='text-lg font-semibold'>Deliver To</h1>
          <p className='text-lg font-semibold'>Name:{orderDets.customerName} </p>
          <p>City: {orderDets?.addressId?.city}</p>
          <p>Phone: {orderDets?.addressId?.phone}</p>
        </div>

      </div>
      <div className='w-full text-center gap-10 p-10 flex justify-between items-center  flex-1'>


        <div className='w-1/2 h-1/2  flex  flex-col items-start justify-center'>
          <div>
            <h1 className='text-2xl font-semibold' >Payment Information</h1>
            <p className='text-lg text-center'>jazzCash/EasyPaisa</p>
          </div>
          <div className='w-100 h-100  flex flex-col gap-5  mt-10'>
            <div className=' w-100 justify-between border-b flex '>
              <p>account title</p> <p>Ali haider</p>
            </div>
            <div className=' w-100 justify-between border-b flex '>
              <p>Account Number</p> <p>03075133794</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            submitHandler(e)
          }}
          className='w-1/2 h-1/2  flex items-center justify-center gap-10 p-10 flex-col '>
          <select value={paymentMethod} onChange={(e) => {
            setPaymentMethod(e.target.value)
          }} className='w-full border px-4 py-2 rounded-lg' >
            <option disabled> select payment method</option>
            <option >Jazzcash</option>
            <option >easypaisa</option>
          </select>
          <input
            value={senderNumber} onChange={(e) => {
              setsenderNumber(e.target.value)
            }}
            className='w-full px-4 py-2 outline-none border-b shadow shadow-black/30 rounded-lg ' type="Number" placeholder='Enter Your Number Here' />
          <input
            value={transactionId} onChange={(e) => {
              setTransactionId(e.target.value)
            }}
            className='w-full px-4 py-2 outline-none border-b shadow shadow-black/30 rounded-lg ' type="Number" placeholder='Enter Transaction Id' />

          <div className='w-full h-20 border cursor-pointer relative border-dashed items-center justify-center flex rounded-lg'>
            <p className='text-lg capitalize text-gray-400'>Upload Screenshot Of your Payment</p>
            <input
              onChange={(e) => {
                setScreenshot(e.target.files[0])
              }}
              className='w-full h-full absolute opacity-0 cursor-pointer' type="file" />
          </div>
          <button className='w-full py-2 bg-(--secondary) hover:bg-(--elem) hover:text-(--secondary) text-(--elem) rounded-full transition-all duration-200 text-lg cursor-pointer'> Confirm </button>
        </form>

      </div>


      <Footer />
    </div>
  )
}

export default PaymentVerification
