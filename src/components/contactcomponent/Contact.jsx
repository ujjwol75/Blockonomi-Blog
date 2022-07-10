import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Address from './Address'
import style from './contact.module.css'

const Contact = (props) => {
    const [data, setData] = useState({
        fullname: '',
        email: '', 
        phone: '',
        message: ''
    })

    const handle = (e) =>{
        const newsdata = {...data}
        newsdata[e.target.id] = e.target.value
        setData(newsdata)
 
    }
    const handleSubmit=()=>{
        props.handleContact(data.fullname, data.email, data.phone, data.message)
        setData({
            fullname:'',
            email:'',
            phone:'',
            message:''
        })
    }
    console.log('dataas', data)
  return (
    <Container>
        <Row>
            <Col lg={8} >
                <div className={style.contact}>
                    <h3 style={{marginLeft:'10%', marginTop:'0px'}}>Contact Form</h3>
                    <form action="" style={{textAlign:'center'}} onSubmit={handleSubmit}>
                        <div className={style.contactform}>
                            <input type="text" value={data.fullname} placeholder='Full Name' onChange={(e)=>handle(e)} id='fullname'/>
                        </div>
                        <div className={style.contactform}>
                            <input type="email  " value={data.email} placeholder='Email' id='email' onChange={(e)=>handle(e)}/>
                        </div>
                        <div className={style.contactform}>
                            <input type="phone" value={data.phone} placeholder='Phone Number' id='phone' onChange={(e)=>handle(e)}/>
                        </div>
                        <div className={style.contactform}>
                            <textarea name="message" value={data.message} cols="50" rows="4" placeholder='Message' style={{marginBottom:'30px', paddingLeft:'10px', border:'none', backgroundColor:'#F1F1F1'}} onChange={(e)=>handle(e)} id='message' ></textarea>
                        </div>
                        <Button style={{marginBottom:'30px'}} onClick={handleSubmit}>Submit</Button>
                    </form>
                </div>
            </Col>
            <Col lg={4}>
                <Address />
            </Col>
        </Row>
    </Container>
  )
}

export default Contact