import React, { useState } from 'react';
import { APIS } from '../../../pages/api/hello';
import useGetHook from '../CustomHooks/useGetHook';
import ScrappedMain from '../Scrapped/ScrappedMain';
import { Col, Container, Row } from "react-bootstrap";
import style from "../News/news.module.css"
import NewsTitle from '../News/NewsTitle';
import Link from 'next/link';
import Paginate from '../Pagination/Paginate';
import { useRouter } from 'next/router';

const Research = (props) => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20)

  // Change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
    router.push('#news')
  };
  const {
    isLoading: singlePageLoader,
    data: singlePageData,
    isError,
  } = useGetHook({
    queryKey: `singlePageData${props?.postid}${currentPage}`,
    url: `${APIS.posts}?categories=${props?.postid}&page=${currentPage}`,
  });
  return (
    <>
      <div className="m-2">
        {singlePageLoader && "Loading..."}
        <Container id="news">
          <Row>
            {singlePageData?.results?.map((item, key) => (
              <Col md="4" key={key}>
                <div className={style.newsbox}>
                  <Link href={`/article/${item?.slug}`}>
                    <a href="" style={{ textDecoration: 'none', color: 'black' }}>
                      <div className={style.imgdiv} style={{ cursor: 'pointer', maxHeight: "item??.height" }}>
                        <img src={item?.image} alt="hero image" className={style.image} style={{ height: '250px' }} />

                      </div>

                      <NewsTitle width={item?.width} font={item?.font} description={item?.description} date={item?.date} author={item?.author} title={item?.title} color={item?.color} content={item?.content} contentlength={item?.contentlength} height="250px" />
                    </a>

                  </Link>
                </div>
              </Col>
            ))}
            <Paginate
              postsPerPage={postsPerPage}
              totalPosts={singlePageData?.count}
              paginate={paginate}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Row>
        </Container>
      </div>

    </>
  );
};

export default Research;
