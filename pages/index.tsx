import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Research from "../components/Research";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Manu Mathew Jiss | AI Engineer & ML Researcher</title>
        <meta
          name="description"
          content="Manu Mathew Jiss — AI Engineer, ML Researcher & Full-Stack Developer. Master's CS student at University of the Pacific. Published at IEEE ISTAS25."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="relative min-h-screen bg-bg-primary text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Research />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
