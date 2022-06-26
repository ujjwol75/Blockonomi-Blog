import React from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import style from "./advertisement.module.css";
import AdvertisementImageContent from "./AdvertisementImageContent";
import AdvertisementTable from "./AdvertisementTable";
const Advertisement = () => {
  return (
    <div className={style.mainad} >
      <AdvertisementImageContent />
      <AdvertisementTable />
    </div>
  );
};

export default Advertisement;
