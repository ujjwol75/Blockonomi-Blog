import React from "react";
import style from "./news.module.css";

const NewsTitle = (props) => {
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
       

      </div>
    </>
  );
};

export default NewsTitle;
