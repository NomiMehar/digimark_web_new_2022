import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
            integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        {/* <title>Digimark Developers | Your Innovative Solution Partner</title> */}
        <meta name="description" content="Your Innovative Solution Partner." />
        <link rel="shortcut icon" href="/assets/images/header/favicon.webp" type="image/x-icon" />
        <meta property="og:title" content="Digimark Developers" />
        <meta property="og:description" content="Your Innovative Solution Partner." />
        <meta name="twitter:title" content="Digimark Developers" />
        <meta name="twitter:description" content="Your Innovative Solution Partner." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
