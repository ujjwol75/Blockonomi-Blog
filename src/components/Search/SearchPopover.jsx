import React, { useState } from 'react'
import style from './searchpopover.module.css'
import { ImCross } from "react-icons/im";
import Home from '../../../pages';

const SearchPopover = (props) => {
    // const [search, setSearch] = useState()
    const handleClick=()=>{
        console.log('cross cliked')
        props.setSearch(false)
    }
  return (
    <div className={style.searchdiv}>
        <div className={style.search}>
            <ImCross className={style.cross} onClick={handleClick}/>
            {(props.search==false) && <Home /> }

            <input type="text" placeholder='Search...' />
            {/* <span>Type above and press Enter to search. Press Esc to cancel.</span> */}
        
        </div>
        
    </div>
  )
}

export default SearchPopover