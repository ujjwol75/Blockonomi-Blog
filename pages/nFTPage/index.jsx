import Head from 'next/head';
import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../src/components/Footer/Footer';
import NFTComponent from '../../src/components/NFT';
import SecondNavBar from '../../src/components/SecondNavbar/SecondNavBar';
import TopNavbar from '../../src/components/TopNavbar/TopNavbar';
import Wrap from '../../src/components/Wrap/Wrap';
const Nft = () => {
  return (
    <div>
      <Head>
        <title>NFT:Inside Crypto</title>
      </Head>
      <TopNavbar />
      <hr className="hrline" />
      <SecondNavBar />
      <hr />
      <Wrap />
      <Container>
        <NFTComponent />
      </Container>
      <Footer />
    </div>
  );
};

export default Nft;
