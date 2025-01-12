import StatsDashboard from "@/components/card/StatsCard";

function AdminDashboard() {
  return (
    <div className=" h-screen">
      <section className="bg-gray-800 rounded-sm ">
        <h2 className="px-6 pt-6 text-2xl font-bold  text-gray-400">Summary</h2>
        <StatsDashboard />
      </section>
    </div>
  );
}

export default AdminDashboard;
