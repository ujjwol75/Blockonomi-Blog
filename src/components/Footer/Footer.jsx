import React from "react";
import style from "./footer.module.css";
import { BsFacebook, BsLinkedin, BsInstagram, BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import InputEmail from "./InputEmail";
import usePostHook from "../CustomHooks/usePostHook";
import { APIS } from "../../../pages/api/hello";
import Link from "next/link";

const Footer = (props) => {
  // email post 
  const {
    mutate: createMutate,
    isPostError: errorMessage,
    isPostSuccess: successMessage,
    postData: postData,
  } = usePostHook({
    queryKey: 'suscribeToNewsLetter',
  });

  const handleNewsLetterClick = (email, setEmail) => {


    const url = APIS.newsLetter;
    const formData = {
      email: email,
    };

    try {
      createMutate({ url, formData });
      if (successMessage) {

        setEmail('')
      }
      if (errorMessage) {

        setEmail('')

      }
    } catch (e) {

    }

  };
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
        <InputEmail handleNewsLetterClick={handleNewsLetterClick} />
      </div>
      <div className={style.icon}>
        <Link href='https://www.facebook.com/nutechcity' style={{ color: 'white' }}>
          <BsFacebook style={{ fontSize: '28px', marginRight: '10px', cursor: 'pointer' }} />
        </Link>
        <Link href='https://twitter.com/nugenesisou' style={{ color: 'white' }}>
          <AiFillTwitterCircle style={{ fontSize: '30px', marginRight: '10px', cursor: 'pointer' }} />
        </Link>
        <Link href='https://au.linkedin.com/company/nugenesis' style={{ color: 'white' }}>
          <BsLinkedin style={{ fontSize: '30px', marginRight: '10px', cursor: 'pointer' }} />
        </Link>
        <Link href='https://www.youtube.com/channel/UCUcwdvfmOUB9axXVaKKW4lA' style={{ color: 'white' }}>
          <BsYoutube style={{ fontSize: '30px', marginRight: '10px', cursor: 'pointer' }} />
        </Link>
        <Link href='https://www.instagram.com/nugenesis.ou/' style={{ color: 'white' }}>
          <BsInstagram style={{ fontSize: '30px', marginRight: '10px', cursor: 'pointer' }} />
        </Link>
        <Link href='https://www.tiktok.com/@nugenesis.ou' style={{ color: 'white' }}>
          <FaTiktok style={{ fontSize: '30px', marginRight: '10px', cursor: 'pointer' }} />
        </Link>
      </div>
      <div style={{ fontSize: '12px', color: 'gray' }}>The Crypto Insider™ COPYRIGHT © 2017 - 2022 . ALL RIGHTS RESERVED.</div>
    </div>
  );
};

export default Footer;
