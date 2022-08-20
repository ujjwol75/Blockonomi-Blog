import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import SecondNavBar from '../SecondNavbar/SecondNavBar';

import NewsImageTitle from '../News/NewsImage';
import { Col, Container, Row } from 'react-bootstrap';
import Paginate from '../Pagination/Paginate';
import { useRouter } from 'next/router';

const MainSearch = (props) => {
  const { data, currentPage, setCurrentPage, keyword } = props;
  const [postsPerPage] = useState(20);

  const router = useRouter();

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    router.push('#news');
  };
  return (
    <div>
      <SecondNavBar />
      <hr />
      <Container>
        <p style={{ fontSize: '30px' }}>
          Your Search on Keyword {keyword}
          <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
            {props?.SearchPage ? props?.SearchPage : ''}
          </span>{' '}
        </p>
        <Row>
          {!props?.data?.results?.length == 0 ? (
            props?.data?.results?.map((item, key) => (
              <Col md='4' key={key}>
                <NewsImageTitle
                  image={item.image}
                  id={item.id}
                  title={item.title}
                  height='250px'
                  slug={item.slug}
                />
              </Col>
            ))
          ) : (
            <h3 className='text-center mt-4'>News Not Found !</h3>
          )}
          {data?.results?.length ? (
            <Paginate
              postsPerPage={postsPerPage}
              totalPosts={data?.count}
              paginate={paginate}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : null}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default MainSearch;
