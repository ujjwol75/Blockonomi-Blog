import React from 'react'
import style from './contact.module.css'
import { FaAddressBook } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { RiEarthFill } from "react-icons/ri";




const Address = () => {
  return (
    <div className={style.addressmain}>
        <h3>Contact Us</h3>
        <div className={style.address}>
            <div className={style.address_row}>
                <span style={{marginRight:'20px'}}><FaAddressBook /></span>
                <p>Address <br />632 Forest Rd Bexley, Sydney, NSW, Australia 2216 - HQ</p>
            </div>
            <div className={style.address_row}>
                <span style={{marginRight:'20px'}}><TbPhoneCall /></span>
                <p>Phone <br />+61 437 234 243</p>
            </div>
            <div className={style.address_row}>
                <span style={{marginRight:'20px'}}><MdOutlineEmail /></span>
                <p>Email <br />admin@cryptoblockonomi.com</p>
            </div>
            <div className={style.address_row}>
                <span style={{marginRight:'20px'}}><RiEarthFill /></span>
                <p>Websites <br />blockonomi <br />insidecrypto <br />cryptoinsider</p>
            </div>
        </div>
    </div>
  )
}

export default Address