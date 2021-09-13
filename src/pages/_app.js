import { Provider } from "react-redux";
import { useState } from "react";
import { store } from "../app/store";
import "../styles/globals.css";
import Head from "next/head";
import Router from "next/router";
import { Provider as AuthProvider } from "next-auth/client";
import NProgress from "nprogress";

const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    NProgress.start()
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done()
    setLoading(false);
  });

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <AuthProvider session={pageProps.session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AuthProvider>
    </>
  );
};

export default MyApp;
