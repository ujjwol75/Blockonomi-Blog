import React, { useState } from "react";
import style from "./footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Button, Container } from "react-bootstrap";
import InputEmail from "./InputEmail";

const Footer = (props) => {
  

  return (
    <div className={style.footer}>
      <p style={{fontSize:'14px', color:'gray'}}>
      All content on Blockonomi.com is provided solely for roduct, service or investment. The opinions expressed in this Site do not constitute investment.
      </p>
      <div style={{width:'200px'}}>
      <img
        src="../../logo.png"
        alt=""
        className={style.footerimg}
        style={{width:'100%'}}
      />
      </div>
      
      <div style={{marginTop:'20px', marginBottom:'20px'}}>
        <InputEmail handleNewsLetterClick={props.handleNewsLetterClick}/>
      </div>
      <div className={style.icon}>
        <BsFacebook style={{fontSize:'26px', marginRight:'10px'}}/>
        <AiFillTwitterCircle style={{fontSize:'30px'}}/>
      </div>
      <div className={style.footerlink}>
        <a href="">ABOUT</a>
        <a href="">CONTACT</a>
        <a href="">DEALS</a>
        <a href="">ADVERTISE</a>
        <a href="">TERMS & CONDITIONS</a>
        <a href="">PRIVACY POLICY</a>
      </div>
      <div style={{fontSize:'12px', marginTop:'20px', color:'gray'}}>BLOCKONOMI™ COPYRIGHT © 2017 - 2022 KOOC MEDIA LTD. ALL RIGHTS RESERVED. REGISTERED COMPANY NO.05695741
NETWORK: MONEYCHECK - FINANCE NEWS / BEANSTALK - NFT & METAVERSE NEWS</div>
    </div>
  );
};

export default Footer;
