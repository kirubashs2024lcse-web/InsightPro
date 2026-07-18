function DatasetSummary({ data }) {
  if (!data || data.length === 0) {
    return null;
  }

  const totalRows = data.length;
  const columnNames = Object.keys(data[0]);
  const totalColumns = columnNames.length;

  return (
    <>
      {/* Summary Cards */}
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card bg-primary text-white shadow">
            <div className="card-body text-center">
              <h5>Total Rows</h5>
              <h2>{totalRows}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card bg-success text-white shadow">
            <div className="card-body text-center">
              <h5>Total Columns</h5>
              <h2>{totalColumns}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Column Names */}
      <div className="card shadow mt-4">
        <div className="card-body">
          <h4>Column Names</h4>

          <div className="row mt-3">
            {columnNames.map((column, index) => (
              <div className="col-md-3 mb-2" key={index}>
                <span className="badge bg-secondary p-2 w-100">
                  {column}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DatasetSummary;