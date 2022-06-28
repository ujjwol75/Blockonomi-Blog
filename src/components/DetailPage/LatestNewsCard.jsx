import React from 'react'
import { Col, Row } from 'react-bootstrap'

const LatestNewsCard = (props) => {
  return (
    <div style={{width:'320px', margin:'20px 0 20px 0'}}>
        <Row>
            <Col style={{height:'50px', width:'100px'}} lg="2">
               <img src={props?.image} alt="" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
            </Col> 
            <Col style={{width:'250px', fontWeight:'bold'}}>{props.title}</Col>
            <Row>
                <span style={{fontSize:'13px', color:'gray', marginTop:'4px'}}>{props.created}</span>
            </Row>
        </Row>
    </div>
  )
}

export default LatestNewsCard