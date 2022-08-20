import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useGetHook from "../../src/components/CustomHooks/useGetHook";
import Footer from "../../src/components/Footer/Footer";
import Paginate from "../../src/components/Pagination/Paginate";
import ScrappedMain from "../../src/components/Scrapped/ScrappedMain";
import SecondNavBar from "../../src/components/SecondNavbar/SecondNavBar";
import Wrap from "../../src/components/Wrap/Wrap";
import { APIS } from "../api/hello";

const ScrappedData = () => {
  const router = useRouter();

  const { isLoading: postsLoading, data: postsData } = useGetHook(
    {
      queryKey: 'postsData',
      url: APIS?.posts
    }
  );
  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20)

  // Change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
    router.push('#news')
  };
  const { data: paginationData } = useGetHook({
    queryKey: `paginationData${currentPage}`,
    url: `${APIS.posts}?page=${currentPage}`
  })

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
      <Container id="news">
        <Row>
          {paginationData?.results?.map((item, key) => (
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
          <Paginate
            postsPerPage={postsPerPage}
            totalPosts={postsData?.count}
            paginate={paginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Row>
      </Container>
      <Footer />
    </>

  );
};

export default ScrappedData;
