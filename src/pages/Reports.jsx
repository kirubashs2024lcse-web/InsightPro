import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import API from "../services/api";

function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await API.get("/api/reports");
      setReports(response.data.reports);
    } catch (error) {
      console.error(error);
      alert("Failed to load reports");
    }
  };

  return (
    <Layout>
      <div className="container-fluid">
        <h2 className="mb-4">Reports</h2>

        <div className="card shadow">
          <div className="card-body">

            <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>File Name</th>
                  <th>Original Name</th>
                  <th>Rows</th>
                  <th>Columns</th>
                  <th>File Size</th>
                </tr>
              </thead>

              <tbody>
                {reports.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center">
                      No Reports Found
                    </td>
                  </tr>
                ) : (
                  reports.map((report, index) => (
                    <tr key={report._id}>
                      <td>{index + 1}</td>
                      <td>{report.fileName}</td>
                      <td>{report.originalName}</td>
                      <td>{report.rows}</td>
                      <td>{report.columns}</td>
                      <td>{(report.fileSize / 1024).toFixed(2)} KB</td>
                    </tr>
                  ))
                )}
              </tbody>

            </table>

          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Reports;