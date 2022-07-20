import News from "../src/components/News/News";
import SecondNavBar from "../src/components/SecondNavbar/SecondNavBar";

import Wrap from "../src/components/Wrap/Wrap";
import NewsWrap from "../src/components/NewsWarp/NewsWrap";
import Footer from "../src/components/Footer/Footer";
import { APIS } from "./api/hello";
import { Container, } from "react-bootstrap";
import useGetHook from "../src/components/CustomHooks/useGetHook";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [page, setPage] = useState(1)



  // pagination 
  const { data: scribedPostCoinBitCoinList } = useGetHook({
    queryKey: `filterDataWithPagination${page}`,
    url: `${APIS.posts}?page=${page}`,
  });



  return (
    <>
      <Head>
        <title>TheCryptoInsider - Home</title>
        <meta property="og:title" content={"TheCryptoInsider - Home<"} />
        <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
        <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta name="twitter:title" content={"TheCryptoInsider - Home<"} />
        <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
        <meta property="fb:app_id" content={"1144829116095615"} />
      </Head>
      <Container fluid>
        <SecondNavBar />
        <Wrap />
        <NewsWrap />
        <News data={scribedPostCoinBitCoinList} page={page} setPage={setPage} />
        <Footer />
      </Container>
    </>

  );
}
