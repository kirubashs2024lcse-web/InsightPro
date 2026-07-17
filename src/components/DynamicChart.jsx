import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function DynamicChart({ data }) {
  const [selectedColumn, setSelectedColumn] = useState("");

  if (!data || data.length === 0) return null;

  const columns = Object.keys(data[0]);

  const values = selectedColumn
    ? data.map((row) => row[selectedColumn])
    : [];

  const countMap = {};

  values.forEach((value) => {
    countMap[value] = (countMap[value] || 0) + 1;
  });

  const chartData = {
    labels: Object.keys(countMap),
    datasets: [
      {
        label: selectedColumn,
        data: Object.values(countMap),
        backgroundColor: "#0d6efd",
      },
    ],
  };

  return (
    <div className="card shadow mt-4">
      <div className="card-body">

        <h4>Column Analysis</h4>

        <select
          className="form-select mt-3"
          value={selectedColumn}
          onChange={(e) => setSelectedColumn(e.target.value)}
        >
          <option value="">Select Column</option>

          {columns.map((column) => (
            <option key={column}>{column}</option>
          ))}
        </select>

        {selectedColumn && (
          <div className="mt-4">
            <Bar data={chartData} />
          </div>
        )}

      </div>
    </div>
  );
}

export default DynamicChart;