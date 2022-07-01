import React from "react";
import style from "./news.module.css";
import NewsTitle from "./NewsTitle";
import Link from 'next/link'


const NewsImageTitle = (props) => {
 
  console.log('propskoid', props.id)
  return (
    <div className={style.newsbox}>
      <Link href={`/detailpage/${props.id}`}>
      <a href="" style={{textDecoration:'none', color:'black'}}>
      <div className={style.imgdiv} style={{cursor:'pointer', maxHeight:"props?.height"}}>
        <img src={props.image} alt="" style={{height:props.height}} className={style.image}/>
        <span className={style.textimage}>METAVERSE</span>
      </div>

        <NewsTitle width={props.width} font={props.font} description={props.description} date={props.date} author={props.author} title={props.title} color={props.color} content={props.content} contentlength={props.contentlength}/>
        </a>
      
      </Link>
    </div>
  );
};

export default NewsImageTitle;
