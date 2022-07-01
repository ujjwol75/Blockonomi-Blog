import { useRouter } from "next/router";
import React, { useState } from "react";
import SecondNavBar from "../SecondNavbar/SecondNavBar";

const Search = (props) => {
  const [keyPress, setKeyPress] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const router = useRouter();

  const searchHandler = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleKeyPress = (e) => {
    e.preventDefault();
    router.push(`/searchpage/${searchKeyword}`);
    // setSubmit(false)
    
  };

  return (
    <div>
       <form action="" onSubmit={handleKeyPress}>
        <input
          type="text"
          placeholder="Search..."
          keyword={searchKeyword}
          value={searchKeyword}
          onChange={searchHandler}
          
        />
      </form>
      
    </div>
  );
};

export default Search;
