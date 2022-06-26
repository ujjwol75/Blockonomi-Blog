import React, { useState } from "react";
import NewsImage from "./NewsImage";
// import NewsImage from './NewsImage'
import style from "./news.module.css";
import NewsTitle from "./NewsTitle";
import Advertisement from "../Advertisement/Advertisement";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

const News = () => {
  const [getData, setGetData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)


  axios.get("https://insidecrypto.news/api/posts/").then((res) => {
    const resp = res;
    console.log('res', resp);
    const newsdata = res.data.results;
    console.log("newsdata", newsdata);
    setGetData({ newsdata });
    console.log("getNewData", getData.newsdata);
  });

  return (
    <div className={style.mainnews}>
      <div className={style.mainnewsrow}>
        <>
          <Row>
            {getData?.newsdata?.map((items, key) => (
              <Col md={6}>
                <div className={style.mainnewscol}>
                  <NewsImage
                    description={items.description}
                    date="JUNE 21, 2022"
                    author="ORDER DALE"
                    image={items.image}
                    height="250px"
                    blogId={items.id}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </>

        <Col>
          <Advertisement />
        </Col>
      </div>
    </div>
  );
};

export default News;
