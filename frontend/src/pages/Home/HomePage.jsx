import About from "../../ui/About";
import Hero from "../../ui/Hero";
import Pricing from "../../ui/Pricing";
import Slider from "../../ui/Slider";

function HomePage() {
  return (
    <>
      <section id="hero" className="bg">
        <Hero />
      </section>

      <Slider />

      <section id="about" className="min-h-screen pt-16">
        <About />
      </section>

      <section id="pricing" className="min-h-screen">
        <Pricing />
      </section>
    </>
  );
}

export default HomePage;
