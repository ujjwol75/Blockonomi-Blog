import React from 'react';
import { APIS } from '../../../pages/api/hello';
import useGetHook from '../CustomHooks/useGetHook';
import ScrappedMain from '../Scrapped/ScrappedMain';
import { Col, Container, Row } from "react-bootstrap";
import style from "../News/news.module.css"
import NewsTitle from '../News/NewsTitle';
import Link from 'next/link';

const NFT = () => {
  const nftUrl = 'https://economictimes.indiatimes.com/topic/nft/news';

  const { isLoading: allScribbedPostsLoading, data: allScribbedPosts } =
    useGetHook({
      queryKey: 'allScribbedPosts',
      url: `${APIS.scrappedPost}?source=${nftUrl}`,
      parma: 'params',
    });

  return (
    <>
      <div className="m-2">
        {allScribbedPostsLoading && "Loading..."}
        <Container>
          <Row>
            {allScribbedPosts?.results?.map((item, key) => (
              <Col md="4" key={key}>
                <div className={style.newsbox}>
                  <Link href={`/articles/${item?.slug}`}>
                    <a href="" style={{ textDecoration: 'none', color: 'black' }}>
                      <div className={style.imgdiv} style={{ cursor: 'pointer', maxHeight: "item??.height" }}>
                        <img src={item?.preview_image} alt="hero image" style={{ height: item?.height }} className={style.image} />
                        <span className={style.textimage}>METAVERSE</span>
                      </div>

                      <NewsTitle width={item?.width} font={item?.font} description={item?.description} date={item?.date} author={item?.author} title={item?.title} color={item?.color} content={item?.content} contentlength={item?.contentlength} />
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

export default NFT;
