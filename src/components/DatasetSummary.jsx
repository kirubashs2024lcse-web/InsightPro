function DatasetSummary({ data }) {
  if (!data || data.length === 0) {
    return null;
  }

  const totalRows = data.length;
  const totalColumns = Object.keys(data[0]).length;

  return (
    <div className="row mt-4">
      <div className="col-md-6">
        <div className="card bg-primary text-white shadow">
          <div className="card-body">
            <h5>Total Rows</h5>
            <h2>{totalRows}</h2>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card bg-success text-white shadow">
          <div className="card-body">
            <h5>Total Columns</h5>
            <h2>{totalColumns}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatasetSummary;