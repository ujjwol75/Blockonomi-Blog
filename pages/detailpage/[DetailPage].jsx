import { useRouter } from 'next/router'
import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { FaPlusSquare } from 'react-icons/fa'
import useGetHook from '../../src/components/CustomHooks/useGetHook'
import NewsDetail from '../../src/components/DetailPage/NewsDetail'
import Footer from '../../src/components/Footer/Footer'
import NewsHeading from '../../src/components/News/NewsHeading'
import SecondNavBar from '../../src/components/SecondNavbar/SecondNavBar'
import TopNavbar from '../../src/components/TopNavbar/TopNavbar'
import { APIS } from '../api/hello'

const DetailPage = () => {
  const router = useRouter();
  const {DetailPage} = router.query


  const { isLoading: singlePostsLoading, data: singlePostsData } = useGetHook({
    queryKey: `singlePostsData-${DetailPage}`,
    url: `${APIS.posts}${DetailPage}`,
  });


  return (
    <>
    <TopNavbar />
        <hr />
        <SecondNavBar />
        <hr />
      <Container style={{marginTop:'-30px'}}>
      <Row>
        <Container style={{marginLeft:'2%'}}>
        <Button variant="primary" style={{marginTop:'50px', fontSize:'12px'}}>ETHEREUM</Button>
        <NewsHeading title={singlePostsData?.title} created={singlePostsData?.created} />
        </Container>
        <div style={{marginLeft:'2%'}}>
        <Button variant="warning" style={{marginTop:'50px', fontSize:'12px', marginRight:'5px', padding:'10px 15px 10px 15px', color:'#FFFFFF'}}>Share on Facebook</Button>
        <Button variant="primary" style={{marginTop:'50px', fontSize:'12px', marginRight:'5px', padding:'10px 15px 10px 15px'}}>Share On Twitter</Button>
        <Button variant="dark" style={{marginTop:'50px', fontSize:'12px', marginRight:'5px', padding:'10px 15px 10px 15px'}}><FaPlusSquare /></Button>
        </div>
        <Container >
        <NewsDetail data={singlePostsData} content="-1" height="250px" />
        </Container>

    </Row>
    
    </Container>
    <Footer/>

    </>
  )
}

export default DetailPage