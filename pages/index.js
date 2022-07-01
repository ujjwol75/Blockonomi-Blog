import News from "../src/components/News/News";
import SecondNavBar from "../src/components/SecondNavbar/SecondNavBar";
import TopNavbar from "../src/components/TopNavbar/TopNavbar";
import Wrap from "../src/components/Wrap/Wrap";
import NewsWrap from "../src/components/NewsWarp/NewsWrap";
import Footer from "../src/components/Footer/Footer";
import NewsCategory from "../src/components/NewsCategory/NewsCategory";
import usePostHook from "../src/components/CustomHooks/usePostHook";
import { APIS } from "./api/hello";
import { Col, Container, Row } from "react-bootstrap";
import PaginationComponent from "../src/components/Pagination/PaginationComponent";
import useGetHook from "../src/components/CustomHooks/useGetHook";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1)
  const {
    mutate: createMutate,
    isPostError: errorMessage,
    isPostSuccess: successMessage,
    postData: postData,
  } = usePostHook({
    queryKey: 'suscribeToNewsLetter',
  });

  const handleNewsLetterClick = (email) => {
   
    const url = APIS.newsLetter;
    const formData = {
      email: email,
    };

    try {
      createMutate({ url, formData });
      
    } catch (e) {

    }
    if(successMessage){
      consoe.log('success: ' , successMessage)
    }
  };

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
      <News data={scribedPostCoinBitCoinList}/>
      {/* <NewsCategory /> */}
      <PaginationComponent page={page} setPage={setPage} />
      <Footer handleNewsLetterClick={handleNewsLetterClick}/>
    </Container>
    
  );
}
