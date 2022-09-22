import Head from "next/head";
import Navbar from "../components/Navbar";

const Layout = ({ title, content, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
    </Head>

    <Navbar />
    <div className="container">{children}</div>
  </>
);

Layout.defaultProps = {
  title: "Kanbanapp",
  content: "Task manager",
};

export default Layout;
