import React from "react";
import { Col, Row } from "react-bootstrap";
import AdvertisementImageContent from "../Advertisement/AdvertisementImageContent";
import AdvertisementTable from "../Advertisement/AdvertisementTable";
import Footer from "../Footer/Footer";
import style from "./detailpage.module.css"
import LatestNews from "./LatestNews";
import NewsDetailParagraph from "./NewsDetailParagraph";

const NewsDetail = (props) => {
  return (
    <>
    <div className={style.newsdetail}>
      <div className={style.newsdetailrow}>
        <div style={{ minHeight:'200px'}}>
          <img src="" alt="" style={{width:'100%'}}/>
          <NewsDetailParagraph />
          <NewsDetailParagraph heading="Now The RBA Wants a Throw"/>
        </div>
        <div className={style.mainad}>
          <AdvertisementImageContent />
          <LatestNews />
          <AdvertisementImageContent />
          <AdvertisementTable />
        </div>
      </div>
    </div>

    <div>
        <AdvertisementImageContent />
    </div>

    
    </>
  );
};

export default NewsDetail;
