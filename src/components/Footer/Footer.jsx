import React from "react";
import style from "./footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={style.footer}>
      <p>
      All content on Blockonomi.com is provided solely for informational purposes, and is not an offer to buy or sell or a solicitation of an offer to buy or sell any security, product, service or investment. The opinions expressed in this Site do not constitute investment advice and independent financial advice should be sought where appropriate.
      </p>
      <img
        src="../../logo.png"
        alt=""
        style={{ maxWidth: "300px", color: "white", marginTop:'20px' }}
      />
      <div className={style.icon}>
        <BsFacebook style={{fontSize:'40px', marginRight:'10px'}}/>
        <AiFillTwitterCircle style={{fontSize:'45px'}}/>
      </div>
      <div className={style.footerlink}>
        <a href="">ABOUT</a>
        <a href="">CONTACT</a>
        <a href="">DEALS</a>
        <a href="">ADVERTISE</a>
        <a href="">TERMS & CONDITIONS</a>
        <a href="">PRIVACY POLICY</a>
      </div>
      <div style={{fontSize:'12px', marginTop:'20px'}}>BLOCKONOMI™ COPYRIGHT © 2017 - 2022 KOOC MEDIA LTD. ALL RIGHTS RESERVED. REGISTERED COMPANY NO.05695741
NETWORK: MONEYCHECK - FINANCE NEWS / BEANSTALK - NFT & METAVERSE NEWS</div>
    </div>
  );
};

export default Footer;
