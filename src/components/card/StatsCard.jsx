/* eslint-disable react/prop-types */
import { Package, Heart, Users, DollarSign } from "lucide-react";

const StatsCard = ({ icon, value, title, change, changeColor }) => (
  <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col gap-4">
    <div className={`${changeColor} w-8 h-8`}>
      {icon}
    </div>
    <div>
      <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
      <p className="text-gray-300 text-lg ">{title}</p>
      <p className={`text-sm ${changeColor} mt-2`}>
        {change > 0 ? "+" : ""}{change}% from yesterday
      </p>
    </div>
  </div>
);

const StatsDashboard = () => {
  const stats = [
    {
      icon: <Package className="w-full h-full" />,
      value: "500",
      title: "Total Products",
      change: 8,
      changeColor: "text-emerald-400"
    },
    {
      icon: <Heart className="w-full h-full" />,
      value: "320",
      title: "Wishlisted Products",
      change: 10,
      changeColor: "text-orange-400"
    },
    {
      icon: <Users className="w-full h-full" />,
      value: "120",
      title: "Users",
      change: 2,
      changeColor: "text-pink-400"
    },
    {
      icon: <DollarSign className="w-full h-full" />,
      value: "$5k",
      title: "Sales",
      change: 3,
      changeColor: "text-blue-400"
    }
  ];

  return (
    <div className="w-full bg-adminBg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            icon={stat.icon}
            value={stat.value}
            title={stat.title}
            change={stat.change}
            changeColor={stat.changeColor}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsDashboard;