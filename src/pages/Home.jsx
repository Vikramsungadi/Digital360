import { FAQ } from "../components/Home/FAQ";
import { Footer } from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import { Testimonials } from "../components/Home/Testimonials";
import { TopBanner } from "../components/Home/TopBanner";
import { USP } from "../components/Home/USP";

function Home() {
  return (
    <>
      <TopBanner />
      <Hero />;
      <USP />;
      <Services />;
      <Testimonials />;
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
