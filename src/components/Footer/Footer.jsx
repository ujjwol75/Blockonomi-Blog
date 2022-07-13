import React from "react";
import style from "./footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import InputEmail from "./InputEmail";
import Link from "next/link";
import usePostHook from "../CustomHooks/usePostHook";
import { APIS } from "../../../pages/api/hello";

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
  console.log(postData, "postData")

  const handleNewsLetterClick = (email, setEmail) => {


    const url = APIS.newsLetter;
    const formData = {
      email: email,
    };

    try {
      createMutate({ url, formData });
      if (successMessage) {
        alert('success: ', successMessage)
        setEmail('')
      }
      if (errorMessage) {
        alert('error: ', "Either email is not valid or already exists")
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
        <Link href='https://www.facebook.com/nutechcity'>
          <BsFacebook style={{ fontSize: '26px', marginRight: '10px' }} />
        </Link>
        <Link href='https://twitter.com/nugenesisou'>
          <AiFillTwitterCircle style={{ fontSize: '30px' }} />
        </Link>

      </div>
      <div style={{ fontSize: '12px', color: 'gray' }}>The Crypto Insider™ COPYRIGHT © 2017 - 2022 . ALL RIGHTS RESERVED.</div>
    </div>
  );
};

export default Footer;
