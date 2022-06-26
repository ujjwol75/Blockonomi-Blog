import React from 'react'
import { Button } from 'react-bootstrap'
import { FaPlusSquare } from 'react-icons/fa'
import NewsDetail from '../src/components/DetailPage/NewsDetail'
import Footer from '../src/components/Footer/Footer'
import NewsHeading from '../src/components/News/NewsHeading'
import NewsImage from '../src/components/News/NewsImage'
import SecondNavBar from '../src/components/SecondNavbar/SecondNavBar'
import TopNavbar from '../src/components/TopNavbar/TopNavbar'

const DetailPage = () => {
  return (
    <div className="detailpage">
        <TopNavbar />
        <hr />
        <SecondNavBar />
        <hr />
        <div>
        <Button variant="primary" style={{marginTop:'50px', fontSize:'12px'}}>ETHEREUM</Button>
        <NewsHeading />
        </div>
        <div>
        <Button variant="primary" style={{marginTop:'50px', fontSize:'12px', marginRight:'5px', padding:'10px 15px 10px 15px'}}>Share on Facebook</Button>
        <Button variant="primary" style={{marginTop:'50px', fontSize:'12px', marginRight:'5px', padding:'10px 15px 10px 15px'}}>Share On Twitter</Button>
        <Button variant="primary" style={{marginTop:'50px', fontSize:'12px', marginRight:'5px', padding:'10px 15px 10px 15px'}}><FaPlusSquare /></Button>
        </div>
        <NewsDetail blogId={props.blogId}/>
        <Footer />
    </div>
  )
}

export default DetailPage