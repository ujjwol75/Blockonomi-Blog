import Head from 'next/head';
import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../src/components/Footer/Footer';
import NFTComponent from '../../src/components/NFT/NFT';
import SecondNavBar from '../../src/components/SecondNavbar/SecondNavBar';
import Wrap from '../../src/components/Wrap/Wrap';
const Nft = () => {
  return (
    <div>
      <Head>
        <title>TheCryptoInsider-NFT News</title>
        <meta property="og:title" content={" TheCryptoInsider-NFT News"} />
        <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
        <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta name="twitter:title" content={" TheCryptoInsider-NFT News"} />
        <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
        <meta property="fb:app_id" content={"1144829116095615"} />
      </Head>

      <SecondNavBar />

      <Wrap />
      <Container>
        <NFTComponent />
      </Container>
      <Footer />
    </div>
  );
};

export default Nft;
