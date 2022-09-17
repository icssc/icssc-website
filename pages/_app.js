import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous" />
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=DM+Sans" />
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Bungee" />
    </Head>
    <title>ICS Student Council</title>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
