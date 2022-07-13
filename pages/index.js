import News from "../src/components/News/News";
import SecondNavBar from "../src/components/SecondNavbar/SecondNavBar";
import TopNavbar from "../src/components/TopNavbar/TopNavbar";
import Wrap from "../src/components/Wrap/Wrap";
import NewsWrap from "../src/components/NewsWarp/NewsWrap";
import Footer from "../src/components/Footer/Footer";
import usePostHook from "../src/components/CustomHooks/usePostHook";
import { APIS } from "./api/hello";
import {  Container, } from "react-bootstrap";
import useGetHook from "../src/components/CustomHooks/useGetHook";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1)

 

  // pagination 
  const { data: scribedPostCoinBitCoinList } = useGetHook({
    queryKey: `filterDataWithPagination${page}`,
    url: `${APIS.posts}?page=${page}`,
  });



  return (
    <Container fluid>
      <TopNavbar />
      <hr className="hrline" />
      <SecondNavBar />
      <hr />
      <Wrap />
      <NewsWrap />
      <News data={scribedPostCoinBitCoinList} page={page} setPage={setPage}/>
      <Footer/>
    </Container>
  );
}
