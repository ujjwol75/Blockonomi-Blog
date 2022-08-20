import React from "react";
import { Col, Row } from "react-bootstrap";
import style from "./detailpage.module.css"

const NewsDetailParagraph = (props) => {
  return (

    <div className={style.detailparagraph}>
      <Row>
        <Col>
          <h1 style={{}}>{props?.heading}</h1>
          <div className={style.detailcontentmain}>
            <div className={style.detailcontent}
              dangerouslySetInnerHTML={{
                __html: props?.content?.slice(0, props.contentlength),
              }}
            />
          </div>

        </Col>
      </Row>
    </div>
  );
};

export default NewsDetailParagraph;
