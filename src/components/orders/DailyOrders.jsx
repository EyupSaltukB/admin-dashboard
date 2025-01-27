import React from "react";
import { motion } from "framer-motion";
import { CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, LineChart } from "recharts";

const dailyOrdersData = [
  { date: "01/22", orders: 45 },
  { date: "01/23", orders: 55 },
  { date: "01/24", orders: 65 },
  { date: "01/25", orders: 45 },
  { date: "01/26", orders: 65 },
  { date: "01/27", orders: 85 },
  { date: "01/28", orders: 75 },
];

const DailyOrders = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Daily Orders</h2>
      <div style={{width : "100%" , height : 300}}>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={dailyOrdersData}>
            <CartesianGrid strokeDasharray="3 5" stroke="#4B5563" />
            <XAxis dataKey={"date"} stroke="#9CA3AF"/>
            <YAxis stroke="#9CA3AF" />
            <Tooltip
            contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor : "#4B5563"
            }}
            itemStyle={{color : "#E5E7EB"}}
            />
            <Legend/>
            <Line type="monotone" dataKey="orders" stroke="#885cf6" strokeWidth={2}/>
          </LineChart>
        </ResponsiveContainer>
      </div>  
      
    </motion.div>
  );
};

export default DailyOrders;
