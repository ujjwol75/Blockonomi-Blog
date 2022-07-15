import React from 'react'
import style from "./wrap.module.css";

const Bitcoin = (props) => {
  const { title, price, changeDay } = props;
  return (
    <div className={style.wraprow}>
      <div className={style.wrapcol}>
        <div className={style.wraprow}>
          {/* <div className={style.wrapimg}>
            <img
              src="../../bitcoin.webp"
              alt=""
              style={{ marginRight: "4px", width: "100%" }}
            />
          </div> */}

          <span className={style.btcspan}>{title}</span>
        </div>
        {changeDay >= 0 ? (
          <span className={style.perc}>
            {parseFloat(changeDay).toFixed(2)}
          </span>
        ) : (
          <span className={style.percentage}>
            {parseFloat(changeDay).toFixed(2)}
          </span>
        )}
      </div>
      <span className="p-2">{price}</span>
      {/* <img src="../../chart.png" alt="" /> */}
    </div>
  )
}

export default Bitcoin