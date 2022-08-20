import React, { useState } from 'react'
import style from './searchpopover.module.css'
import { ImCross } from "react-icons/im";
import Home from '../../../pages';
import Search from './Search';

const SearchPopover = (props) => {
    // const [search, setSearch] = useState()
  const [submit, setSubmit] = useState(true)

    const handleClick=()=>{
        props.setSearch(false)
    }
   
  return (
    <>
     {submit && <div className={style.searchdiv}>
        <div className={style.search}>
            <ImCross className={style.cross} onClick={handleClick}/>
            {(props.search==false) && <Home /> }


           <Search submit={props.submit} setSubmit={props.setSubmit} search={props.search} setSearch={props.setSearch}/>

        
        </div>
        
    </div>}
    
    </>
  )
}

export default SearchPopover