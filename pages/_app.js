import Head from 'next/head'
import Layout from '../components/layout'
import { SSRProvider } from 'react-bootstrap';
import '../styles/globals.scss'
import '/styles/Accordion.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>ICS Student Council</title>
      <link rel="icon" href="/assets/img/favicon.svg" />
    </Head>
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
    </>
  )
}

export default MyApp
