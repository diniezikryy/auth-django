import { useState, useEffect } from "react";
import Layout from "../hoc/Layout";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { login, reset_register_success } from "../actions/auth";
import { Oval } from "react-loader-spinner";

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(reset_register_success());
    }
  }, []);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(login(username, password));
    }
  };

  if (typeof window !== "undefined" && isAuthenticated)
    router.push("/dashboard");

  return (
    <Layout title="Kanbanapp | Login" content="Login page for the kanbanapp">
      <h1 className="display-4 mt-5">Login Page</h1>
      <form className="bg-light p-5 mt-5 mb-5" onSubmit={onSubmit}>
        <h3>Log into your Account</h3>
        <div className="form-group">
          <label htmlFor="username" className="form-label mt-3">
            <strong>Username*</strong>
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Username*"
            onChange={onChange}
            value={username}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label mt-3">
            <strong>Password*</strong>
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password*"
            onChange={onChange}
            minLength={8}
            value={password}
            required
          />
        </div>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center mt-5">
            <Oval color="#00bfff" width={50} height={50} />
          </div>
        ) : (
          <button className="btn btn-primary mt-5">Log in</button>
        )}
      </form>
    </Layout>
  );
};

export default LoginPage;
