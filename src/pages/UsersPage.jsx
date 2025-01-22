import Header from "../components/Header";
import { motion } from "framer-motion";
import StatCard from "../components/StatCard";
import { UserCheck, UserPlus, UserX, UsersIcon } from "lucide-react";
import UsersTable from "../components/UsersTable";
import UserGrowthChart from "../components/UserGrowthChart";
import UserActivityHeatmap from "../components/UserActivityHeatmap";
import UserDemographicsChart from "../components/UserDemographicsChart";

const userStats = {
    totalUsers : 19398,
    newUsersToday : 243,
    activeUsers : 9308,
    churnRate : "2.5%"
}

const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 ">
      <Header title="Users" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* stats */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCard 
          name="New Users Today" 
          icon={UserPlus} 
          value={userStats.newUsersToday}
          color="#8B5CF6" 
          />
          <StatCard
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#10B981"
          />
          <StatCard 
          name="Churn Rate" 
          icon={UserX} 
          value={userStats.churnRate} 
          color="#800303" 
          />
        </motion.div>

        <UsersTable/>

        {/* user chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthChart/>
          <UserActivityHeatmap/>
          <UserDemographicsChart/>
        </div>

      </main>
    </div>
  );
};

export default UsersPage;