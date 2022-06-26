import Head from "next/head";
import Image from "next/image";
import { Button } from "react-bootstrap";
import News from "../src/components/News/News";
import NewsHeading from "../src/components/News/NewsHeading";
import SecondNavBar from "../src/components/SecondNavbar/SecondNavBar";
import TopNavbar from "../src/components/TopNavbar/TopNavbar";
import Wrap from "../src/components/Wrap/Wrap";
import NewsImage from "../src/components/News/NewsImage";
import styles from "../styles/Home.module.css";
import NewsWrap from "../src/components/NewsWarp/NewsWrap";
import Footer from "../src/components/Footer/Footer";
import NewsCategory from "../src/components/NewsCategory/NewsCategory";

export default function Home() {
  return (
    <div>
      <TopNavbar />
      <hr className="hrline" />
      <SecondNavBar />
      <hr />
      <Wrap />
      <NewsWrap />
      <News />
      <NewsCategory />
      <Footer />
    </div>
  );
}
