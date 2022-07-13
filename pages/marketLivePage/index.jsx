import Head from 'next/head';
import React from 'react';
import MarketLivePage from '../../src/components/MarketLivePage/MarketLivePage';
import SecondNavBar from "../../src/components/SecondNavbar/SecondNavBar";
import TopNavbar from "../../src/components/TopNavbar/TopNavbar";
import Wrap from "../../src/components/Wrap/Wrap";
import { Container } from "react-bootstrap";
import Footer from '../../src/components/Footer/Footer';


const index = () => {
  return (
    <div>
      <Head>
        <title>Live Market:The Crypto Insider</title>
      </Head>
      <Container fluid>
        <TopNavbar />
        <hr className="hrline" />
        <SecondNavBar />
        <hr />
        <Wrap />
        <MarketLivePage />
        <Footer />
      </Container>
    </div>
  );
};

export default index;
