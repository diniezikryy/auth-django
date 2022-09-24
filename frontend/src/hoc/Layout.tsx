import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestRefresh } from "../actions/auth";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Layout = ({ title, content, children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      // Refreshes on every dispatch
      dispatch(requestRefresh());
    }
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Head>

      <Navbar />
      <div className="container mt-5">{children}</div>
    </>
  );
};

Layout.defaultProps = {
  title: "Kanbanapp",
  content: "Task manager",
};

export default Layout;
