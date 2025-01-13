import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import StatsDashboard from "@/components/card/StatsCard";

ChartJS.register(BarElement, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);
import UserData from "./UserData";

function AdminDashboard() {
  // Enhanced Bar Chart Data
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [65, 59, 80, 81, 56, 55, 8, 70],
        backgroundColor: "rgba(156, 163, 175, 0.8)", // text-gray-400
        hoverBackgroundColor: "rgba(156, 163, 175, 1)", // text-gray-400 full opacity
        borderColor: "rgba(156, 163, 175, 1)", // text-gray-400 border
        borderWidth: 2,
        borderRadius: 5,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "rgba(156, 163, 175, 1)", // text-gray-400 for legend
        },
      },
      tooltip: {
        enabled: true,
        titleColor: "black",
        bodyColor: "black",
        backgroundColor: "white",
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "rgba(156, 163, 175, 1)", // text-gray-400
          font: { size: 14, weight: "bold" },
        },
        title: {
          display: true,
          text: "Months",
          color: "rgba(156, 163, 175, 1)", // text-gray-400
          font: { size: 16, weight: "bold" },
        },
      },
      y: {
        grid: { display: true, color: "rgba(156, 163, 175, 0.2)" },
        ticks: {
          color: "rgba(156, 163, 175, 1)", // text-gray-400
          font: { size: 14, weight: "bold" },
        },
        title: {
          display: true,
          text: "Sales",
          color: "rgba(156, 163, 175, 1)", // text-gray-400
          font: { size: 16, weight: "bold" },
        },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [120, 190, 300, 500, 200, 300],
        borderColor: "rgba(156, 163, 175, 1)", // text-gray-400
        borderWidth: 2,
        pointBackgroundColor: "red", // Red dots
        pointBorderColor: "black",
        pointHoverBackgroundColor: "black",
        pointHoverBorderColor: "red", // Red hover border
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(156, 163, 175, 0.4)"); // text-gray-400 with opacity
          gradient.addColorStop(1, "rgba(156, 163, 175, 0.1)"); // text-gray-400 with lower opacity
          return gradient;
        },
        fill: true,
        tension: 0.6,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "rgba(156, 163, 175, 1)", // text-gray-400 for legend
        },
      },
      tooltip: {
        enabled: true,
        titleColor: "black",
        bodyColor: "black",
        backgroundColor: "white",
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "rgba(156, 163, 175, 1)", // text-gray-400
          font: { size: 14, weight: "bold" },
        },
        title: {
          display: true,
          text: "Months",
          color: "rgba(156, 163, 175, 1)", // text-gray-400
          font: { size: 16, weight: "bold" },
        },
      },
      y: {
        grid: { display: true, color: "rgba(156, 163, 175, 0.2)" },
        ticks: {
          color: "rgba(156, 163, 175, 1)", // text-gray-400
          font: { size: 14, weight: "bold" },
        },
        title: {
          display: true,
          text: "Revenue",
          color: "rgba(156, 163, 175, 1)", // text-gray-400
          font: { size: 16, weight: "bold" },
        },
      },
    },
    animation: {
      duration: 1500,
      easing: "easeOutQuart",
    },
  };

  return (
    <div className="mb-8 mt-2">
      <section className="bg-gray-800 rounded-sm">
        <h2 className="px-6 pt-6 text-2xl font-bold text-gray-400">Summary</h2>
        <StatsDashboard />
      </section>

      <section className="mt-4 bg-gray-800 rounded-sm p-6">
        <h2 className="text-2xl font-bold text-gray-400 mb-6">Analytics</h2>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg bg-gray-900 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-300 mb-4">Monthly Sales (Bar Graph)</h3>
            <div className="h-[300px]  sm:h-[400px]">
              <Bar data={barData} options={barOptions} />
            </div>
          </div>
          <div className="p-6 rounded-lg bg-gray-900 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-300 mb-4">Revenue Trends (Line Graph)</h3>
            <div className="h-[300px] sm:h-[400px]">
              <Line data={lineData} options={lineOptions} />
            </div>
          </div>
        </div>
      </section>

      <section className=" mt-8 relative bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-400 mb-6">User Details</h2>
        <UserData />
        <div className="flex justify-end mt-5">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-lg">
            View More
          </button>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
