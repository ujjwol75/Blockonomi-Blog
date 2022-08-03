import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { APIS } from "../../../pages/api/hello";
import AdvertisementImageContent from "../Advertisement/AdvertisementImageContent";
import useGetHook from "../CustomHooks/useGetHook";
import LatestNews from "./LatestNews";
import NewsDetailParagraph from "./NewsDetailParagraph";

const NewsDetail = (props) => {

  const { data: latestNewsData } = useGetHook(
    {
      queryKey: 'latestNewsData',
      url: APIS.posts
    }
  )
  return (
    <>
      <Container>
        <Row>
          <Col md={12} sm={12} lg={8}>
            <div style={{ maxWidth: '100%' }}>
              <img src={props?.data?.image || props?.data?.preview_image} alt="" style={{ width: '100%', boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5), height:{props.height}' }} />
            </div>
            <NewsDetailParagraph content={props?.data?.content} contentlength={props.contentlength} />

          </Col>

          <Col md={12} sm={12} lg={4}>
            <p style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '10px' }}>Popular News</p>

            <LatestNews />
          </Col>
        </Row>

      </Container>

    </>
  );
};

export default NewsDetail;
