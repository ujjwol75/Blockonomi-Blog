import Head from "next/head";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useGetHook from "../../src/components/CustomHooks/useGetHook";
import Footer from "../../src/components/Footer/Footer";
import ScrappedMain from "../../src/components/Scrapped/ScrappedMain";
import SecondNavBar from "../../src/components/SecondNavbar/SecondNavBar";
import Wrap from "../../src/components/Wrap/Wrap";
import { APIS } from "../api/hello";

const ScrappedData = () => {
  const [page, setPage] = useState(1)

  const { isLoading: navigationLoading, data: news } = useGetHook({
    queryKey: "news",
    url: APIS.posts,
  });

  // pagination 
  const { data: scribedPostCoinBitCoinList } = useGetHook({
    queryKey: `filterDataWithPagination${page}`,
    url: `${APIS.posts}?page=${page}`,
  });

  return (
    <>
      <Head>
        <title>TheCryptoInsider-News</title>
        <meta property="og:title" content={" TheCryptoInsider-News"} />
        <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
        <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta name="twitter:title" content={" TheCryptoInsider-News"} />
        <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
        <meta property="fb:app_id" content={"1144829116095615"} />
      </Head>
      <SecondNavBar />
      <Wrap />
      <hr />
      <Container>
        <Row>
          {news?.results?.map((item, key) => (
            <Col md="4" key={key}>
              <ScrappedMain
                image={item.image}
                // height="200px"
                author={item.author}
                date={item.date}
                title={item.title}
                contentlength="200"
                id={item.id}
                slug={item.slug}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>

  );
};

export default ScrappedData;
