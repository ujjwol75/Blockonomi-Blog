import Head from 'next/head';
import React from 'react';
import { Container } from 'react-bootstrap'
import Footer from '../../src/components/Footer/Footer'
import PressRelease from '../../src/components/PressRelease/PressRelease';
import SecondNavBar from '../../src/components/SecondNavbar/SecondNavBar'
import Wrap from '../../src/components/Wrap/Wrap';

const index = () => {
  return (
    <>
      <Head>
        <title>Press Release:The Crypto Insider</title>
      </Head>
      <Container fluid>
   
        <SecondNavBar />
        <Wrap />
        <hr />
        <PressRelease />
        <Footer />
      </Container>
    </>
  );
};

export default index;
