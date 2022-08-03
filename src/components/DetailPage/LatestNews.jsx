import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { APIS } from '../../../pages/api/hello';
import useGetHook from '../CustomHooks/useGetHook';
import LatestNewsCard from './LatestNewsCard'

const LatestNews = (props) => {
  const { isLoading: postsLoading, data: popularPostsData } = useGetHook(
    {
      queryKey: 'popularPostsData',
      url: APIS?.popularPost
    }
  );
  if (postsLoading) return "Loading..."
  return (
    <div>
      <hr />

      <div style={{ margin: '20px 0 20px 0', cursor: 'pointer' }}>
        {popularPostsData?.results?.map((item, key) =>
          <Link href={`/article/${item.slug}`} key={key}>
            <Row>
              <Col style={{ height: '50px', width: '100px' }} lg="2">
                <img src={item?.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

              </Col>
              <Col style={{ width: '250px', fontWeight: 'bold' }}>{item.title}</Col>
              <Row>
                <span style={{ fontSize: '13px', color: 'gray', marginTop: '4px' }}>{item.created}</span>
              </Row>
            </Row>
          </Link>
        )}

      </div>

    </div>
  )
}

export default LatestNews