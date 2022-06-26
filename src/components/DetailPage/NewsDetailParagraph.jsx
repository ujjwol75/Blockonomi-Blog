import React from "react";
import { Col, Row } from "react-bootstrap";
import style from "./detailpage.module.css"

const NewsDetailParagraph = (props) => {
  return (
    
    <div className={style.detailparagraph}>
      <Row>
        <h1 style={{}}>{props?.heading}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore omnis, eaque recusandae ea est placeat cupiditate iure eligendi magni quis laudantium libero natus id pariatur eveniet adipisci tempore aspernatur. Sunt.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore omnis, eaque recusandae ea est placeat cupiditate iure eligendi magni quis laudantium libero natus id pariatur eveniet adipisci tempore aspernatur. Sunt. dolor sit amet, consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore omnis, eaque recusandae ea est placeat cupiditate iure eligendi magni quis laudantium libero natus id pariatur eveniet adipisci tempore aspernatur. Sunt.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore omnis, eaque recusandae ea est placeat cupiditate iure eligendi magni quis laudantium libero natus id pariatur eveniet adipisci tempore aspernatur. Sunt.</p>
      </Row>
    </div>
  );
};

export default NewsDetailParagraph;
