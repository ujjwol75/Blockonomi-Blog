import React from "react";
import { Col, Row } from "react-bootstrap";
import News from "../News/News";
import NewsImage from "../News/NewsImage";
import style from "./newswrap.module.css";
import axios from 'axios';

const NewsWrap = () => {

  axios.get('https://insidecrypto.news/api/category/')
    .then(res=>{
      const newsdata = res.data;
      console.log(newsdata.results)
    })

  return (
    <div className={style.newswrapcontainer}>
      <Row>
        <Col>
           <NewsImage font="16px" description="" />
        </Col>
        <Col>
          <Row>
            <Col >
             <NewsImage width="240px" description=""/>
            </Col>
            <Col>
              <NewsImage width="240px" description=""/>
            </Col>
          </Row>
          <Row style={{marginTop:'100px'}}>
            <Col >
             <NewsImage width="240px" description=""/>
            </Col>
            <Col>
              <NewsImage width="240px" description=""/>
            </Col>
          </Row>
        </Col>
      </Row>
      
    </div>
  );
};

export default NewsWrap;
