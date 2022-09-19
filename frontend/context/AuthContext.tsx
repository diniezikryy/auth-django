import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";

const AuthContext = createContext("Default Value");

export default AuthContext;

export const AuthProvider = ({ children }: any) => {
  const [authTokens, setAuthTokens] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setAuthTokens(
      localStorage.getItem("authTokens")
        ? JSON.parse(localStorage.getItem("authTokens"))
        : null
    );
  }, []);

  const router = useRouter();

  const loginUser = async (e: any) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });

    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      router.push("/");
    } else {
      alert("Something went wrong!");
    }
  };

  const contextData = {
    loginUser: loginUser,
    user: user,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
