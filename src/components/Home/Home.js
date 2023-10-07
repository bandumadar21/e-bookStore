import useTitle from "../../hooks/useTitle";
import Faq from "./Faq";
import FeatureProducts from "./FeatureProducts";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import './Home.css';

const Home = () => {
  useTitle("E-BookStore");
  return (
    <div>
      <main>
        <Hero/>
        <FeatureProducts/>
        <Testimonials/>
        <Faq/>
      </main>
    </div>
  )
};

export default Home
