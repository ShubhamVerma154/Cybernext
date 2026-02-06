import "./assets/css/main.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Overlay from "./components/Overlay";
import Imagewithtext from "./components/ImageWithText";
import About from "./components/About";
import ScrollTop from "./components/ScrollTop";
import Reviews from "./components/Reviews";
import Sticky from "./components/StickySection";

function App() {
  return (
    <>
      <ScrollTop />
      <Header />
      <Overlay />
      <Banner />
      <About />
      <Imagewithtext />
      <Reviews />
      <Sticky />
    </>
  );
}

export default App;
