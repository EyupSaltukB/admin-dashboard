import React from "react";
import { motion } from "framer-motion";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";


const COLORS = [
  "#6366F1",
  "#8B5CF6",
  "#EC4899",
  "#10B981",
  "#F59E0B",
  "#0CD7ED",
  "#FF0303",
];

const categoryData = [
  { name: "Electronics", value: 6500 },
  { name: "Fashion", value: 4800 },
  { name: "Home", value: 5200 },
  { name: "Sports & Outdoors", value: 3100 },
  { name: "Health & Beauty", value: 2700 },
  { name: "Toys & Games", value: 1500 },
  { name: "Books", value: 2000 },
];

const SalesByCategoryChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        Sales by Category
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
                borderRadius : 20
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </motion.div>
  );
};

export default SalesByCategoryChart;
