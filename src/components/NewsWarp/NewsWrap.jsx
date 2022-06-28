import React from "react";
import { Col, Row } from "react-bootstrap";
import NewsImage from "../News/NewsImage";
import style from "./newswrap.module.css";

import useGetHook from "../CustomHooks/useGetHook";
import { APIS } from "../../../pages/api/hello";

const NewsWrap = () => {


  const { isLoading: navigationLoading, data: newswrapdata } = useGetHook({
    queryKey: "newswrapdata",
    url: APIS.posts,
  });
  console.log("newswrapdata", newswrapdata?.results);

  return (
    <div className={style.newswrapcontainer}>
      <Row>
        <Col>
          <NewsImage
            font="16px"
            description={newswrapdata?.results[0].description}
            title={newswrapdata?.results[0].title}
            image={newswrapdata?.results[0].image}
            height="400px"
            color="white"
          />
        </Col>

        <Col>
          <Row>
            {newswrapdata?.results?.slice(0, 4).map((curElem, index) => (
              <Col md={6} sm={12} key={index}>
                <NewsImage
                  width="240px"
                  title={curElem.title}
                  image={curElem.image}
                  height="200px"
                  color="white"
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default NewsWrap;
