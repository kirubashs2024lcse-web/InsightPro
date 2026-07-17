import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Dashboard() {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1">
        <Navbar />

        <div className="container mt-4">
          <h2 className="mb-4">InsightPro Dashboard</h2>

          <div className="row g-4">
            <div className="col-md-3">
              <Card title="Datasets" value="12" color="primary" />
            </div>

            <div className="col-md-3">
              <Card title="Reports" value="8" color="success" />
            </div>

            <div className="col-md-3">
              <Card title="Models" value="5" color="warning" />
            </div>

            <div className="col-md-3">
              <Card title="Users" value="25" color="danger" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;