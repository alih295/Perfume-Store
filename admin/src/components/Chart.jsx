import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

const Chart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMonthlySales = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/monthly-sales", {
        withCredentials: true, // cookie-based auth if needed
      });
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error.response?.data || error.message);
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchMonthlySales();

    // Auto-refresh every 10 seconds
    const interval = setInterval(fetchMonthlySales, 10000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  if (loading) {
    return <p>Loading chart...</p>;
  }

  return (
    <div className="w-full h-[350px] bg-white mt-10 shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-3">Monthly Sales</h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#4F46E5"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
