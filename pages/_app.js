import Head from "next/head";
import Script from "next/script";
import Navbar from '../component/Navbar';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"></link>
    </Head>
    <Navbar>
      <Component {...pageProps} />
    </Navbar>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></Script>
  </>
}

export default MyApp;
