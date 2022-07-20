import Head from 'next/head';
import React from 'react';
import MarketLivePage from '../../src/components/MarketLivePage/MarketLivePage';
import SecondNavBar from "../../src/components/SecondNavbar/SecondNavBar";
import Wrap from "../../src/components/Wrap/Wrap";
import { Container } from "react-bootstrap";
import Footer from '../../src/components/Footer/Footer';


const index = () => {
  return (
    <div>
      <Head>
        <title>TheCryptoInsider - Market Updates</title>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <meta property="og:title" content={" TheCryptoInsider - Market Updates"} />
        <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
        <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta name="twitter:title" content={" TheCryptoInsider - Market Updates"} />
        <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
        <meta property="fb:app_id" content={"1144829116095615"} />
      </Head>
      <Container fluid>

        <SecondNavBar />
        <Wrap />
        <MarketLivePage />
        <Footer />
      </Container>
    </div>
  );
};

export default index;
