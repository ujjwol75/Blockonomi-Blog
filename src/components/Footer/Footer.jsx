import React, { useState } from "react";
import style from "./footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Button, Container } from "react-bootstrap";
import InputEmail from "./InputEmail";
import MainContact from "../../../pages/contact/MainContact";
import Link from "next/link";

const Footer = (props) => {


  return (
    <div className={style.footer}>
      <p style={{ fontSize: '14px', color: 'gray' }}>
        All content on thecryptoinsider.news is provided solely for roduct, service or investment. The opinions expressed in this Site do not constitute investment.
      </p>
      <div style={{ width: '200px' }}>
        <img
          src="../../mainLogo.png"
          alt=""
          className={style.footerimg}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <InputEmail handleNewsLetterClick={props.handleNewsLetterClick} />
      </div>
      <div className={style.icon}>
        <BsFacebook style={{ fontSize: '26px', marginRight: '10px' }} />
        <AiFillTwitterCircle style={{ fontSize: '30px' }} />
      </div>
      <div style={{ fontSize: '12px', color: 'gray' }}>The Crypto Insider™ COPYRIGHT © 2017 - 2022 . ALL RIGHTS RESERVED.</div>
    </div>
  );
};

export default Footer;
