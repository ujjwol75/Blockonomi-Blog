import React from "react";
import NewsImage from "./NewsImage";
import style from "./news.module.css";
import { Row, Col, Container } from "react-bootstrap";
import PaginationComponent from "../Pagination/PaginationComponent";
import LatestNews from "../DetailPage/LatestNews";
import useGetHook from "../CustomHooks/useGetHook";
import { APIS } from "../../../pages/api/hello";

const News = (props) => {
  const { data: latestNewsData } = useGetHook(
    {
      queryKey: 'latestNewsData',
      url: APIS.posts
    }
  )

  return (

    <Container className={style.container}>
      <Row>
        <Col md={8} sm={12} lg={8} xl={8}>
          <Row>
            {props?.search && <h3 style={{ marginBottom: '20px' }}>Your Search on KeyWord <span style={{ fontWeight: 'bold' }}>{props.searchpage}</span></h3>}

            {props?.search ?

              <>{props?.data?.results?.map((items, key) =>
                <Col md={6} key={key}>
                  <div>

                    <NewsImage
                      description={items.description}
                      date={items.publish_date}
                      author={items.author}
                      image={items.image}
                      height="250px"
                      // id={items.id}
                      slug={items.slug}
                      title={items.title}
                      color="black"
                      // width="100%"
                      content={items.content}
                    />
                  </div>
                </Col>
              )}</>
              :
              <>
                {props?.data?.results?.map((items, key) => (
                  <Col md={6} key={key}>
                    <div>
                      <NewsImage
                        description={items.description}
                        date={items.publish_date}
                        author={items.author}
                        image={items.image}
                        slug={items.slug}
                        height="250px"
                        id={items.id}
                        title={items.title}
                        color="black"
                        content={items.content}
                        contentlength="200"
                      />
                    </div>
                  </Col>
                ))}</>}

            <div>
              <PaginationComponent page={props.page} setPage={props.setPage} />
            </div>
          </Row>
        </Col>
        <>

          <Col md={12} sm={12} lg={4}>

            <p style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '10px' }}>Latest News</p>
            {latestNewsData?.results?.slice(5, 15)?.map((curEle, index) =>
              <LatestNews image={curEle?.image} title={curEle?.title} created={curEle?.created} key={index} id={curEle?.id} slug={curEle?.slug} />
            )}

            <p style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '10px' }}>Popular News</p>
            {latestNewsData?.results?.slice(0, 5)?.map((curEle, index) =>
              <LatestNews image={curEle?.image} title={curEle?.title} created={curEle?.created} key={index} id={curEle?.id} slug={curEle?.slug} />
            )}


            <p style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '10px' }}>Featured News</p>
            {latestNewsData?.results?.slice(15, 27)?.map((curEle, index) =>
              <LatestNews image={curEle?.image} title={curEle?.title} created={curEle?.created} key={index} id={curEle?.id} slug={curEle?.slug} />
            )}
          </Col>
        </>
      </Row>
    </Container >

  );
};

export default News;
