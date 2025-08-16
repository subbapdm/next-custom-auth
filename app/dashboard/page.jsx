"use client"

import CustomBarChart from "./_components/charts/CustomBarChart";
import CustomPieChart from "./_components/charts/CustomPieChart";

// import useCurrentUser from "@/hooks/useCurrentUser";

const barData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const pieData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const DashboardHome = () => {

  // const { user, loading, error } = useCurrentUser();

  

  return (
    <main className="h-full mt-5">
      <div className="p-5 bg-white rounded-md">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <p className="text-sm text-gray-500 my-2">
          Hello, {'user'} this is dashboard page. Where you can manage your data.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
        <div className="p-4 bg-white rounded-md">
          <div className="flex items-center justify-between mb-7">
            <h5 className="text-sm">Income Overview</h5>
          </div>
          <CustomBarChart barData={barData} />
        </div>
        <div className="p-4 bg-white rounded-md">
          <div className="flex items-center justify-between mb-7">
            <h5 className="text-sm">Expense Overview</h5>
          </div>
          <CustomPieChart pieData={pieData} />
        </div>
      </div>
    </main>
  );
};

export default DashboardHome;
