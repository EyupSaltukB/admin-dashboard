import React from 'react';
import {motion} from "framer-motion";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const dailySalesData = [
    {name : "Mon" , sales : 1000},
    {name : "Tue" , sales : 1650},
    {name : "Wed" , sales : 1400},
    {name : "Thu" , sales : 1550},
    {name : "Fri" , sales : 1535},
    {name : "Sat" , sales : 1100},
    {name : "Sun" , sales : 575},
]

const COLORS = [
    "#6366F1",
    "#8B5CF6",
    "#EC4899",
    "#10B981",
    "#F59E0B",
    "#0CD7ED",
    "#FF0303",
  ];

const DailySalesTrend = () => {
  return (
    <motion.div 
    className='bg-gray bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
    initial={{opacity : 0 , y:  20}}
    animate={{opacity : 1 , y : 20 }}
    transition={{delay : 0.3}}
    >
        <h2 className='text-xl font-semibold text-gray-100 mb-4'>Daily Sales Trend</h2>
        <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={dailySalesData}>
            <CartesianGrid strokeDasharray="3 3" stroke='#374151'/>
            <XAxis dataKey="name" stroke='#9ca3af'/>
            <YAxis stroke='#9ca3af'/>
            <Tooltip
            contentStyle={{
                backgroundColor : "rgba(31, 41 ,55 ,0.8)",
                borderColor : "#4b5563"
            }}
            itemStyle={{
                color : "#e5e7eb"
            }}
            />
            <Bar dataKey="sales" fill='#10b981'/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default DailySalesTrend