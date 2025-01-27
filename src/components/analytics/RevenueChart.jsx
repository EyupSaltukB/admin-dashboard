import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Area,
  CartesianGrid,
  Legend,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 4000, target: 3800 },
  { month: "Feb", revenue: 3000, target: 4000 },
  { month: "Mar", revenue: 5000, target: 4000 },
  { month: "Apr", revenue: 4500, target: 4500 },
  { month: "May", revenue: 4000, target: 3000 },
  { month: "Jun", revenue: 4500, target: 3500 },
  { month: "Jul", revenue: 4000, target: 4000 },
  { month: "Aug", revenue: 5100, target: 5200 },
  { month: "Sep", revenue: 6900, target: 6700 },
  { month: "Oct", revenue: 8600, target: 8500 },
  { month: "Nov", revenue: 10800, target: 9800 },
  { month: "Dec", revenue: 9800, target: 10000 },
];

const RevenueChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">
          Revenue vs Target
        </h2>

        <select
          className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>

      <div style={{width : "100%" , height : 400}}>
        <ResponsiveContainer>
          <AreaChart data={revenueData}>
            <CartesianGrid strokeDasharray="4 3" stroke="#374150"/>
            <XAxis dataKey="month" stroke="#374150"/>
            <YAxis stroke="#374150"/>
            <Tooltip 
            contentStyle={{backgroundColor : "rgba(31, 41, 55, 0.8)", borderColor : "#374150"}}
            itemStyle={{color : "#e5e7eb"}}
            />
            <Legend />
            <Area type="monotone" dataKey="revenue" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3}/>
            <Area type="monotone" dataKey="target" stroke="#10b981" fill="#10b981" fillOpacity={0.3}/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default RevenueChart;
