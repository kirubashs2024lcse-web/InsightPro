import { useState } from "react";
import Papa from "papaparse";

function DataPreview({ data }) {
  const [search, setSearch] = useState("");

  if (!data || data.length === 0) {
    return null;
  }

  const headers = Object.keys(data[0]);

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase())
    )
  );

  const downloadCSV = () => {
    const csv = Papa.unparse(filteredData);

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "filtered_dataset.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="card shadow mt-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Dataset Preview</h4>

          <div className="d-flex gap-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              className="btn btn-success"
              onClick={downloadCSV}
            >
              Export CSV
            </button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                {headers.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredData.slice(0, 10).map((row, index) => (
                <tr key={index}>
                  {headers.map((header) => (
                    <td key={header}>{row[header]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataPreview;