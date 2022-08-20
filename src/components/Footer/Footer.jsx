import React, { useState } from 'react';
import style from './footer.module.css';
import { BsFacebook, BsLinkedin, BsInstagram, BsYoutube } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import InputEmail from './InputEmail';
import usePostHook from '../CustomHooks/usePostHook';
import { APIS } from '../../../pages/api/hello';
import Link from 'next/link';
import { toast } from 'react-toastify';

const Footer = (props) => {
  const [error, setError] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const {
    mutate: createMutate,
    isPostError: errorMessage,
    isPostSuccess: successMessage,
    postData: postData,
  } = usePostHook({
    queryKey: 'suscribeToNewsLetter',
  });

  const handleNewsLetterClick = async (email, setEmail) => {
    setIsFocus(true);
    if (email === '') {
      setError(true);
      return;
    } else if (!email.includes('@')) {
      setError(true);
      return;
    } else {
      const url = APIS.newsLetter;
      const formData = {
        email: email,
      };
      try {
        await createMutate({ url, formData });
        if (errorMessage === false) {
          toast.success('Thanks for subscription!');
        } else {
          toast.error('Email address is already exists!');
        }
      } catch (e) {
        console.log(e);
      }
      setEmail('');
    }
  };
  return (
    <div className={style.footer}>
      <p style={{ fontSize: '14px', color: 'gray', cursor: 'pointer' }}>
        All content on thecryptoinsider.news is provided solely for product,
        service or investment. The opinions expressed in this Site do not
        constitute investment.
      </p>
      <div style={{ width: '200px', cursor: 'pointer' }}>
        <Link href='/'>
          <img
            src='../../mainLogo.png'
            alt=''
            className={style.footerimg}
            style={{ width: '100%' }}
          />
        </Link>
      </div>

      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <InputEmail
          handleNewsLetterClick={handleNewsLetterClick}
          error={error}
          isFocus={isFocus}
          setError={setError}
        />
      </div>
      <div className={style.icon}>
        <Link
          href='https://www.facebook.com/nutechcity'
          style={{ color: 'white' }}
        >
          <BsFacebook
            style={{ fontSize: '28px', marginRight: '10px', cursor: 'pointer' }}
          />
        </Link>
        <Link href='https://twitter.com/nugenesisou' style={{ color: 'white' }}>
          <AiFillTwitterCircle
            style={{ fontSize: '30px', marginRight: '10px', cursor: 'pointer' }}
          />
        </Link>
        <Link
          href='https://au.linkedin.com/company/nugenesis'
          style={{ color: 'white' }}
        >
          <BsLinkedin
            style={{ fontSize: '30px', marginRight: '10px', cursor: 'pointer' }}
          />
        </Link>
        <Link
          href='https://www.youtube.com/channel/UCUcwdvfmOUB9axXVaKKW4lA'
          style={{ color: 'white' }}
        >
          <BsYoutube
            style={{ fontSize: '30px', marginRight: '10px', cursor: 'pointer' }}
          />
        </Link>
        <Link
          href='https://www.instagram.com/nugenesis.ou/'
          style={{ color: 'white' }}
        >
          <BsInstagram
            style={{ fontSize: '30px', marginRight: '10px', cursor: 'pointer' }}
          />
        </Link>
        <Link
          href='https://www.tiktok.com/@nugenesis.ou'
          style={{ color: 'white' }}
        >
          <FaTiktok
            style={{ fontSize: '30px', marginRight: '10px', cursor: 'pointer' }}
          />
        </Link>
      </div>
      <div style={{ fontSize: '12px', color: 'gray' }}>
        The Crypto Insider™ COPYRIGHT © 2017 - 2022 . ALL RIGHTS RESERVED.
      </div>
      <p style={{ fontSize: '12px', color: 'gray' }}>
        {' '}
        Powered by{' '}
        <a href='https://www.dibtech.com.au/' style={{ color: '#245557' }}>
          {' '}
          Dibtech
        </a>
      </p>
    </div>
  );
};

export default Footer;
