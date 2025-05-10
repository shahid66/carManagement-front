// components/Chart.tsx
"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import dynamic from "next/dynamic";

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type UserCountByMonth = {
  year: number;
  month: number; // 1 to 12
  role: "tenant" | "landlord";
  count: number;
};
type BFChartProps = {
  title: string;
  serverData: UserCountByMonth[];
};
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

const BFChartForAdmin = ({ title, serverData }: BFChartProps) => {
  // Chart data
  // const data = {
  //   labels: [ "January", "February", "March", "April", "May", "June",
  //       "July", "August", "September", "October", "November", "December"],
  //   datasets: [
  //     {
  //       label: "Total Requests",
  //       data: [65, 59, 80, 81, 56, 55, 40],
  //       fill: false,
  //       borderColor: "rgb(75, 192, 192)",
  //       tension: 0.1,
  //     },
  //   ],
  // };

  const mongoData = serverData || [];

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const tenantData = new Array(12).fill(0);
  const landlordData = new Array(12).fill(0);

  mongoData.forEach((entry) => {
    const index = entry.month - 1; // month is 1-indexed
    if (entry.role === "tenant") {
      tenantData[index] = entry.count;
    } else if (entry.role === "landlord") {
      landlordData[index] = entry.count;
    }
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Tenant",
        data: tenantData,
        borderColor: "rgb(54, 162, 235)",
        tension: 0.1,
      },
      {
        label: "Landlord",
        data: landlordData,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `Value: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="">
      <h2 className=" text-3xl text-center pt-4">{title}</h2>
      <Line className="p-4" data={data} options={options} />
    </div>
  );
};

export default BFChartForAdmin;
