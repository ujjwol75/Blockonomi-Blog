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
        <title>The Crypto Insider</title>
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
                height="200px"
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
