import React from "react";
import style from "./news.module.css";


const NewsTitle = (props) => {
  console.log("author", props.author);

  return (
    <>
      <div
        className={style.newstitle}
        style={{ width: props.width, color: props.color }}
      >
        <h1 style={{ fontSize: "17px" }}>{props.title}</h1>

        <h3
          style={{
            fontSize: "12px",
            color: "gray",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          <span>
            {props?.author ? (
              <p>
                BY <span>{props?.author}</span>
              </p>
            ) : (
              ""
            )}
          </span>{" "}
          <span>{props?.date ? <span>{props?.date}</span> : ""}</span>
        </h3>

        {/* <span>{props?.description ? <p>{props?.description}</p> : ""}</span> */}
        <div
          dangerouslySetInnerHTML={{
            __html: props?.content?.slice(0,310), 
          }}
        />
        ...
      </div>
    </>
  );
};

export default NewsTitle;
