import React from 'react'
import Footer from '../Footer/Footer'
import News from '../News/News'
import SecondNavBar from '../SecondNavbar/SecondNavBar'
import TopNavbar from '../TopNavbar/TopNavbar'

const MainSearch = (props) => {
  return (
    <div>
        <TopNavbar />
        <hr />
        <SecondNavBar />
        <hr />
        <News data={props.data} search={props.search} searchpage={props.searchpage}/>
        <Footer />
    </div>
  )
}

export default MainSearch