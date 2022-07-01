import React, { useState } from 'react'
import style from './pagination.module.css'
import { IoIosArrowDropleft,IoIosArrowDropright } from "react-icons/io";
import useGetHook from '../CustomHooks/useGetHook';
import { APIS } from '../../../pages/api/hello';


const PaginationComponent = (props) => {
  

  const handlePrevious=()=>{
    props.setPage(props.page-1)
  }

  const handleNext=()=>{
    props.setPage(props.page+1)
  }

  console.log('page:', props.page)

  // pagination 
  // const { data: scribedPostCoinBitCoinList } = useGetHook({
  //   queryKey: `filterDataWithPagination${page}`,
  //   url: `${APIS.posts}?page=${page}`,
  // });

  // console.log('scribedDataWithPagination', scribedPostCoinBitCoinList);

  return (
    <div className={style.paginationmain}>
        <div>
            <IoIosArrowDropleft className={style.arrow} onClick={handlePrevious} />
        </div>
        <div>
          <IoIosArrowDropright className={style.arrow} onClick={handleNext}/>
        </div>
    </div>
  )
}

export default PaginationComponent