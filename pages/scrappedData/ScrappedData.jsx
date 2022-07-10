import Link from "next/link";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useGetHook from "../../src/components/CustomHooks/useGetHook";
import Footer from "../../src/components/Footer/Footer";
import PaginationComponent from "../../src/components/Pagination/PaginationComponent";
import ScrappedMain from "../../src/components/Scrapped/ScrappedMain";
import SecondNavBar from "../../src/components/SecondNavbar/SecondNavBar";
import TopNavbar from "../../src/components/TopNavbar/TopNavbar";
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

  console.log('slugmaster', news?.results[0].slug)
  return (
    <>
      <TopNavbar />
      <hr />
      <SecondNavBar />
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
         
                
            {/* </Link> */}
            </Col>
          ))}
        </Row>

      </Container>
      <Footer />
    </>
    // </div>
  );
};

export default ScrappedData;
