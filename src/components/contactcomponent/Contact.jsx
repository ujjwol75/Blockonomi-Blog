import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Address from './Address'
import style from './contact.module.css'
// import Form from 'react-bootstrap/Form';


const Contact = (props) => {
    const [data, setData] = useState({
        fullname: '',
        email: '',
        phone: '',
        message: ''
    })

    const handle = (e) => {
        const newsdata = { ...data }
        newsdata[e.target.id] = e.target.value
        setData(newsdata)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleContact(data.fullname, data.email, data.phone, data.message)
        setData({...data , fullname:"", email:"", phone:"", message:""})
    }
    return (
        <Container>
            <Row>
                <Col lg={8} >
                    <div className={style.contact}>
                        <h3 style={{ marginLeft: '10%', marginTop: '0px' }}>Contact Form</h3>
                        <form action="" style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
                            <div className={style.contactform}>
                                <input type="text" value={data.fullname} placeholder='Full Name' onChange={(e) => handle(e)} id='fullname' aria-required/>
                            </div>
                            <div className={style.contactform}>
                                <input type="email" value={data.email} placeholder='Email' id='email' required onChange={(e) => handle(e)} />
                            </div>
                            <div className={style.contactform}>
                                <input type="phone" value={data.phone} placeholder='Phone Number' id='phone' onChange={(e) => handle(e)} required/>
                            </div>
                            <div className={style.contactform}>
                                <input type="textarea" name='message' value={data.message} placeholder='Message' id='message' onChange={(e) => handle(e)} required  />
                            
                            </div>
                            <Button style={{ marginBottom: '30px', marginTop:'10px', backgroundColor:'#01696E', border:'1px solid #01696E' }} onClick={handleSubmit}>Submit</Button>
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