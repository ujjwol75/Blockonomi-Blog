import News from "../src/components/News/News";
import SecondNavBar from "../src/components/SecondNavbar/SecondNavBar";
import TopNavbar from "../src/components/TopNavbar/TopNavbar";
import Wrap from "../src/components/Wrap/Wrap";
import NewsWrap from "../src/components/NewsWarp/NewsWrap";
import Footer from "../src/components/Footer/Footer";
import NewsCategory from "../src/components/NewsCategory/NewsCategory";

export default function Home() {
  return (
    <div className="c">
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
