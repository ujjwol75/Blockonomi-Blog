import React from 'react'
import style from './contact.module.css'
import { FaAddressBook } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { RiEarthFill } from "react-icons/ri";
import Link from 'next/link';




const Address = () => {
  return (
    <div className={style.addressmain}>
        <h3>Contact Us</h3>
        <div className={style.address}>
            <div className={style.address_row}>
                <span style={{marginRight:'20px'}}><FaAddressBook /></span>
                <p>Address <br /> <a href="https://www.google.com/maps/place/Sydney+NSW,+Australia/@-33.8423624,149.8484541,9z/data=!3m1!4b1!4m5!3m4!1s0x6b129838f39a743f:0x3017d681632a850!8m2!3d-33.8688197!4d151.2092955" target="_blank" rel="noreferrer">632 Forest Rd Bexley, Sydney, NSW, Australia 2216 - HQ</a></p>
            </div>
            <div className={style.address_row}>
                <span style={{marginRight:'20px'}}><TbPhoneCall /></span>
                <p>Phone <br />+61 437 234 243</p>
            </div>
            <div className={style.address_row}>
                <span style={{marginRight:'20px'}}><MdOutlineEmail /></span>
                
                <p>Email <br /> <a href="mailto:admin@cryptoblockonomi.com" target="_blank" rel="noreferrer">admin@cryptoblockonomi.com</a> </p>
            </div>
            <div className={style.address_row}>
                <span style={{marginRight:'20px'}}><RiEarthFill /></span>
                <p>Websites <br /><a href="https://blockonomi.com/" target="_blank" rel="noreferrer">blockonomi</a>  <br /> <a href="https://insidecrypto.news/" target="_blank" rel="noreferrer">insidecrypto</a>  <br /> 
                
                <a href="https://cryptoinsider.media/" target="_blank" rel="noreferrer">cryptoinsider</a> </p>
            </div>
        </div>
    </div>
  )
}

export default Address