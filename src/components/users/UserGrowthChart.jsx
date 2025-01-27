import React from "react";
import { motion } from "framer-motion";
import {
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  LineChart,
} from "recharts";

const userGrowthData = [
    { month: "Jan", users: 1000 },
    { month: "Feb", users: 1550 },
    { month: "Mar", users: 1590 },
    { month: "Apr", users: 2900 },
    { month: "May", users: 2090 },
    { month: "Jun", users: 3090 },
    { month: "Jul", users: 3780 },
    { month: "Aug", users: 3200 },
    { month: "Sep", users: 4100 },
    { month: "Oct", users: 4650 },
    { month: "Nov", users: 4900 },
    { month: "Dec", users: 5400 },
  ];
  

const UserGrowthChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-100 "> Sales Trend </h2>
      <div style={{width : "100%", height : 300}}>
        <ResponsiveContainer>
          <LineChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="4 4" stroke="#4B5563" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55, 0.8)",
                borderColor: "#4b5563",
                borderRadius : 10
              }}
              itemStyle={{ color: "#0CD7ED" }}
            />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#0CD7ED" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default UserGrowthChart;