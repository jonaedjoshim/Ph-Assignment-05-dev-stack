import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TechnologySection from "./components/TechnologySection/TechnologySection";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TechnologySection />
      </main>
    </>
  );
}

export default App;