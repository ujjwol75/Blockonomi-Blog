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
        <title>NFT:The Crypto Insider</title>
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
