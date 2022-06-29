import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import useGetHook from '../../src/components/CustomHooks/useGetHook';
import Footer from '../../src/components/Footer/Footer';
import ScrappedMain from '../../src/components/Scrapped/ScrappedMain'
import SecondNavBar from '../../src/components/SecondNavbar/SecondNavBar';
import TopNavbar from '../../src/components/TopNavbar/TopNavbar';
import { APIS } from '../api/hello';

const ScrappedData = () => {
    const { isLoading: navigationLoading, data: news } = useGetHook({
        queryKey: "news",
        url: APIS.posts,
      });
      console.log('news', news)
  return (
    <>
    <TopNavbar />
    <hr />
    <SecondNavBar />
    <hr />
    <Container>
        <Row>
        {news?.results?.map((item, key)=>
        <Col md="4" key={key}><ScrappedMain image={item.image} height="250px" author={item.author} date={item.date} content={item.content} title={item.title}/></Col>
     
      )}
            
            
        </Row>
    </Container>
    <Footer />
     
        </>
    // </div>
  )
}

export default ScrappedData