import Link from "next/link";
import React from "react";
import Footer from "../Footer/Footer";
import News from "../News/News";
import NewsImageTitle from "../News/NewsImage";
import SecondNavBar from "../SecondNavbar/SecondNavBar";
import TopNavbar from "../TopNavbar/TopNavbar";


const ScrappedMain = (props) => {
  console.log('hey', props.slug)
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
      {/* </Link> */}
    </div>
  );
};

export default ScrappedMain;
