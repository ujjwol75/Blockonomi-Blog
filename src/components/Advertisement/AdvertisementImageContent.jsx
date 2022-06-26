import React from "react";
import style from "./advertisement.module.css";
import { BiSearch } from "react-icons/bi";
import AdvertisementImage from "./AdvertisementImage";

const AdvertisementImageContent = () => {
  return (
    <>
      <div style={{ textAlign: "center", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Type and hit enter"
          style={{ paddingLeft: "30px" }}
        />
        {/* <BiSearch className={style.search} /> */}
      </div>
      <p style={{ marginTop: "20px", fontSize: "13px", textAlign: "center" }}>
        ADVERTISEMENT
      </p>

      <AdvertisementImage />
    </>
  );
};

export default AdvertisementImageContent;
