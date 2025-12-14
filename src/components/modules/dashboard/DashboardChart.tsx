// "use client";

// import Chart from "react-apexcharts";
// import { ApexOptions } from "apexcharts";

// export default function DashboardCharts() {
//   /* ---------------- Blogs Bar Chart ---------------- */
//   const blogOptions: ApexOptions = {
//     chart: {
//       type: "bar",
//       height: 300,
//     },
//     xaxis: {
//       categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     },
//     title: {
//       text: "Blogs Created",
//     },
//   };

//   const blogSeries = [
//     {
//       name: "Blogs",
//       data: [12, 18, 9, 25, 15, 30],
//     },
//   ];

//   /* ---------------- Users Pie Chart ---------------- */
//   const userOptions: ApexOptions = {
//     chart: {
//       type: "pie",
//     },
//     labels: ["Active Users", "Inactive Users", "Admins", "Editors"],
//     title: {
//       text: "User Distribution",
//     },
//   };

//   const userSeries = [45, 25, 20, 10];

//   /* ---------------- Projects Line Chart ---------------- */
//   const projectOptions: ApexOptions = {
//     chart: {
//       type: "line",
//       height: 300,
//     },
//     xaxis: {
//       categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     },
//     title: {
//       text: "Projects Growth",
//     },
//   };

//   const projectSeries = [
//     {
//       name: "Projects",
//       data: [2, 4, 6, 5, 8, 10],
//     },
//   ];

//   /* ---------------- Activity Area Chart ---------------- */
//   const activityOptions: ApexOptions = {
//     chart: {
//       type: "area",
//       height: 300,
//     },
//     xaxis: {
//       categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     },
//     title: {
//       text: "Overall Activity",
//     },
//   };

//   const activitySeries = [
//     {
//       name: "Blogs",
//       data: [10, 20, 15, 30, 25, 40],
//     },
//     {
//       name: "Projects",
//       data: [5, 8, 12, 10, 15, 20],
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 min-h-screen md:grid-cols-2 gap-6 pt-5">
//       <Chart
//         options={blogOptions}
//         series={blogSeries}
//         type="bar"
//         height={350}
//       />
//       <Chart
//         options={userOptions}
//         series={userSeries}
//         type="pie"
//         height={350}
//       />
//       <Chart
//         options={projectOptions}
//         series={projectSeries}
//         type="line"
//         height={350}
//       />
//       <Chart
//         options={activityOptions}
//         series={activitySeries}
//         type="area"
//         height={350}
//       />
//     </div>
//   );
// }
"use client";

import { useAuth } from "@/providers/AuthProvider";

const DashboardChart = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="pt-20 p-6 rounded-lg mb-6 text-center flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold">Welcome back, {user?.name}!</h1>
        <p className="mt-2 text-lg">
          Here is a quick overview of your dashboard.
        </p>
      </div>
    </div>
  );
};

export default DashboardChart;
