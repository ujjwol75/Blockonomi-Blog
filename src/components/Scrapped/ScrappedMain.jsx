import React from 'react'
import Footer from '../Footer/Footer'
import News from '../News/News'
import NewsImageTitle from '../News/NewsImage'
import SecondNavBar from '../SecondNavbar/SecondNavBar'
import TopNavbar from '../TopNavbar/TopNavbar'

const ScrappedMain = (props) => {
      console.log('idea', props.id)
  return (
    <div>
        <NewsImageTitle image={props.image} height="250px" author={props.author} date={props.date} content={props.content} title={props.title} contentlength={props.contentlength} id={props.id}/>
    </div>
  )
}

export default ScrappedMain