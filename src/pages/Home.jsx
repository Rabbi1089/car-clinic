
import About from "../components/About";
import Slider from "../components/Slider";
import Services from "./services/Services";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <Services />
     
    </div>
  );
};

export default Home;
