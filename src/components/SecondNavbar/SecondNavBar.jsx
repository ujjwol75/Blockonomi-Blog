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

  const handleClick = () => {
    setSearch(!search);
  };
  return (
    <div className={style.secondnavbar}>
      <div>
        <Nav.Item>
          <Nav.Link eventKey="2" title="Item" className={style.barIcon}>
            <AiOutlineBars
              onClick={() => setBarIcon(!barIcon)}
              style={{
                color: "black",
                fontSize: "20px",
                transitionDelay: "4s",
              }}
            />
            {barIcon && (
              <>
                <div className={style.barDiv}>
                  <Row>
                    <Col className={style.barList}>
                      <div className={style.barListDiv}>
                        <a href="">About</a>
                      </div>
                      <hr style={{ width: "200px" }} />
                      <div className={style.barListDiv}>
                        <a href="">Advertise</a>
                      </div>
                      <hr style={{ width: "200px" }} />
                      <div className={style.barListDiv}>
                        <a href="">Submit</a>
                      </div>
                      <hr style={{ width: "200px" }} />
                      <div className={style.barListDiv}>
                        <Link href="/scrappedData/ScrappedData/">
                        <a href="">Scrapped News</a>
                        </Link>
                      </div>
                      <hr style={{ width: "200px" }} />
                      <Button>Claim Free Crypto</Button>
                      <hr style={{ width: "200px" }} />
                      <Button variant="warning">Buy Crypto</Button>
                      <hr style={{ width: "200px" }} />
                      <Button variant="dark">Gamble With Crypto</Button>
                      <hr style={{ width: "200px" }} />
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
      </div>

      <div>
        <Link href="/">
          <Nav.Item>
            <Nav.Link href="#/home">
              <img src="../../logo.png" alt="" className={style.imglogo} />
            </Nav.Link>
          </Nav.Item>
        </Link>
      </div>

      <div className={style.navbarlinks}>
        {navigationListData?.results?.map((item, index) => (
          <Link key={index} href={`/DetailPage/${item.category_id}`}>
            <Nav.Item>
              <Nav.Link eventKey="2" title="Item">
                <span style={{ color: "black" }}>{item.title}</span>
              </Nav.Link>
            </Nav.Item>
          </Link>
        ))}
        <Link href="/scrappedData/ScrappedData/">
          <span className={style.navitem}>Scrapped News</span>
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
      </div>
      <div>
        <Nav.Item>
        <Nav.Link eventKey="3">
          <div className={style.socialmedia}>
            <GrFacebookOption style={{ width: "2rem", color: "black" }} />
            <FaTwitter style={{ width: "2rem", color: "black" }} />
            <FaLinkedinIn
              style={{
                width: "2rem",
                borderRight: "1px solid gray",
                color: "black",
              }}
            />

            <FaSearchengin
              style={{ width: "2rem", color: "black" }}
              onClick={handleClick}
            />
            {search && <SearchPopover search={search} setSearch={setSearch} />}
          </div>
        </Nav.Link>
      </Nav.Item>
      </div>
      
    </div>
  );
};

export default SecondNavBar;
