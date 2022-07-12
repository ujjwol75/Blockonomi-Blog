
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import useGetHook from '../../src/components/CustomHooks/useGetHook';
import Footer from '../../src/components/Footer/Footer';
import NewsHeading from '../../src/components/News/NewsHeading';
import SecondNavBar from '../../src/components/SecondNavbar/SecondNavBar';
import TopNavbar from '../../src/components/TopNavbar/TopNavbar';
import Wrap from '../../src/components/Wrap/Wrap';
import { APIS } from '../api/hello';
import { FaPlusSquare } from 'react-icons/fa'
import NewsDetail from '../../src/components/DetailPage/NewsDetail';


const Detail = () => {

  const router = useRouter();
  const { sId } = router.query;

  const { data: postData } = useGetHook({
    queryKey: 'postData',
    url: APIS.posts,
    parma: 'params',
  });

  const { isLoading: singlePageScribedLoading, data: singlePageScrappedData } =
    useGetHook({
      queryKey: `singlePageScrappedData-${sId}`,
      url: `${APIS.scrappedPost}${sId}`,
    });


  return (
    <>
      <TopNavbar />
      <hr className="hrline" />
      <SecondNavBar />
      <hr />
      <Wrap />
      <Container>
        <Row>
          <Container style={{ marginLeft: '2%' }}>
            <Button variant="primary" style={{ marginTop: '50px', fontSize: '12px' }}>ETHEREUM</Button>
            <NewsHeading title={singlePageScrappedData?.title} created={singlePageScrappedData?.created} />
          </Container>
          <div style={{ marginLeft: '2%' }}>
            <Button variant="warning" style={{ marginTop: '50px', fontSize: '12px', marginRight: '5px', padding: '10px 15px 10px 15px', color: '#FFFFFF' }}>Share on Facebook</Button>
            <Button variant="primary" style={{ marginTop: '50px', fontSize: '12px', marginRight: '5px', padding: '10px 15px 10px 15px' }}>Share On Twitter</Button>
            <Button variant="dark" style={{ marginTop: '50px', fontSize: '12px', marginRight: '5px', padding: '10px 15px 10px 15px' }}><FaPlusSquare /></Button>
          </div>
          <Container >
            <NewsDetail data={singlePageScrappedData} content="-1" height="250px" />
          </Container>

        </Row>
      </Container>
      <Footer />

    </>
  );
};

export default Detail;
