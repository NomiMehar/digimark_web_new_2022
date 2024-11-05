import "../styles/globals.scss";
import "../styles/icomoon-fonts.css";
import "../styles/animation.css";
import Layout from "../components/Layout";
import React, { useEffect } from "react";
import AOS from "aos";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-98MNYYGR9R');
  }, []);

  return (
    <Layout>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-98MNYYGR9R"
        strategy="afterInteractive"
      />
      <Toaster />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
