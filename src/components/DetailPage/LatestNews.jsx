import React from 'react'
import LatestNewsCard from './LatestNewsCard'

const LatestNews = (props) => {
  return (
    <div>
        {/* <p style={{marginTop:'20px', fontWeight:'bold'}}>Latest News</p> */}
        <hr style={{width:'350px'}}/>
        <LatestNewsCard image={props?.image} title={props?.title} created={props?.created} />
        
    </div>
  )
}

export default LatestNews