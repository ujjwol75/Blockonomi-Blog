import React from 'react'
import style from "./wrap.module.css";

const Bitcoin = (props) => {
  const { title, price, changeDay } = props;
  return (
    <div className={style.wraprow}>
      <div className={style.wrapcol}>
        <div className={style.wraprow}>
          <span className={style.btcspan}>{title}</span>
        </div>
      <span className="p-0">{price}</span>
        {changeDay >= 0 ? (
          <span className={style.perc}>
            {!isNaN(changeDay) ? parseFloat(changeDay).toFixed(2) : "N/A"}
          </span>
        ) : (
          <span className={style.percentage}>
            {!isNaN(changeDay) ? parseFloat(changeDay).toFixed(2) : "N/A"}

          </span>
        )}
      </div>

    </div>
  )
}

export default Bitcoin