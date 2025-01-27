import React from 'react'
import Header from '../components/common/Header';
import {motion } from "framer-motion"
import StatCard from '../components/common/StatCard';
import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react';
import ProductTable from '../components/products/ProductTable';
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart';
import SalesTrendChart from '../components/products/SalesTrendChart';

const ProductsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 '>
    <Header title="Products"/>

    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
            {/* stats */}
            <motion.div 
            className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial={{opacity : 0, y :20}}
            animate={{opacity : 1, y : 0}}
            transition={{duration : 1}}
            >
                <StatCard name="Total Products" icon={Package} value="$12.350" color="#6366F1"/>
                <StatCard name="Top Selling" icon={TrendingUp} value="1453" color="#8B5CF6"/>
                <StatCard name="Low Stock" icon={AlertTriangle} value="23" color="#800303"/>
                <StatCard name="Total Revenue" icon={DollarSign} value="$980.00" color="#10B981"/>
            </motion.div>

            {/* ProductTable */}
            <ProductTable/>

            {/* charts */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              <SalesTrendChart/>
              <CategoryDistributionChart/>
            </div>
            </main>
    </div>
  )
}

export default ProductsPage;