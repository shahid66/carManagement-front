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

export type UserCountByMonth = {
  year: number;
  month: number; // 1 to 12

  count: number;
};
type BFChartProps = {
  title: string;
  serverData: UserCountByMonth[];
};

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

const BFChart = ({ title, serverData }: BFChartProps) => {
  // Chart data
  console.log(serverData);
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

  const mongoData = serverData || [];

  // Initialize an array of 12 zeros for each month
  const monthlyData = new Array(12).fill(0);

  // Fill in the data from the result
  mongoData.forEach(({ month, count }) => {
    monthlyData[month - 1] = count; // month is 1-indexed
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Total Requests",
        data: monthlyData,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
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

  // Debugging line to check the data being passed to the chart
  return (
    <div className="">
      <h2 className=" text-3xl text-center pt-4">{title}</h2>
      <Line className="p-4" data={data} options={options} />
    </div>
  );
};

export default BFChart;
