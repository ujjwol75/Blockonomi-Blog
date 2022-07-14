import Link from "next/link";
import React, { useState } from "react";
import { Col, Nav, Row } from "react-bootstrap";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { ImCross } from "react-icons/im";

import { FaTwitter, FaLinkedinIn, FaSearchengin } from "react-icons/fa";
import style from "./Navbar.module.css";
import useGetHook from "../CustomHooks/useGetHook";
import { APIS } from "../../../pages/api/hello";
import SearchPopover from "../Search/SearchPopover";

const SecondNavBar = () => {
  const [barIcon, setBarIcon] = useState(false);
  const [search, setSearch] = useState(false);
  const { data: navigationListData } = useGetHook(
    {
      queryKey: "navigationListData",
      url: APIS.navigation,
    }
  );

  const handleClick = () => {
    setSearch(!search);
  };
  return (
    <>

      <div className={style.secondnavbar}>
      <Link href="/">
            <div style={{ width: "100px" }}>
              <img
                src="../../mainLogo.png"
                alt="" 
                className={style.imglogo}
                width="100%"
                height="100%"
              />
            </div>
          </Link>
        

        <div className={style.navbarlinks}>
        
        <div>
            <Link href="/scrappedData/ScrappedData/">
              <span className={style.navitem}>News</span>
            </Link>
          </div>
          <div>

            {navigationListData?.results?.map((item, index) => (
              <Link key={index} href={`/research/${item.category_id}`}>

                <span style={{ color: "black" }}>{item.title}</span>

              </Link>
            ))}
          </div>
          <div>
            <Link href="/nFTPage">
              <span className={style.navitem}>NFT News</span>
            </Link>
          </div>
          

          <div>
            <Link href="/pressRelease">
              <span className={style.navitem}>Submit Press Release</span>
            </Link>
          </div>

          <div>
            <Link href="/marketLivePage">
              <span className={style.navitem}>Market Live</span>
            </Link>
          </div>

          <div>
            <Link href="/contact/MainContact">
              <span className={style.navitem}>Contact</span>
            </Link>
          </div>


          {/* <Nav.Item>
          <Nav.Link eventKey="3">
            <Button variant="warning">Buy Crypto</Button>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3">
            <Button variant="dark">Gamble With Crypto</Button>
          </Nav.Link>
        </Nav.Item> */}
        </div>
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
                        {/* <hr style={{ width: "200px" }} /> */}
                        {/* <div className={style.barListDiv}>
                              <a href="">Advertise</a>
                            </div> */}
                        <hr style={{ width: "200px" }} />
                        <div className={style.barListDiv}>
                          <a href="">Submit</a>
                        </div>
                        <hr style={{ width: "200px" }} />
                        <div className={style.barListDiv}>
                          <Link href="/scrappedData/ScrappedData/">
                            <a href="">News</a>
                          </Link>
                        </div>
                        <hr style={{width:'200px'}}/>

                        <div className={style.barListDiv}>
                          <Link href="/scrappedData/ScrappedData/">
                            <a href="/pressRelease">Submit Press Release</a>
                          </Link>
                        </div>
                        <hr style={{width:'200px'}}/>

                        
                        {/* <hr style={{width:'200px'}}/> */}

                        <div className={style.barListDiv}>
                          <Link href="/contact/MainContact">
                            <a >Contact</a>
                          </Link>
                        </div>
                        {/* <hr style={{width:'200px'}}/> */}


                        
                        {/* <hr style={{ width: "200px" }} />
                            <Button>Claim Free Crypto</Button>
                            <hr style={{ width: "200px" }} /> */}
                        {/* <Button variant="warning">Buy Crypto</Button>
                            <hr style={{ width: "200px" }} />
                            <Button variant="dark">Gamble With Crypto</Button> */}
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
          <Nav.Item>
            <Nav.Link eventKey="3">
              <div className={style.socialmedia}>
                <Link href='https://www.facebook.com/nutechcity'>
                  <GrFacebookOption style={{ width: "2rem", color: "black" }} />
                </Link>
                <Link href='https://twitter.com/nugenesisou'>

                  <FaTwitter style={{ width: "2rem", color: "black" }} />
                </Link>
                <Link href='https://www.linkedin.com/company/nugenesis/'>

                  <FaLinkedinIn
                    style={{
                      width: "2rem",
                      borderRight: "1px solid gray",
                      color: "black",
                    }}
                  />
                </Link>


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
    </>
  );
};

export default SecondNavBar;
