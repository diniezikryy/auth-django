import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";

const Home: NextPage = () => {
  const { user } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);

  return (
    <div>
      <p>This is the homepage</p>
    </div>
  );
};

export default Home;
