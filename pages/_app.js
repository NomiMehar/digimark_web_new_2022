import "../styles/globals.scss";
import "../styles/icomoon-fonts.css";
import "../styles/animation.css";
import Layout from "../components/Layout";
import React, {useEffect} from "react";
import AOS from "aos";
import { Insights } from "./insights";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
}, [])

  return (
    <Layout>
      <Component {...pageProps} />
      <Insights />
    </Layout>
  );
}

export default MyApp;
