import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function Charts() {
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Datasets",
        data: [12, 18, 10, 20, 25],
      },
    ],
  };

  const pieData = {
    labels: ["CSV", "Excel", "JSON"],
    datasets: [
      {
        data: [45, 30, 25],
      },
    ],
  };

  return (
    <div className="row mt-5">
      <div className="col-md-8">
        <div className="card p-3">
          <h5>Dataset Upload Trend</h5>
          <Bar data={barData} />
        </div>
      </div>

      <div className="col-md-4">
        <div className="card p-3">
          <h5>File Types</h5>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
}

export default Charts;