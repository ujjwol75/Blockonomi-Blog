import React from "react";
import style from "./news.module.css";
import NewsTitle from "./NewsTitle";
import Link from 'next/link'


const NewsImageTitle = (props) => {
  return (
    <div className={style.newsbox}>
      <Link href={`/DetailPage/${props.blogId}`}>
      <div className={style.imgdiv} style={{cursor:'pointer', width:'100%'}}>
        <img src={props?.image} alt="" style={{width: '100%', height:props.height}} />
        <span className={style.textimage}>METAVERSE</span>
      </div>
      </Link>
      
      <NewsTitle width={props.width} font={props.font} description={props.description} date={props.date} author={props.author} />
    </div>
  );
};

export default NewsImageTitle;
