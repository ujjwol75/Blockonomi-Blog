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
          <span style={{ marginRight: '20px' }}>
            <FaAddressBook />
          </span>
          <p>
            Address <br />{' '}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.google.com/maps/place/Sydney+NSW,+Australia/@-33.8423624,149.8484541,9z/data=!3m1!4b1!4m5!3m4!1s0x6b129838f39a743f:0x3017d681632a850!8m2!3d-33.8688197!4d151.2092955'
            >
              632 Forest Rd Bexley, Sydney, NSW, Australia 2216 - HQ
            </a>
          </p>
        </div>
        <div className={style.address_row}>
          <span style={{ marginRight: '20px' }}>
            <TbPhoneCall />
          </span>
          <p>
            Phone <br />
            <a href='tel:+61 437 234 243'>+61 437 234 243</a>
          </p>
        </div>
        <div className={style.address_row}>
          <span style={{ marginRight: '20px' }}>
            <MdOutlineEmail />
          </span>

          <p>
            Email <br />{' '}
            <a href='mailto:admin@cryptoblockonomi.com'>
              admin@cryptoblockonomi.com
            </a>{' '}
          </p>
        </div>
        <div className={style.address_row}>
          <span style={{ marginRight: '20px' }}>
            <RiEarthFill />
          </span>
          <p>
            Websites <br />
            <a target='_blank' rel='noreferrer' href='https://nucoin.com.au/'>
              NuCoin
            </a>{' '}
            <br />{' '}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://insidecrypto.news/'
            >
              insidecrypto
            </a>{' '}
            <br />
            <a
              href='https://comparecrypto.news/'
              rel='noreferrer'
              target='_blank'
            >
              comparecrypto
            </a>
            <br />
            <a
              href='https://cryptodigest.news/'
              rel='noreferrer'
              target='_blank'
            >
              cryptodigest
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Address