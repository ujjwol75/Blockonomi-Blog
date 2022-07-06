import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsImage from "../News/NewsImage";
import style from "./newswrap.module.css";

import useGetHook from "../CustomHooks/useGetHook";
import { APIS } from "../../../pages/api/hello";

const NewsWrap = () => {
  const { isLoading: navigationLoading, data: newswrapdata } = useGetHook({
    queryKey: "newswrapdata",
    url: APIS.posts,
  });

  return (
      <div className={style.newswrapcontainer}>
        <Row>
          <Col md='12' sm='12' lg='6' xl='6'>
          <NewsImage
              font="16px"
              description={newswrapdata?.results[0].description}
              title={newswrapdata?.results[0].title}
              image={newswrapdata?.results[0].image}
              content={newswrapdata?.results[0].content}
              color="white"
              className={style.newsimage}
              id={newswrapdata?.results[0].id}
              contentlength="350"
              slug={newswrapdata?.results[0].slug}
            />
          </Col>


          <Col sm='12' md='12' lg='6' xl='6' >
            <div className={style.newswrapimg}>
            <Row>
              {newswrapdata?.results?.slice(4, 8).map((curElem, index) => (
                <Col md='6' sm='6' xs='6' xl='6' key={index}>
                  <NewsImage
                    width="100%"
                    title={curElem.title}
                    image={curElem.image}
                    height="150px"
                    color="white"
                    id={curElem.id}
                    slug={curElem.slug}
                  />
                </Col>
              ))}
            </Row>
            </div>
            
          </Col>
          

        </Row>
      </div>
  );
};

export default NewsWrap;
