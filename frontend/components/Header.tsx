import Link from "next/link";
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <span> | </span>
      <Link href="/login">
        <a>Login</a>
      </Link>

      {user ? <p>Logout</p> : <p>Not logged in...</p>}

      {user && <p>Hello, {user.username}</p>}
    </div>
  );
};

export default Header;
