import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Bitcoin from "./Bitcoin";
import style from "./wrap.module.css";
const Wrap = () => {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <div className={style.wrap} lg='3'>
        <Row>
          <Col sm='12' md='6' lg='3' xl='3'>
            <Bitcoin />
          </Col>
          <Col sm='12' md='6' lg='3' xl='3' className={style.bitcoincol}>
            <Bitcoin />
          </Col>
          <Col sm='12' md='6' lg='3' xl='3' className={style.bitcoincol}>
            <Bitcoin />
          </Col>
          <Col sm='12' md='6' lg='3' xl='3' className={style.bitcoincol}>
            <Bitcoin />
          </Col>
        </Row>
      </div>
    </div>
  );
};
//     <Container fluid='sm'>
// <div className={style.wrap}>

// <div className={style.wraprow} xs={4}>
//   <div className={style.col}>
//     <div className={style.row}>
//       <div style={{width:'25px'}}>
// <img
//   src="../../bitcoin.webp"
//   alt=""
//   style={{ marginRight: "4px", width:'100%' }}
// />
//       </div>

//       <span className={style.btcspan} >BTC/USD</span>
//     </div>
//     <span style={{ marginTop: "10px", fontSize:'14px' }}>$20,599.69</span>
//   </div>
//   <div className={style.barimg}>
//   <img src="../../chart.png" alt="" style={{width:'100px'}}/>
//   </div>

//   </div>

//   <div className={style.wraprow}>
//   <div className={style.col}>
//     <div className={style.row}>
//     <div style={{width:'25px'}}>
//       <img
//         src="../../bitcoin.webp"
//         alt=""
//         style={{ marginRight: "4px", width:'100%' }}
//       />
//       </div>
//       <span className={style.btcspan}>BTC/USD</span>
//     </div>
//     <span style={{ marginTop: "10px", fontSize:'14px' }}>$20,599.69</span>
//   </div>
//   <div className={style.barimg}>
//   <img src="../../chart.png" alt="" style={{width:'100px'}}/>
//   </div>
//   </div>

//   <div className={style.wraprow}>
//   <div className={style.col}>
//     <div className={style.row}>
//     <div style={{width:'25px'}}>
//       <img
//         src="../../bitcoin.webp"
//         alt=""
//         style={{ marginRight: "4px", width:'100%' }}
//       />
//       </div>
//       <span className={style.btcspan}>BTC/USD</span>
//     </div>
//     <span style={{ marginTop: "10px", fontSize:'14px' }}>$20,599.69</span>
//   </div>
//   <div className={style.barimg}>
//   <img src="../../chart.png" alt="" style={{width:'100px'}}/>
//   </div>
//   </div>

//   <div className={style.wraprow} >
//   <div className={style.col}>
//     <div className={style.row}>
//     <div style={{maxWidth:'25px'}}>
//       <img
//         src="../../bitcoin.webp"
//         alt=""
//         style={{ marginRight: "4px", width:'100%' }}
//       />
//       </div>
//       <span className={style.btcspan}>BTC/USD</span>
//     </div>
//     <span style={{ marginTop: "10px", fontSize:'14px' }}>$20,599.69</span>
//   </div>
//   <div className={style.barimg}>
//   <img src="../../chart.png" alt="" style={{width:'100px'}}/>
//   </div>
//   </div>
// </div>
//     </Container>

//   );
// };

export default Wrap;
