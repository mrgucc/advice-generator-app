import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link href='https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap' rel='stylesheet' />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
