import React from "react";
import { motion } from "framer-motion";
import {
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  BarChart,
  Tooltip,
  Legend,
  Bar,
  Cell,
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

const SALES_CHANNEL_DATA = [
  { name: "Website", value: 45090 },
  { name: "Mobile App", value: 35090 },
  { name: "Marketplace", value: 15090 },
  { name: "Social Media", value: 25090 },
];

const SalesChannelChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700"
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100 ">
        Sales by Channel
      </h2>

      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={SALES_CHANNEL_DATA}>
            <CartesianGrid strokeDasharray="4 4" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55, 0.8)",
                borderColor: "#4b5563",
                borderRadius: 10,
              }}
              itemStyle={{ color: "#10B981" }}
            />
            <Legend />
            <Bar dataKey={"value"} fill="#8884d8">
              {SALES_CHANNEL_DATA.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesChannelChart;
