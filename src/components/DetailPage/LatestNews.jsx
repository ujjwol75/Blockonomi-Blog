import React from 'react'
import LatestNewsCard from './LatestNewsCard'

const LatestNews = () => {
  return (
    <div>
        <p style={{marginTop:'20px', fontWeight:'bold'}}>Latest News</p>
        <hr style={{width:'350px'}}/>
        <LatestNewsCard image="../../newsdetailimage.jpg" />
        <LatestNewsCard image="../../newsdetailimage.jpg" />
        <LatestNewsCard />
        <LatestNewsCard image="../../newsdetailimage.jpg" />
        <LatestNewsCard image="../../newsdetailimage.jpg" />
    </div>
  )
}

export default LatestNews