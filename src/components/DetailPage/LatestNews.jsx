import Link from 'next/link'
import React from 'react'
import LatestNewsCard from './LatestNewsCard'

const LatestNews = (props) => {
  console.log('slughai', props.slug)

  return (
    <div>
        {/* <p style={{marginTop:'20px', fontWeight:'bold'}}>Latest News</p> */}
        <hr style={{width:'350px'}}/>
        <Link href={`/detailpage/${props.slug}`}>
          <a href="">
          <LatestNewsCard image={props?.image} title={props?.title} created={props?.created} id={props?.id} contentlength={props.contentlength}/>
          </a>
        </Link>
        
    </div>
  )
}

export default LatestNews