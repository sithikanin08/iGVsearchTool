import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import OpportunityProviders from "./components/OpportunityProviders";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f1f3e9]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <OpportunityProviders />
      <Contact />
      <Footer />
    </main>
  );
}
