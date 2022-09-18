import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
      </AuthProvider>
    </div>
  );
}

export default MyApp;
