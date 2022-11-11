import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/globals.scss'
import '/styles/Accordion.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>ICS Student Council</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
