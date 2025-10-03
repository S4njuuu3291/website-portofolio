import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import CareerJourney from "./sections/CareerJourney";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-inter bg-gray-50 text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CareerJourney />
      </main>
      <Footer />
    </div>
  );
}

export default App;
