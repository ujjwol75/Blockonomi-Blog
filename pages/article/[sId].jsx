import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
import NewsImageTitle from '../../src/components/News/NewsImage';


const Detail = (props) => {

  let urlPage = "https://test.insidecrypto.news/"
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
              image={props?.pageScrapped?.image || props?.posts?.image}
              title={props?.pageScrapped?.title || props?.posts?.title}
              hashtag={props?.pageScrapped?.title || props?.posts?.title}
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
              data-href='https://test.insidecrypto.news/'
              data-width=''
              data-numposts='5'
            ></div>
          </div>
          {props?.posts?.related_posts?.length ?
            <Row>
              {props?.posts?.related_posts?.map((items, key) =>
                <Col md={6} key={key} >
                  <h2>Related Posts</h2>
                  <NewsImageTitle
                    image={items.image}
                    height="250px"
                    author={items.author}
                    date={items.date}
                    content={items.description}
                    title={items.title}
                    contentlength={items.contentlength}
                    id={items.id}
                    slug={items.slug}
                  />
                </Col>
              )}
            </Row>
            :
            null}
          {props?.pageScrapped?.related_posts?.length ?
            <div>
              {props?.pageScrapped?.related_posts?.map((items, key) =>
                <Col md={6} key={key} >
                  <h2>Related Posts</h2>
                  <NewsImageTitle
                    image={items.preview_image}
                    height="250px"
                    author={items.author}
                    date={items.date}
                    content={items.description}
                    title={items.title}
                    contentlength={items.contentlength}
                    id={items.id}
                    slug={items.slug}
                  />
                </Col>
              )}
            </div>
            :
            null}

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
