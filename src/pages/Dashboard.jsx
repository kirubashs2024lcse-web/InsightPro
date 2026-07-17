import Layout from "../components/Layout";
import Card from "../components/Card";
import Charts from "../components/Charts";

import {
  FaDatabase,
  FaFileAlt,
  FaUsers,
  FaBrain,
} from "react-icons/fa";

function Dashboard() {
  return (
    <Layout>
      <h2 className="mb-4">InsightPro Dashboard</h2>

      <div className="row g-4">
        <div className="col-md-3">
          <Card
            title="Datasets"
            value="12"
            color="primary"
            icon={<FaDatabase />}
          />
        </div>

        <div className="col-md-3">
          <Card
            title="Reports"
            value="8"
            color="success"
            icon={<FaFileAlt />}
          />
        </div>

        <div className="col-md-3">
          <Card
            title="Models"
            value="5"
            color="warning"
            icon={<FaBrain />}
          />
        </div>

        <div className="col-md-3">
          <Card
            title="Users"
            value="25"
            color="danger"
            icon={<FaUsers />}
          />
        </div>
      </div>

      <Charts />
    </Layout>
  );
}

export default Dashboard;