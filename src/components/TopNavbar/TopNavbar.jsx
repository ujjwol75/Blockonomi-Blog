import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import style from './topnavbar.module.css'
const TopNavbar = () => {
  return (
    <Container>
      <div className={style.container}>
        <Nav className="me-auto">
          <Nav.Link href="/pressRelease" className='text-dark mx-2'>Submit Press Release</Nav.Link>
          <Nav.Link href="/marketLivePage" className='text-dark mx-2'>Market Live</Nav.Link>
          <Link href="/contact/MainContact">
            <Nav.Link href="#link" className='text-dark mx-2'>Contact</Nav.Link>
          </Link>
        </Nav>
      </div>

    </Container>
  )
}

export default TopNavbar