"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title,
  Filler,
} from "chart.js";

// Register necessary components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title,
  Filler
);

const LineChart = () => {
  const chartData = {
    labels: ["12:00", "13:00", "14:00", "15:00", "16:00"], 
    datasets: [
      {
        label: "ETH Bids",
        data: [1.2, 1.5, 2.0, 2.55, 3.1],
        borderColor: "#41F5C0", 
        pointBackgroundColor: "#41F5C0",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#41F5C0",
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor:
          "linear-gradient(to right, rgba(118, 222, 204, 1), rgba(118, 222, 204, 0))",
        padding: 10,
      },
    },
    scales: {
      x: {
        type: "category",
        grid: {
          drawBorder: true,
          color: "rgba(255, 255, 255, 0.3)",
          borderDash: [5, 5],
          lineWidth: 1, // Optional: ensure the grid lines are visible
          display: true, // Ensure grid is displayed
        },
        ticks: { color: "#B0B3B8" },
      },
      y: {
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div
      style={{ padding: "10px" }}
      className="xl:w-[495px] w-[400px] h-[227px]  p-4 rounded-lg shadow-lg"
    >
      <h3 className="text-[rgba(119,128,161,1)] text-[14px] inter leading-[21px]">
        History of bids (12 people are bidding)
      </h3>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
