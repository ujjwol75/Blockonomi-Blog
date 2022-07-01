import React, { useState } from "react";
import NewsImage from "./NewsImage";
import style from "./news.module.css";
import Advertisement from "../Advertisement/Advertisement";
import { Row, Col, Container } from "react-bootstrap";
import useGetHook from "../CustomHooks/useGetHook";
import { APIS } from "../../../pages/api/hello";

const News = (props) => {
  const [getData, setGetData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


  return (

    <Container className={style.container}>
    <Row>
        <Col md={9} sm={12} >
          <Row>
          {props?.search && <h3 style={{marginBottom:'20px'}}>Your Search on KeyWord <span style={{fontWeight:'bold'}}>{props.searchpage}</span></h3>}
          
            {props?.search ? 
            
            <>{props?.data?.results?.map((items, key)=>
              <Col md={6} key={key}>
                <div>
                  
                  <NewsImage
                    description={items.description}
                    date={items.publish_date}
                    author={items.author}
                    image={items.image}
                    height="250px"
                    // id={items.id}
                    slug={items.slug}
                    title={items.title}
                    color="black"
                    // width="100%"
                    content={items.content}
                  />
                </div>
              </Col>
              )}</>
            : 
            <>
            {props?.data?.results?.map((items, key) => (
              <Col md={6} key={key}>
                <div>
                  <NewsImage
                    description={items.description}
                    date={items.publish_date}
                    author={items.author}
                    image={items.image}
                    slug={items.slug}
                    height="250px"
                    id={items.id}
                    title={items.title}
                    color="black"
                    // width="100%"
                    content={items.content}
                    contentlength="200"
                  />
                </div>
              </Col>
            ))}</>}

            
          </Row>
        </Col>
        <Col md={3} sm={12}>
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
    </Container>

  );
};

export default News;
