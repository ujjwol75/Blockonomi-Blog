import React from 'react'
import style from './news.module.css'
import NewsDescription from './NewsDescription'
import Link from 'next/link'

const NewsTitle = (props) => {
  console.log('title', props.title)
  console.log('author', props.author)

  return (
    <div className={style.newstitle} style={{width:props.width, color:props.color}}>
 
      <h1 style={{fontSize:'17px'}}>
          {props.title}
          </h1>

        
        <h3 style={{fontSize:'12px', color:'gray', marginTop:'10px', marginBottom:'20px'}}><span>{props?.author?<p>BY <span>{props?.author}</span></p>:''}</span>  <span>{props?.date?<span>{props?.date}</span>:''}</span></h3>
    
        <span>{props?.description?<p>{props?.description}</p>:''}</span>
       
    </div>
   
  )
}

export default NewsTitle