import React, { useState } from "react";
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";

const PRODUCT_DATA = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 120.99,
    stock: 50,
    sales: 200,
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 89.99,
    stock: 100,
    sales: 350,
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Wearables",
    price: 199.99,
    stock: 25,
    sales: 180,
  },
  {
    id: 4,
    name: "Coffee Maker",
    category: "Appliances",
    price: 75.49,
    stock: 40,
    sales: 120,
  },
  {
    id: 5,
    name: "Gaming Mouse",
    category: "Electronics",
    price: 49.99,
    stock: 80,
    sales: 220,
  },
  {
    id: 6,
    name: "Yoga Mat",
    category: "Fitness",
    price: 24.99,
    stock: 150,
    sales: 500,
  },
];

const ProductTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = PRODUCT_DATA.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );

    setFilteredProducts(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium mb-4 text-gray-100 ">
          Product List
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Products..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2 text-gray-400" size={24} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Sales
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200 flex gap-2 items-center">
                  <img
                    src="https://images.unsplash.com/photo-1512221472476-7e439affc029?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="product img"
                    className="size-10 rounded-full"
                  />
                  {product.name}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {product.category}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    ${product.price.toFixed(2)}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {product.stock}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {product.sales}
                </td>

                <td className="px-6 py-4 whitespace-normal text-sm text-gray-300">
                    <button className="text-indigo-500 hover:text-indigo-300 mr-2"> <Edit size={20}/> </button>
                    <button className="text-red-500 hover:text-red-200 mr-2"> <Trash2 size={20}/> </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductTable;
