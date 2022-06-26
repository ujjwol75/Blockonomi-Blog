import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button, Nav, NavDropdown } from 'react-bootstrap'
import { GrFacebookOption } from 'react-icons/gr';
import { FaTwitter, FaLinkedinIn, FaSearchengin } from 'react-icons/fa';
import style from './Navbar.module.css'


const SecondNavBar = () => {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <Nav variant="pills" activeKey="1" style={{display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center'}}>
      <Nav.Item>
        <Nav.Link href="#/home">
          <img src="../../logo.png" alt="" className={style.imglogo}/>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          Prices
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3">
          Sections
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3">
        <Button variant="primary">Claim Free Crypto</Button>
        </Nav.Link>
      </Nav.Item>
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
        <GrFacebookOption style={{width:'2rem'}}/>
        <FaTwitter style={{width:'2rem'}}/>
        <FaLinkedinIn style={{width:'2rem'}}/>
        <FaSearchengin style={{width:'2rem'}}/>
        </Nav.Link>
      </Nav.Item>
      
    </Nav>

  )
}

export default SecondNavBar