
import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import Footer from '../../src/components/Footer/Footer';
import NewsHeading from '../../src/components/News/NewsHeading';
import SecondNavBar from '../../src/components/SecondNavbar/SecondNavBar';
import TopNavbar from '../../src/components/TopNavbar/TopNavbar';
import Wrap from '../../src/components/Wrap/Wrap';
import { APIS } from '../api/hello';
import NewsDetail from '../../src/components/DetailPage/NewsDetail';
import SocialShare from '../../src/components/SocialShare/SocialShare';
import { getApiData } from '../../src/components/Helper/AxiosInstance';
import Head from 'next/head';


const Detail = (props) => {


  let urlPage = "https://thecryptoinsider.news/"
  if (typeof window !== "undefined") {
    // Client-side-only code
    urlPage = window.location.href;
  }


  return (
    <>
      <Head>
        <title>{props?.pageScrapped?.title || props?.posts?.title}</title>
        <meta property="og:title" content={props?.pageScrapped?.title || props?.posts?.title} />
        <meta property="og:image" content={props?.pageScrapped?.preview_image || props?.posts?.image} />
        <meta property="og:description" content={props?.pageScrapped?.description || props?.posts?.description} />
        <meta name="twitter:title" content={props?.pageScrapped?.title || props?.posts?.title} />
        <meta name="twitter:description" content={props?.pageScrapped?.description || props?.posts?.secription} />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
        <meta property="fb:app_id" content={"1144829116095615"} />
      </Head>
      <TopNavbar />
      <hr className="hrline" />
      <SecondNavBar />
      <hr />
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
              image={props?.pageScrapped?.image || props?.posts?.image}
              title={props?.pageScrapped?.title || props?.posts?.title}
              hashtag={props?.pageScrapped?.title || props?.posts?.title}
            />
          </div>
          <Container >
            <NewsDetail data={props?.posts?.detail ? props?.pageScrapped : props.posts} content="-1" height="250px" />
          </Container>

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
