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
        <title>TheCryptoInsider-Research</title>
        <meta property="og:title" content={"TheCryptoInsider-Research"} />
        <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
        <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta name="twitter:title" content={"TheCryptoInsider-Research"} />
        <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
        <meta property="fb:app_id" content={"1144829116095615"} />
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
