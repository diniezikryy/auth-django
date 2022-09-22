import Layout from "../hoc/Layout";

const HomePage = () => (
  <Layout>
    <div className="p-5 bg-light rounded-3">
      <div className="container-fluid py-3">
        <h1 className="display-5 fw-bold">Homepage</h1>
        <p className="fs-4 mt-3">Welcome to kanban app site</p>
      </div>
    </div>
  </Layout>
);

export default HomePage;
