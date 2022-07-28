import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../src/components/Footer/Footer';
import NewsHeading from '../../src/components/News/NewsHeading';
import SecondNavBar from '../../src/components/SecondNavbar/SecondNavBar';
import Wrap from '../../src/components/Wrap/Wrap';
import { APIS } from '../api/hello';
import NewsDetail from '../../src/components/DetailPage/NewsDetail';
import SocialShare from '../../src/components/SocialShare/SocialShare';
import { getApiData } from '../../src/components/Helper/AxiosInstance';
import Head from 'next/head';
import Script from 'next/script';


const Detail = (props) => {


  let urlPage = "https://thecryptoinsider.news/"
  if (typeof window !== "undefined") {
    // Client-side-only code
    urlPage = window.location.href;
  }


  return (
    <>
      <Head>
        <title>{props?.posts?.title}</title>
        <meta property="og:title" content={props?.posts?.title} />
        <meta property="og:image" content={props?.posts?.image} />
        <meta property="og:description" content={props?.posts?.description} />
        <meta name="twitter:title" content={props?.posts?.title} />
        <meta name="twitter:description" content={props?.posts?.secription} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
        <meta property="fb:app_id" content={"1144829116095615"} />
      </Head>

      <SecondNavBar />
      <Wrap />
      <Container>
        <Row>
          <Container style={{ marginLeft: '2%' }}>
            {/* <Button variant="primary" style={{ marginTop: '50px', fontSize: '12px' }}>ETHEREUM</Button> */}
            <NewsHeading title={props?.pageScrapped?.title || props?.posts?.title} created={props?.pageScrapped?.created || props?.posts?.created} />
          </Container>
          <div>
            <SocialShare
              url={urlPage}
              image={props?.posts?.image || props?.pageScrapped?.image}
              title={props?.posts?.title || props?.pageScrapped?.title}
              hashtag={props?.posts?.title || props?.pageScrapped?.title}
            />
          </div>
          <Container >
            <NewsDetail data={props?.posts?.detail ? props?.pageScrapped : props.posts} content="-1" height="250px" />
          </Container>
          <Script
            async
            defer
            crossorigin='anonymous'
            src='https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0'
            nonce='bgs68QfT'
          />
          <div>
            <div
              className='fb-comments'
              data-href='https://thecryptoinsider.news/'
              data-width=''
              data-numposts='5'
            ></div>
          </div>

        </Row>
      </Container>
      <Footer />

    </>
  );
};

export default Detail;
export async function getServerSideProps({ params }) {
  const pageScrappedResponse = await getApiData(`${APIS.scrappedPost}${params?.sId}`)
  const postsResponse = await getApiData(`${APIS.posts}${params?.sId}`)

  return {
    props: {
      pageScrapped: pageScrappedResponse?.data,
      posts: postsResponse?.data
    }
  }
}
