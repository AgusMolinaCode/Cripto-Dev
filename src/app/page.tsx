import Slider from "./components/Slider";
import Tweets from "./components/Tweet/Tweets";
import NewsApi from "./components/News/NewsApi";
import Calculadora from "./components/Calculadora";
import MainTab from "./components/MainTab/Tab";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="fondo dark:bg-gray-900 duration-200 min-h-screen">
      <div className="mx-2 md:mx-10 h-[0.01rem] bg-gray-900 dark:bg-gray-200 duration-300" />
      <Slider />
      <div className="px-2 mt-8">
        <div>
          <MainTab />
        </div>
        <div className="grid md:grid-cols-2 my-10">
          {/* <NewsApi /> */}
          <div>
            <Calculadora />
          </div>
        </div>
        <Tweets />
      </div>
      <Footer />
    </div>
  );
}
