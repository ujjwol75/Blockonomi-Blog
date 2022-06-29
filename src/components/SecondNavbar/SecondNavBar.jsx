import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Col, Container, Nav, NavDropdown, Row } from "react-bootstrap";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import ScrappedData from "../../../pages/scrappedData/ScrappedData";
import { ImCross } from "react-icons/im";

import { FaTwitter, FaLinkedinIn, FaSearchengin } from "react-icons/fa";
import style from "./Navbar.module.css";
import useGetHook from "../CustomHooks/useGetHook";
import { APIS } from "../../../pages/api/hello";
import SearchPopover from "../Search/SearchPopover";

const SecondNavBar = () => {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  const [barIcon, setBarIcon] = useState(false);
  const [search, setSearch] = useState(false);
  const { isLoading: navigationLoading, data: navigationListData } = useGetHook(
    {
      queryKey: "navigationListData",
      url: APIS.navigation,
    }
  );

  const handleClick=()=>{
    setSearch(!search)
  }
  return (
    <Container >
    <Nav
      variant="pills"
      activeKey="1"
      style={{
        display: "flex",
        textAlign: "start",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item" className={style.barIcon}>
          <AiOutlineBars onClick={() => setBarIcon(!barIcon)} style={{color:'black', fontSize:'20px'}}/>
          {barIcon && (
            <>
              <div className={style.barDiv}>
                <Row>
                  <Col className={style.barList}>
                    <div className={style.barListDiv}><a href="">About</a></div>
                    <div className={style.barListDiv}><a href="">Advertise</a></div>
                    <div className={style.barListDiv}><a href="">Submit</a></div>
                    <div className={style.barListDiv}><a href="">Release</a></div>
                  </Col>
                  <Col>
                    <ImCross
                      onClick={() => setBarIcon(false)}
                      className={style.crossIcon}
                    />
                  </Col>
                </Row>
              </div>
            </>
          )}
        </Nav.Link>
      </Nav.Item>
      <Link href="/">
      <Nav.Item>
        <Nav.Link href="#/home">
          <img src="../../logo.png" alt="" className={style.imglogo} />
        </Nav.Link>
      </Nav.Item>
      </Link>
      
      {navigationListData?.results?.map((item, index) => (
        <Link key={index} href={`/DetailPage/${item.category_id}`}>
          <Nav.Item>
            <Nav.Link eventKey="2" title="Item">
              {item.title}
            </Nav.Link>
          </Nav.Item>
        </Link>
      ))}
       <Link href="/scrappedData/ScrappedData/">
          <span className={style.navitem}>Price</span>
      </Link> 
     
      <Nav.Item>
        <Nav.Link eventKey="3">
          <Button variant="warning">Buy Crypto</Button>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3">
          <Button variant="dark">Gamble With Crypto</Button>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3">
          <GrFacebookOption style={{ width: "2rem" }} />
          <FaTwitter style={{ width: "2rem" }} />
          <FaLinkedinIn style={{ width: "2rem" }} />
          <FaSearchengin style={{ width: "2rem" }} onClick={handleClick}/>
          {search && <SearchPopover search={search} setSearch={setSearch} />}
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </Container>
  );
};

export default SecondNavBar;
