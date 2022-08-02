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

const NFT = () => {
  const nftUrl = 'https://economictimes.indiatimes.com/topic/nft/news';
  const router = useRouter()

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20)

  // Change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
    router.push('#news')
  };

  const { isLoading: allScribbedPostsLoading, data: allScribbedPosts } =
    useGetHook({
      queryKey: `${APIS.scrappedPost}${currentPage}`,
      url: `${APIS.scrappedPost}?page=${currentPage}&source=${nftUrl}`,
      parma: 'params',
    });


  return (
    <>
      <div className="m-2">
        {allScribbedPostsLoading && "Loading..."}
        <Container id="news">
          <Row>
            {allScribbedPosts?.results?.map((item, key) => (
              <Col md="4" key={key}>
                <div className={style.newsbox}>
                  <Link href={`/article/${item?.slug}`}>
                    <a href="" style={{ textDecoration: 'none', color: 'black' }}>
                      <div className={style.imgdiv} style={{ cursor: 'pointer', maxHeight: "item??.height" }}>
                        <img src={item?.preview_image} alt="hero image" style={{ height: item?.height }} className={style.image} />

                      </div>

                      <NewsTitle width={item?.width} font={item?.font} description={item?.description} date={item?.date} author={item?.author} title={item?.title} color={item?.color} content={item?.content} contentlength={item?.contentlength} />
                    </a>

                  </Link>
                </div>
              </Col>
            ))}
            <Paginate
              postsPerPage={postsPerPage}
              totalPosts={allScribbedPosts?.count}
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

export default NFT;
