import React from 'react'
import style from './news.module.css'
import NewsDescription from './NewsDescription'
import Link from 'next/link'

const NewsTitle = (props) => {
  return (
    <div className={style.newstitle} style={{width:props.width}}>
      {/* <Link > */}
      <h1 style={{fontSize:'17px'}}>
          The Sandbox & OVERtheReality Have Partnered To Bring The NFT NYC Treasure Hunt To Reality
          </h1>
      {/* </Link> */}
        
        <h3 style={{fontSize:'12px', color:'gray', marginTop:'10px', marginBottom:'20px'}}><span>{props?.author?<p>BY <span>{props?.author}</span></p>:''}</span>  <span>{props?.date?<span>{props?.date}</span>:''}</span></h3>
        {/* <NewsDescription  /> */}
        <span>{props?.description?<p>{props?.description}</p>:''}</span>
       
    </div>
   
  )
}

export default NewsTitle