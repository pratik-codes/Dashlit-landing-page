import { useEffect } from "react";
import Router from "next/router";
import { initMP, logPageView } from "analytics";
import "swiper/swiper-bundle.min.css";
import "rc-drawer/assets/index.css";
import "typeface-dm-sans";

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initMP();
  }, []);

  return <Component {...pageProps} />;
}
