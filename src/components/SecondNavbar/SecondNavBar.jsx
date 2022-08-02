import Link from "next/link";
import React, { useState } from "react";
import { Col, Nav, Row } from "react-bootstrap";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { FaSearch } from 'react-icons/fa';


import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import style from "./Navbar.module.css";
import useGetHook from "../CustomHooks/useGetHook";
import { APIS } from "../../../pages/api/hello";
import { useRouter } from "next/router";

const SecondNavBar = () => {
  const router = useRouter()
  const [barIcon, setBarIcon] = useState(false);
  const [search, setSearch] = useState(false);
  const [name, setName] = useState("");

  const { data: navigationListData } = useGetHook({
    queryKey: "navigationListData",
    url: APIS.navigation,
  });

  const handleClick = () => {
    setSearch(!search);
  };
  function HandleSubmit(e) {
    e.preventDefault();
    {
      name !== "" &&
        router.push(`/searchpage/${name}`);
    }
    setName("");
    setSearch(false)
  }


  return (
    <>
      <div className={style.secondnavbar}>
        <div>
          <Nav.Item>
            <Nav.Link eventKey="2" title="Item" className={style.barIcon}>
              {!search &&
                <AiOutlineBars
                  onClick={() => setBarIcon(!barIcon)}
                  style={{
                    color: "black",
                    fontSize: "24px",
                    transitionDelay: "4s",
                  }}
                />
              }
              {barIcon && (
                <>
                  <div className={style.barDiv}>
                    <Row>
                      <Col className={style.barList}>
                        <div className={style.barListDiv}>
                          <Link href="/news">
                            <a href="">News</a>
                          </Link>
                        </div>
                        <hr style={{ width: "200px" }} />
                        <div className={style.barListDiv}>
                          <Link href="/nFTPage">
                            <a href="">NFT News</a>
                          </Link>
                        </div>

                        <hr style={{ width: "200px" }} />
                        <div className={style.barListDiv}>
                          {navigationListData?.results?.map((item, index) => (
                            <Link
                              key={index}
                              href={`/research/${item.category}`}
                            >
                              <a >
                                {item.title}
                              </a>
                            </Link>
                          ))}
                        </div>
                        <hr style={{ width: "200px" }} />


                        <div className={style.barListDiv}>
                          <Link href="/pressRelease">
                            <a>Submit Press Release</a>
                          </Link>
                        </div>
                        <hr style={{ width: "200px" }} />



                        <div className={style.barListDiv}>
                          <Link href="/contact/MainContact">
                            <a>Contact Us</a>
                          </Link>
                        </div>

                        <hr style={{ width: "180px" }} />

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
        <Link href="/">
          <div style={{ width: "80px", cursor: 'pointer' }}>
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
            <Link href="/news">
              <span className={style.navitem}>News</span>
            </Link>
          </div>
          <div>
            {navigationListData?.results?.map((item, index) => (
              <Link key={index} href={`/research/${item.category}`}>
                <span className={style.navitem}>{item.title}</span>
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
              <span className={style.navitem}>Contact Us</span>
            </Link>
          </div>
        </div>

        <div className={style.socialmedia}>
          <Link href="https://www.facebook.com/nutechcity">
            <GrFacebookOption className={style.navitem} />
          </Link>
          <Link href="https://twitter.com/nugenesisou" >

            <FaTwitter className={style.navitem} />
          </Link>
          <Link href="https://www.linkedin.com/company/nugenesis/">
            <FaLinkedinIn
              className={style.navitem}
            />
          </Link>
        </div>
        <div>
          {search ? <ImCross style={{ width: "4rem", color: "black" }} onClick={() =>
            setSearch(!search)
          } /> :
            <FaSearch style={{ width: "4rem", color: "black" }} onClick={handleClick} />}

          {search &&
            <form style={{ margin: "10px" }} onSubmit={HandleSubmit}>
              <input type="text" placeholder='Search...' value={name} onChange={(e) => setName(e.target.value)} />
              <button className='searchbutton' type='submit' style={{ "opacity": "0.5" }}>
                <FaSearch />
              </button>
            </form>
          }

        </div>

      </div>
    </>
  );
};

export default SecondNavBar;
