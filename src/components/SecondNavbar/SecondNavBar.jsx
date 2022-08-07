import Link from "next/link";
import React, { useState } from "react";
import { Col, Nav, Row } from "react-bootstrap";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { FaSearch } from 'react-icons/fa';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import style from './Navbar.module.css';
import useGetHook from '../CustomHooks/useGetHook';
import { APIS } from '../../../pages/api/hello';
import { useRouter } from 'next/router';
import useClickOutside from '../CustomHooks/useClickOutSideHook';

const SecondNavBar = () => {
  const router = useRouter();
  const [name, setName] = useState('');

  const {
    ref: searchRef,
    open: showSearch,
    setOpen: setShowSearch,
  } = useClickOutside(false);

  const {
    ref: menuRef,
    open: showMenu,
    setOpen: setShowMenu,
  } = useClickOutside(false);

  const { data: navigationListData } = useGetHook({
    queryKey: 'navigationListData',
    url: APIS.navigation,
  });

  const handleClick = () => {
    setShowSearch(!showSearch);
  };
  function HandleSubmit(e) {
    e.preventDefault();
    {
      name !== '' && router.push(`/searchpage/${name}`);
    }
    setName('');
    setShowSearch(false);
  }

  return (
    <>
      <div className={style.secondnavbar}>
        <div>
          <Nav.Item>
            <Nav.Link eventKey='2' title='Item' className={style.barIcon}>
              {!showMenu && (
                <AiOutlineBars
                  onClick={() => setShowMenu(!showMenu)}
                  style={{
                    color: 'black',
                    fontSize: '24px',
                    transitionDelay: '4s',
                  }}
                />
              )}
              {showMenu && (
                <>
                  <div ref={menuRef} className={style.barDiv}>
                    <Row>
                      <Col className={style.barList}>
                        <div className={style.barListDiv}>
                          <Link href='/news'>
                            <a href=''>News</a>
                          </Link>
                        </div>
                        <hr style={{ width: '200px' }} />
                        <div className={style.barListDiv}>
                          <Link href='/nFTPage'>
                            <a href=''>NFT News</a>
                          </Link>
                        </div>

                        <hr style={{ width: '200px' }} />
                        <div className={style.barListDiv}>
                          {navigationListData?.results?.map((item, index) => (
                            <Link
                              key={index}
                              href={`/research/${item.category}`}
                            >
                              <a>{item.title}</a>
                            </Link>
                          ))}
                        </div>
                        <hr style={{ width: '200px' }} />

                        <div className={style.barListDiv}>
                          <Link href='/pressRelease'>
                            <a>Submit Press Release</a>
                          </Link>
                        </div>
                        <hr style={{ width: '200px' }} />

                        <div className={style.barListDiv}>
                          <Link href='/contact/MainContact'>
                            <a>Contact Us</a>
                          </Link>
                        </div>

                        <hr style={{ width: '180px' }} />
                      </Col>
                      <Col>
                        <ImCross
                          onClick={() => setShowMenu(!showMenu)}
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
        <Link href='/'>
          <div style={{ width: '80px', cursor: 'pointer' }}>
            <img
              src='../../mainLogo.png'
              alt=''
              className={style.imglogo}
              width='100%'
              height='100%'
            />
          </div>
        </Link>

        <div className={style.navbarlinks}>
          <div>
            <Link href='/news'>
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
            <Link href='/nFTPage'>
              <span className={style.navitem}>NFT News</span>
            </Link>
          </div>

          <div>
            <Link href='/pressRelease'>
              <span className={style.navitem}>Submit Press Release</span>
            </Link>
          </div>

          <div>
            <Link href='/marketLivePage'>
              <span className={style.navitem}>Market Live</span>
            </Link>
          </div>

          <div>
            <Link href='/contact/MainContact'>
              <span className={style.navitem}>Contact Us</span>
            </Link>
          </div>
        </div>

        <div className={style.socialmedia}>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.facebook.com/nutechcity'
          >
            <GrFacebookOption className={style.navitem} />
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://twitter.com/nugenesisou'
          >
            <FaTwitter className={style.navitem} />
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/company/nugenesis/'
          >
            <FaLinkedinIn className={style.navitem} />
          </a>
        </div>
        <div>
          {showSearch ? (
            <ImCross
              style={{ width: '4rem', color: 'black', cursor: 'pointer' }}
              onClick={() => setShowSearch(!showSearch)}
            />
          ) : (
            <FaSearch
              style={{
                width: '4rem',
                color: 'black',
                cursor: 'pointer',
                position: 'relative',
              }}
              onClick={handleClick}
            />
          )}

          {showSearch && (
            <form
              ref={searchRef}
              className='searchForm'
              onSubmit={HandleSubmit}
            >
              <input
                ref={(input) => input && input.focus()}
                className='searchInput'
                type='text'
                placeholder='Search...'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default SecondNavBar;
