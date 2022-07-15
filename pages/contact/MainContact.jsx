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
    // if (successMessage) {
    //   console.log('success: ', successMessage)
    //   alert(successMessage)
    // }
  };

  return (
    <>
    
    <Head>
        <title>Contact:The Crypto Insider</title>
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