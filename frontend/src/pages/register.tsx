import { useState } from "react";
import Layout from "../hoc/Layout";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/auth";
import { Oval } from "react-loader-spinner";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const register_success = useSelector((state) => state.auth.register_success);
  const loading = useSelector((state) => state.auth.loading);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    re_password: "",
  });

  const { first_name, last_name, username, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(
        register(first_name, last_name, username, password, re_password)
      );
  };

  if (typeof window !== "undefined" && isAuthenticated) {
    router.push("/dashboard");
  }

  if (register_success) {
    router.push("/login");
  }

  return (
    <Layout
      title="Kanbanapp | Register"
      content="Register page for the kanbanapp"
    >
      <h1 className="display-4 mt-5">Register Page</h1>
      <form className="bg-light p-5 mt-5 mb-5" onSubmit={onSubmit}>
        <h3>Create an account</h3>
        <div className="form-group">
          <label htmlFor="first_name" className="form-label mt-5">
            <strong>First Name*</strong>
          </label>
          <input
            type="text"
            className="form-control"
            name="first_name"
            placeholder="First Name*"
            onChange={onChange}
            value={first_name}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name" className="form-label mt-3">
            <strong>Last Name*</strong>
          </label>
          <input
            type="text"
            className="form-control"
            name="last_name"
            placeholder="Last Name*"
            onChange={onChange}
            value={last_name}
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="re_password" className="form-label mt-3">
            <strong>Confirm Password*</strong>
          </label>
          <input
            type="password"
            className="form-control"
            name="re_password"
            placeholder="Confirm Password*"
            onChange={onChange}
            value={re_password}
            required
          />
        </div>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center mt-5">
            <Oval color="#00bfff" width={50} height={50} />
          </div>
        ) : (
          <button className="btn btn-primary mt-5">Create Account</button>
        )}
      </form>
    </Layout>
  );
};

export default RegisterPage;
