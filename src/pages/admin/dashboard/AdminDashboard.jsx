import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
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
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        hoverBackgroundColor: "rgba(75, 192, 192, 1)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        borderRadius: 5,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to adjust its dimensions
    plugins: {
      legend: { display: true, position: "top" },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "rgba(255, 255, 255, 0.5)", // Bright white for better visibility
          font: { size: 14, weight: "bold" },
        },
        title: {
          display: true,
          text: "Months",
          color: "rgba(255, 255, 255, 0.5)",
          font: { size: 16, weight: "bold" },
        },
      },
      y: {
        grid: { display: true, color: "rgba(255, 255, 255, 0.2)" },
        ticks: {
          color: "rgba(255, 255, 255, 0.5)", // Bright white for better visibility
          font: { size: 14, weight: "bold" },
        },
        title: {
          display: true,
          text: "Sales",
          color: "rgba(255, 255, 255, 0.5)",
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
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "white",
        pointHoverBackgroundColor: "white",
        pointHoverBorderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(255, 99, 132, 0.4)");
          gradient.addColorStop(1, "rgba(54, 162, 235, 0.1)");
          return gradient;
        },
        fill: true,
        tension: 0.6, // Adds smoothness to the line
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to adjust its dimensions
    plugins: {
      legend: { display: true, position: "top" },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "rgba(255, 255, 255, 0.5)", // Bright white for better visibility
          font: { size: 14, weight: "bold" },
        },
        title: {
          display: true,
          text: "Months",
          color: "rgba(255, 255, 255, 0.5)",
          font: { size: 16, weight: "bold" },
        },
      },
      y: {
        grid: { display: true, color: "rgba(255, 255, 255, 0.5)" },
        ticks: {
          color: "rgba(255, 255, 255, 0.5)", // Bright white for better visibility
          font: { size: 14, weight: "bold" },
        },
        title: {
          display: true,
          text: "Revenue",
          color: "rgba(255, 255, 255, 0.5)",
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
    <div className="h-screen">
      <section className="bg-gray-800 rounded-sm">
        <h2 className="px-6 pt-6 text-2xl font-bold text-gray-400">Summary</h2>
        <StatsDashboard />
      </section>

      <section className="mt-4 rounded-sm p-6">
        <h2 className="text-2xl font-bold text-gray-400 mb-6">Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Add minimum height to chart containers */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-300 mb-4">Monthly Sales (Bar Graph)</h3>
            <div className="h-[300px] sm:h-[400px]"> {/* Add responsive height container */}
              <Bar data={barData} options={barOptions} />
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-300 mb-4">Revenue Trends (Line Graph)</h3>
            <div className="h-[300px] sm:h-[400px]"> {/* Add responsive height container */}
              <Line data={lineData} options={lineOptions} />
            </div>
          </div>
        </div>
      </section>

      {/* User Details Section */}
      <section className="mt-8  relative bg-gray-800 p-6   rounded-lg">
  <h2 className="text-2xl font-bold text-gray-400 mb-6">User Details</h2>
  <UserData />
  <div className="flex justify-end mt-5">
  <button className=" bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-lg">
    View More
  </button>
  </div>

</section>

    </div>
  );
}

export default AdminDashboard;
