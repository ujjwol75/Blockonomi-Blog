import React from "react";
import style from "./news.module.css";
import NewsTitle from "./NewsTitle";
import Link from 'next/link'


const NewsImageTitle = (props) => {
 
  return (
    <div className={style.newsbox}>
      <Link href={`/detailpage/${props.blogId}`}>
      <a href="" style={{textDecoration:'none'}}>
      <div className={style.imgdiv} style={{cursor:'pointer', maxWidth:'100%', height:props.height}}>
        <img src={props.image} alt="" style={{width: '100%', maxHeight:props.height}} />
        <span className={style.textimage}>METAVERSE</span>
      </div>
      
      
      
        <NewsTitle width={props.width} font={props.font} description={props.description} date={props.date} author={props.author} title={props.title} color={props.color}/>
        </a>
      
      </Link>
    </div>
  );
};

export default NewsImageTitle;
