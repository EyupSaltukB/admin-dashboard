import React from 'react';
import Header from '../components/common/Header';
import {  motion} from "framer-motion";
import { CheckCircle, Clock, DollarSign, ShoppingBag } from 'lucide-react';
import StatCard from '../components/common/StatCard';
import DailyOrders from '../components/orders/DailyOrders';
import OrderDistribution from '../components/orders/OrderDistribution';
import OrdersTable from '../components/orders/OrdersTable';

const orderStats = {
    totalOrders  : "1,234",
    pendingOrders : "54",
    completedOrders : "1180",
    totalRevenue  : "$ 98,345"
}

const OrdersPage = () => {
  return (
    <div className='flex-1 relative z-10 overflow-auto'>
        <Header title={"Orders"}/>

        <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
            <motion.div
            className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial={{opacity  : 0 , y : 20}}
            animate={{opacity : 1, y :0 }}
            transition={{delay : 1}}
            >
                <StatCard name="Total Orders" icon={ShoppingBag} value={orderStats.totalOrders} color="#6366F1"/>
                <StatCard name="Pending Orders" icon={Clock} value={orderStats.pendingOrders} color="#f69e0b"/>
                <StatCard name="Completed Orders" icon={CheckCircle} value={orderStats.completedOrders} color="#EC4899"/>
                <StatCard name="Total Revenue" icon={DollarSign} value={orderStats.totalRevenue} color="#10B981"/>
            </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
            <DailyOrders/>
            <OrderDistribution/>
        </div>
        <OrdersTable/>
  
        </main>
    </div>
  )
}

export default OrdersPage