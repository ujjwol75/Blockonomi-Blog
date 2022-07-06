import React, { useState } from "react";
import style from "./pagination.module.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import useGetHook from "../CustomHooks/useGetHook";
import { APIS } from "../../../pages/api/hello";

const PaginationComponent = (props) => {
  const handlePrevious = () => {
    props.setPage(props.page - 1);
  };

  const handleNext = () => {
    props.setPage(props.page + 1);
  };

  return (
    <div className={style.paginationmain}>
      <div className={style.pagediv}>
        <div>
          <IoIosArrowDropleft
            className={style.arrow}
            onClick={handlePrevious}
          />
        </div>
        <span style={{fontWeight:'bold'}}>{props.page}</span> 
        <div>
          <IoIosArrowDropright className={style.arrow} onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default PaginationComponent;
