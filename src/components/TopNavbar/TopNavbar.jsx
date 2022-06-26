import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from './topnavbar.module.css'
const TopNavbar = () => {
  return (
      <Container className={style.container}>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-dark mx-2 text-sm'>About</Nav.Link>
            <Nav.Link href="#link" className='text-dark mx-2'>Advertise</Nav.Link>
            <Nav.Link href="#home" className='text-dark mx-2'>Submit Press Release</Nav.Link>
            <Nav.Link href="#link" className='text-dark mx-2'>Contact</Nav.Link>
          </Nav>
      </Container>
  )
}

export default TopNavbar