import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=DM+Sans" />
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Bungee" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}