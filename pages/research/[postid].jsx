import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Container } from 'react-bootstrap';
import useGetHook from '../../src/components/CustomHooks/useGetHook';
import Footer from '../../src/components/Footer/Footer';
import Research from '../../src/components/Research/Research';
import SecondNavBar from '../../src/components/SecondNavbar/SecondNavBar';
import Wrap from '../../src/components/Wrap/Wrap';
import { APIS } from '../api/hello';
const Detail = () => {
  const router = useRouter();
  const { postid } = router.query;

  const {
    isLoading: singlePageLoader,
    data: singlePageData,
    isError,
  } = useGetHook({
    queryKey: `singlePageData${postid}`,
    url: `${APIS.posts}?categories=${postid}`,
  });

  return (
    <div>
      <Head>
        <title>Research:The Crypto Insider</title>
      </Head>
  
      <SecondNavBar />
   
      <Wrap />
      <Container>
        <Research
          singlePageLoader={singlePageLoader}
          singlePageData={singlePageData}
          height="300px"
        />
      </Container>
      <Footer />
    </div>
  );
};

export default Detail;
