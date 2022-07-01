import React from "react";
import Footer from "../Footer/Footer";
import News from "../News/News";
import SecondNavBar from "../SecondNavbar/SecondNavBar";
import TopNavbar from "../TopNavbar/TopNavbar";
import NewsImageTitle from "../News/NewsImage";
import { Col, Container, Row } from "react-bootstrap";

const MainSearch = (props) => {
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
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* <News data={props.data} search={props.search} searchpage={props.searchpage} contentlength='1'/> */}
      <Footer />
    </div>
  );
};

export default MainSearch;
