import React, { useState } from "react";
import NewsImage from "./NewsImage";
import style from "./news.module.css";
import Advertisement from "../Advertisement/Advertisement";
import { Row, Col } from "react-bootstrap";
import useGetHook from "../CustomHooks/useGetHook";
import { APIS } from "../../../pages/api/hello";

const News = () => {
  const [getData, setGetData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { isLoading: navigationLoading, data: newsdata } = useGetHook({
    queryKey: "newsdata",
    url: APIS.posts,
  });

  return (
    // <div className={style.mainnews}>
    <>
      <Row className={style.news}>
        <Col md={8} sm={12}>
          <Row>
            {newsdata?.results?.map((items, key) => (
              <Col md={6} key={key}>
                <div className={style.mainnewscol}>
                  <NewsImage
                    description={items.description}
                    date={items.publish_date}
                    author={items.author}
                    image={items.image}
                    height="250px"
                    blogId={items.id}
                    title={items.title}
                    color="black"
                    width="100%"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={4} sm={12}>
          <Advertisement />
          <Advertisement />
          <Advertisement />
          <Advertisement />
          <Advertisement />
          <Advertisement />
          <Advertisement />
          <Advertisement />
          <Advertisement />
          <Advertisement />
        </Col>
      </Row>
      </>
    //  </div> 
  );
};

export default News;
