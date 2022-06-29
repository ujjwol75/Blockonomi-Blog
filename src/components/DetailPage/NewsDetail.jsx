import React from "react";
import { Col, Row } from "react-bootstrap";
import { APIS } from "../../../pages/api/hello";
import AdvertisementImageContent from "../Advertisement/AdvertisementImageContent";
import AdvertisementTable from "../Advertisement/AdvertisementTable";
import useGetHook from "../CustomHooks/useGetHook";
import Footer from "../Footer/Footer";
import style from "./detailpage.module.css"
import LatestNews from "./LatestNews";
import NewsDetailParagraph from "./NewsDetailParagraph";

const NewsDetail = (props) => {

  const {isLoading: navigationLoading, data: latestNewsData} = useGetHook(
    {
      queryKey: 'latestNewsData',
      url:APIS.posts
  }
  )
  return (
    <>
    {/* {props.singlepost((map)=>{ */}
      <div className={style.newsdetail}>
      <div className={style.newsdetailrow}>
        <div style={{ height:'500px'}}>
          <img src={props?.singlepost?.image} alt="" style={{width:'100%'}}/>
          <NewsDetailParagraph description={props?.singlepost?.description}/>
          {/* <NewsDetailParagraph title={props?.singlepost?.title}/> */}
        </div>
        <div className={style.mainad}>
          <AdvertisementImageContent />
          <p style={{fontWeight:'bold', fontSize:'20px', marginTop:'10px'}}>Latest News</p>
          {latestNewsData?.results?.slice(0,3)?.map((curEle, index)=>
          <LatestNews image={curEle?.image} title={curEle?.title} created={curEle?.created} key={index}/>
          )}
          
          <AdvertisementImageContent />
          <AdvertisementTable />
        </div>
      </div>
    </div>
    {/* })} */}
    

    <div>
        <AdvertisementImageContent />
    </div>

    
    </>
  );
};

export default NewsDetail;
