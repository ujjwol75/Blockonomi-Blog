import React from "react";
import style from "./wrap.module.css";
const Wrap = () => {
  return (
    <div className={style.wrap}>

      <div className={style.wraprow} xs={4}>
        <div className={style.col}>
          <div className={style.row}>
            <img
              src="../../bitcoin.webp"
              alt=""
              style={{ marginRight: "4px", width:'30px' }}
            />
            <span>BTC/USD</span>
          </div>
          <span style={{ marginTop: "10px" }}>$20,599.69</span>
        </div>
        <div className={style.barimg}>
        <img src="../../chart.png" alt=""  />
        </div>
        
        </div>



        <div className={style.wraprow}>
        <div className={style.col}>
          <div className={style.row}>
            <img
              src="../../bitcoin.webp"
              alt=""
              style={{ marginRight: "4px" }}
            />
            <span>BTC/USD</span>
          </div>
          <span style={{ marginTop: "10px" }}>$20,599.69</span>
        </div>
        <div className={style.barimg}>
        <img src="../../chart.png" alt="" />
        </div>
        </div>

        <div className={style.wraprow}>
        <div className={style.col}>
          <div className={style.row}>
            <img
              src="../../bitcoin.webp"
              alt=""
              style={{ marginRight: "4px" }}
            />
            <span>BTC/USD</span>
          </div>
          <span style={{ marginTop: "10px" }}>$20,599.69</span>
        </div>
        <div className={style.barimg}>
        <img src="../../chart.png" alt=""/>
        </div>
        </div>

        <div className={style.wraprow} >
        <div className={style.col}>
          <div className={style.row}>
            <img
              src="../../bitcoin.webp"
              alt=""
              style={{ marginRight: "4px" }}
            />
            <span>BTC/USD</span>
          </div>
          <span style={{ marginTop: "10px" }}>$20,599.69</span>
        </div>
        <div className={style.barimg}>
        <img src="../../chart.png" alt="" />
        </div>
        </div>
      </div>
  );
};

export default Wrap;
