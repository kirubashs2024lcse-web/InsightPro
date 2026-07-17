function DatasetInsights({ data }) {
  if (!data || data.length === 0) return null;

  const columns = Object.keys(data[0]);

  let missingValues = 0;

  data.forEach((row) => {
    columns.forEach((col) => {
      if (
        row[col] === "" ||
        row[col] === null ||
        row[col] === undefined
      ) {
        missingValues++;
      }
    });
  });

  return (
    <div className="row mt-4">
      <div className="col-md-4">
        <div className="card bg-danger text-white shadow">
          <div className="card-body">
            <h5>Missing Values</h5>
            <h2>{missingValues}</h2>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card bg-info text-white shadow">
          <div className="card-body">
            <h5>Columns</h5>
            <h2>{columns.length}</h2>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card bg-secondary text-white shadow">
          <div className="card-body">
            <h5>Records</h5>
            <h2>{data.length}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatasetInsights;