function UploadHistory({ file }) {
  if (!file) return null;

  const fileSize = (file.size / 1024).toFixed(2);

  return (
    <div className="card shadow mt-4">
      <div className="card-body">
        <h4>Recent Upload</h4>

        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>File Name</th>
              <th>Type</th>
              <th>Size (KB)</th>
              <th>Upload Time</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{file.name}</td>
              <td>{file.type || "CSV File"}</td>
              <td>{fileSize}</td>
              <td>{new Date().toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UploadHistory;