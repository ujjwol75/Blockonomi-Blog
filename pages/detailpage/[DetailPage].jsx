import { useRouter } from 'next/router'
import React from 'react'
import { Button } from 'react-bootstrap'
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
  console.log(DetailPage)


  const { isLoading: singlePostsLoading, data: singlePostsData } = useGetHook({
    queryKey: `singlePostsData-${DetailPage}`,
    url: `${APIS.posts}${DetailPage}`,
  });
  // {curElem?.slice(0,5)}
  console.log('singlepostdata', singlePostsData)

  return (
    <div className="detailpage">
        <TopNavbar />
        <hr />
        <SecondNavBar />
        <hr />
        <div>
        <Button variant="primary" style={{marginTop:'50px', fontSize:'12px'}}>ETHEREUM</Button>
        <NewsHeading title={singlePostsData?.title} created={singlePostsData?.created} />
        </div>
        <div>
        <Button variant="primary" style={{marginTop:'50px', fontSize:'12px', marginRight:'5px', padding:'10px 15px 10px 15px'}}>Share on Facebook</Button>
        <Button variant="primary" style={{marginTop:'50px', fontSize:'12px', marginRight:'5px', padding:'10px 15px 10px 15px'}}>Share On Twitter</Button>
        <Button variant="primary" style={{marginTop:'50px', fontSize:'12px', marginRight:'5px', padding:'10px 15px 10px 15px'}}><FaPlusSquare /></Button>
        </div>
        <NewsDetail singlepost={singlePostsData} />
        <Footer />
    </div>
  )
}

export default DetailPage