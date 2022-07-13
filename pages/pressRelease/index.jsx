import Head from 'next/head';
import React from 'react';
import { Container } from 'react-bootstrap'
import Footer from '../../src/components/Footer/Footer'
import PressRelease from '../../src/components/PressRelease/PressRelease';
import SecondNavBar from '../../src/components/SecondNavbar/SecondNavBar'
import TopNavbar from '../../src/components/TopNavbar/TopNavbar'
import Wrap from '../../src/components/Wrap/Wrap';

const index = () => {
  return (
    <>
      <Head>
        <title>Press Release:The Crypto Insider</title>
      </Head>
      <Container fluid>
        <TopNavbar />
        <hr />
        <SecondNavBar />
        <hr />
        <Wrap />
        <hr />
        <PressRelease />
        <Footer />
      </Container>
    </>
  );
};

export default index;
