import Head from 'next/head'
import React from 'react'
import { Container } from 'react-bootstrap'
import Contact from '../../src/components/contactcomponent/Contact'
import usePostHook from '../../src/components/CustomHooks/usePostHook'
import Footer from '../../src/components/Footer/Footer'
import SecondNavBar from '../../src/components/SecondNavbar/SecondNavBar'
import Wrap from '../../src/components/Wrap/Wrap'
import { APIS } from '../api/hello'

const MainContact = () => {
  const {
    mutate: createMutate,
    isPostError: errorMessage,
    isPostSuccess: successMessage,
    postData: postData,
  } = usePostHook({
    queryKey: 'contactUsForm',
  });

  const handleContact = (fullname, email, phone, message) => {


    const url = APIS.contactUs;
    const formData = {
      full_name: fullname,
      email: email,
      phone_number: phone,
      message: message
    };

    try {
      createMutate({ url, formData });

    } catch (e) {

    }
  
  };

  return (
    <>
      <Head>
        <title>TheCryptoInsider - Contact</title>
        <meta property="og:title" content={" TheCryptoInsider - Contact"} />
        <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
        <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta name="twitter:title" content={" TheCryptoInsider - Contact"} />
        <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
        <meta property="fb:app_id" content={"1144829116095615"} />
      </Head>
      <Container fluid>

        <SecondNavBar />
        <Wrap />
        <hr />
        <Contact handleContact={handleContact} />
        <Footer />
      </Container>
    </>
  )
}

export default MainContact