import React from "react";
import NewsImageTitle from "../News/NewsImage";

const ScrappedMain = (props) => {
  console.log(props)
  return (
    <div>
      <NewsImageTitle
        image={props.image}
        height="250px"
        author={props.author}
        date={props.date}
        content={props.content}
        title={props.title}
        contentlength={props.contentlength}
        id={props.id}
        slug={props.slug}
      />
    </div>
  );
};

export default ScrappedMain;
