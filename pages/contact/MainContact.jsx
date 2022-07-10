import React from 'react'
import { Container } from 'react-bootstrap'
import Contact from '../../src/components/contactcomponent/Contact'
import usePostHook from '../../src/components/CustomHooks/usePostHook'
import Footer from '../../src/components/Footer/Footer'
import SecondNavBar from '../../src/components/SecondNavbar/SecondNavBar'
import TopNavbar from '../../src/components/TopNavbar/TopNavbar'
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
      email:email,
      phone_number:phone,
      message:message
    };

    try {
      createMutate({ url, formData });
      
    } catch (e) {

    }
    if(successMessage){
      console.log('success: ' , successMessage)
    }
  };

  return (
    <Container fluid>
      <TopNavbar />
      <hr />
      <SecondNavBar />
      <hr />
      <Contact handleContact={handleContact}/>
      <Footer />
    </Container>
  )
}

export default MainContact