import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layout/AdminLayout';

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fPaymentStatus, setfPaymentStatus] = useState('')
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/payment'  ,{withCredentials:true});
          const fpayment = res.data.payment
       setPayments(fpayment)
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  const deletePayment = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/deletepaymentbyId/${id}`  ,{withCredentials:true}
      );

      // Optional: UI se remove karna
      setPayments((prev) =>
        prev.filter((payment) => payment._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };
 const updatePaymentStatus = async(id)=>{
   await axios.post(
      `http://localhost:3000/api/updatePaymentStatus/${id}`,
      {data: fPaymentStatus },
      {
        withCredentials: true,
      }
    );
 }




  if (loading) return <p className="text-center mt-10">Loading payments...</p>;

  return (
    <AdminLayout>

      <div className="p-8 ">
        <h1 className="text-2xl font-bold mb-6">User Payments</h1>
        {payments.length === 0 ? (
          <p>No payments found.</p>
        ) : (
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
            {payments.map((payment) => (
              <div key={payment._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-200">
                <p><strong>Order ID:</strong> {payment.orderId?._id}</p>

                <p><strong>Transaction ID:</strong> {payment.transactionId}</p>
                <p><strong>Sender Number:</strong> {payment.senderNumber}</p>
                <p><strong>Payment Method:</strong> {payment.paymentMethod}</p>
                <p><strong>Sender Name :</strong> {payment.orderId?.customerName}</p>
                {payment.screenshot && (
                  <img
                    src={`http://localhost:3000/Payment/${payment.screenshot}`}
                    alt="Payment Proof"
                    className="mt-3 w-full h-48 object-cover rounded"
                  />

                )}
                <div className='w-full h-20 flex items-center justify-between'>
                  <button onClick={() => {
                    deletePayment(payment._id)
                  }} className='text-lg bg-red-600 px-5 py-2 mt-4 rounded-full text-white'>Delete Payment</button>
                  <select  value={payment.paymentStatus}    onChange={(e)=>{
                        setfPaymentStatus(e.target.value)
                  }}  
                   className='w-1/3 px-2 py-2 rounded-lg border border-gray-600 outline-none' >
                    <option value="pending"> pending</option>
                    <option value="verified"> verified</option>
                    <option value="rejected"> rejected</option>
                  </select>
                  <button onClick={()=>{
                    updatePaymentStatus(payment._id)
                  }} className='px-5 py-2 rounded-full text-lg text-white bg-green-600'>Change payment status</button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Payments;
