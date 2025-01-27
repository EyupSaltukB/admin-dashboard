import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const salesData = [
  { name: "Jan", Sales: 4800 },
  { name: "Feb", Sales: 3000 },
  { name: "Mar", Sales: 3200 },
  { name: "Apr", Sales: 3700 },
  { name: "May", Sales: 3300 },
  { name: "Jun", Sales: 2900 },
  { name: "Jul", Sales: 3400 },
  { name: "Aug", Sales: 3100 },
  { name: "Sep", Sales: 3950 },
  { name: "Oct", Sales: 4550 },
  { name: "Nov", Sales: 5750 },
  { name: "Dec", Sales: 5250 },
];

const SalesOverviewChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 5" stroke="#4B5563" />
            <XAxis dataKey={"name"} stroke="#9CA3AF"/>
            <YAxis stroke="#9CA3AF" />
            <Tooltip
            contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor : "#4B5563"
            }}
            itemStyle={{color : "#E5E7EB"}}
            />
                <Line 
                type="monotone"
                dataKey="Sales"
                stroke="#6366F1"
                strokeWidth={3}
                dot={{fill : "#6366F1", strokeWidth :2, r: 6}}
                activeDot={{r: 4, strokeWidth: 3}}
                />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;