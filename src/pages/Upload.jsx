import { useState } from "react";
import Papa from "papaparse";

import Layout from "../components/Layout";
import DatasetSummary from "../components/DatasetSummary";
import DatasetInsights from "../components/DatasetInsights";
import DataPreview from "../components/DataPreview";
import UploadHistory from "../components/UploadHistory";
import DynamicChart from "../components/DynamicChart";

function Upload() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    setFile(selectedFile);

    Papa.parse(selectedFile, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  };

  return (
    <Layout>
      <h2>Upload Dataset</h2>

      <div className="card shadow p-4 mt-4">
        <input
          type="file"
          className="form-control"
          accept=".csv"
          onChange={handleFileChange}
        />

        {file && (
          <div className="mt-3">
            <strong>Selected File:</strong> {file.name}
          </div>
        )}
      </div>

      <DatasetSummary data={data} />

      <DatasetInsights data={data} />

      <UploadHistory file={file} />

      <DynamicChart data={data} />

      <DataPreview data={data} />
    </Layout>
  );
}

export default Upload;