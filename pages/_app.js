import "../styles/globals.scss";
import "../styles/icomoon-fonts.css";
import "../styles/animation.css";
import Layout from "../components/Layout";
import React, {useEffect} from "react";
import AOS from "aos";
import { SpeedInsights } from "@vercel/speed-insights/next"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
}, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
