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

const COLORS = [
  "#6366F1",
  "#8B5CF6",
  "#EC4899",
  "#10B981",
  "#F59E0B",
  "#0CD7ED",
  "#FF0303",
];

const salesData = [
    { month: "Jan", sales: 4500 },
    { month: "Feb", sales: 3550 },
    { month: "Mar", sales: 1590 },
    { month: "Apr", sales: 2900 },
    { month: "May", sales: 2090 },
    { month: "Jun", sales: 5090 },
    { month: "Jul", sales: 4780 },
    { month: "Aug", sales: 3200 },
    { month: "Sep", sales: 4100 },
    { month: "Oct", sales: 3650 },
    { month: "Nov", sales: 4900 },
    { month: "Dec", sales: 5400 },
  ];
  

const SalesTrendChart = () => {
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
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="4 4" stroke="#4B5563" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55, 0.8)",
                borderColor: "#4b5563",
                borderRadius : 10
              }}
              itemStyle={{ color: "#10B981" }}
            />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8B5CF6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesTrendChart;