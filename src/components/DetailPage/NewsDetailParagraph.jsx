import React from "react";
import { Col, Row } from "react-bootstrap";
import style from "./detailpage.module.css"

const NewsDetailParagraph = (props) => {
  return (
    
    <div className={style.detailparagraph}>
      <Row>
        <h1 style={{}}>{props?.heading}</h1>
        <p>{props?.description}</p>
        
      </Row>
    </div>
  );
};

export default NewsDetailParagraph;
