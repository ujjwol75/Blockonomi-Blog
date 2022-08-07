import React, { useState } from "react";
import NewsImage from "./NewsImage";
import style from "./news.module.css";
import { Row, Col, Container } from "react-bootstrap";
import PaginationComponent from "../Pagination/PaginationComponent";
import Paginate from "../Pagination/Paginate";

import LatestNews from "../DetailPage/LatestNews";
import useGetHook from "../CustomHooks/useGetHook";
import { APIS } from "../../../pages/api/hello";
import { useRouter } from 'next/router';

const News = (props) => {
  const router = useRouter();
  const { data: latestNewsData } = useGetHook(
    {
      queryKey: 'latestNewsData',
      url: APIS.posts
    }
  )
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

    <Container fluid className={style.newsmain} id='news'>
      <Row>
        <Col md={8} sm={12} lg={8} xl={8}>
          <Row>
            {props?.search && <h3 style={{ marginBottom: '20px' }}>Your Search on KeyWord <span style={{ fontWeight: 'bold' }}>{props.searchpage}</span></h3>}

            {props?.search ?

              <>{props?.data?.results?.map((items, key) =>
                <Col md={6} key={key} >
                  <div className={style.newsimagediv}>
                    <NewsImage
                      description={items.description}
                      date={items.publish_date}
                      author={items.author}
                      image={items.image}
                      className={style.newsimage}
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
                {paginationData?.results?.map((items, key) => (
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
              <Paginate
                postsPerPage={postsPerPage}
                totalPosts={latestNewsData?.count}
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </Row>
        </Col>
        <>

          <Col md={4} sm={12} lg={4}>

            <p style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '10px' }}>Popular News</p>

            <LatestNews />



          </Col>
        </>
      </Row>
    </Container >

  );
};

export default News;
