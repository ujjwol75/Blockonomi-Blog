import React from "react";
import Footer from "../Footer/Footer";
import SecondNavBar from "../SecondNavbar/SecondNavBar";
import TopNavbar from "../TopNavbar/TopNavbar";
import NewsImageTitle from "../News/NewsImage";
import { Col, Container, Row } from "react-bootstrap";

const MainSearch = (props) => {
  console.log("props?.data?.results?", props?.data?.results);
  return (
    <div>
      <TopNavbar />
      <hr />
      <SecondNavBar />
      <hr />
      <Container>
        <Row>
          {props?.data?.results?.map((item, key) => (
            <Col md="4" key={key}>
              <NewsImageTitle
                image={item.image}
                id={item.id}
                title={item.title}
                height="250px"
                slug={item.slug}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default MainSearch;
