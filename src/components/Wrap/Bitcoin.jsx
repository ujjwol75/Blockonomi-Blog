import React from 'react'
import style from "./wrap.module.css";

const Bitcoin = () => {
  return (
    <div className={style.wraprow}>
              <div className={style.wrapcol}>
              <div className={style.wraprow}>
                <div className={style.wrapimg}>
                  <img
                    src="../../bitcoin.webp"
                    alt=""
                    style={{ marginRight: "4px", width: "100%" }}
                  />
                </div>

                <span className={style.btcspan}>BTC/USD</span>
              </div>
              <span>$ 19,095.13</span>
              </div>
              
              <img src="../../chart.png" alt="" />
            </div>
  )
}

export default Bitcoin