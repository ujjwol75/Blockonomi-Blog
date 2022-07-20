import React from 'react';
import { APIS } from '../../../pages/api/hello';
import useGetHook from '../CustomHooks/useGetHook';
import ScrappedMain from '../Scrapped/ScrappedMain';
import { Col, Container, Row } from "react-bootstrap";
import style from "../News/news.module.css"
import NewsTitle from '../News/NewsTitle';
import Link from 'next/link';

const Research = (props) => {

  return (
    <>
      <div className="m-2">
        {props?.singlePageLoader && "Loading..."}
        <Container>
          <Row>
            {props?.singlePageData?.results?.map((item, key) => (
              <Col md="4" key={key}>
                <div className={style.newsbox}>
                  <Link href={`/articles/${item?.slug}`}>
                    <a href="" style={{ textDecoration: 'none', color: 'black' }}>
                      <div className={style.imgdiv} style={{ cursor: 'pointer', maxHeight: "item??.height" }}>
                        <img src={item?.image} alt="hero image" className={style.image} style={{height:'250px'}}/>
                     
                      </div>

                      <NewsTitle width={item?.width} font={item?.font} description={item?.description} date={item?.date} author={item?.author} title={item?.title} color={item?.color} content={item?.content} contentlength={item?.contentlength} height="250px"/>
                    </a>

                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

    </>
  );
};

export default Research;
