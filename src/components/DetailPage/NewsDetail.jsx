import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { APIS } from "../../../pages/api/hello";
import AdvertisementImageContent from "../Advertisement/AdvertisementImageContent";
import AdvertisementTable from "../Advertisement/AdvertisementTable";
import useGetHook from "../CustomHooks/useGetHook";
import Footer from "../Footer/Footer";
import LatestNews from "./LatestNews";
import NewsDetailParagraph from "./NewsDetailParagraph";

const NewsDetail = (props) => {

  const { isLoading: navigationLoading, data: latestNewsData } = useGetHook(
    {
      queryKey: 'latestNewsData',
      url: APIS.posts
    }
  )
  return (
    <>
      <Container style={{ marginTop: '20px', flexWrap: 'wrap' }}>
        <Row>
          <Col md={12} sm={12} lg={8}>
            <div style={{ maxWidth: '100%' }}>
              <img src={props?.data?.image || props?.data?.preview_image} alt="" style={{ width: '100%', boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5), height:{props.height}' }} />
            </div>
            <NewsDetailParagraph content={props?.data?.content} contentlength={props.contentlength} />

          </Col>

          <Col md={12} sm={12} lg={4}>
            <AdvertisementImageContent />
            <p style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '10px' }}>Latest News</p>
            {latestNewsData?.results?.slice(0, 3)?.map((curEle, index) =>
              <LatestNews image={curEle?.image} title={curEle?.title} created={curEle?.created} key={index} id={curEle?.id} slug={curEle?.slug} />
            )}
            <AdvertisementImageContent />
            <AdvertisementTable />
          </Col>
        </Row>

      </Container>

      {/* <Footer /> */}

      {/* })} */}

    </>
  );
};

export default NewsDetail;
