import { useState } from "react";
import Papa from "papaparse";

import API from "../services/api";

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


  // Send file to Backend API
  const uploadFile = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await API.post("/api/upload", formData, {
         headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);

      alert("Dataset uploaded successfully!");

    } catch (error) {
      console.log(error);

      alert("Dataset upload failed!");
    }
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


        <button
          className="btn btn-primary mt-3"
          onClick={uploadFile}
        >
          Upload Dataset
        </button>


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

//📊 Dataset Summary

//Rows          : 891
//Columns       : 12

//Column Names:
//✔ PassengerId
//✔ Survived
//✔ Pclass
//✔ Name
//✔ Age
//...