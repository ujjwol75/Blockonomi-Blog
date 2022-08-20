import React from "react";
import style from "./news.module.css";
import NewsTitle from "./NewsTitle";
import Link from 'next/link'


const NewsImageTitle = (props) => {

  return (
    <div className={style.newsbox}>
      <Link href={`/article/${props.slug}`}>
        <a href="" style={{ textDecoration: 'none', color: 'black' }}>
          <div className={style.imgdiv} style={{ cursor: 'pointer', height: props?.height }}>
            <img src={props.image} alt="hero image" className={style.image} />
         
          </div>

          <NewsTitle width={props.width} font={props.font} description={props.description} date={props.date} author={props.author} title={props.title} color={props.color} content={props.content} contentlength={props.contentlength} />
        </a>

      </Link>
    </div>
  );
};

export default NewsImageTitle;
