import { MotionConfig } from "framer-motion";
import { About } from "./components/About";
import { Contact, FinalCta, Footer, Objective } from "./components/Closing";
import { Education } from "./components/Education";
import { Connections, Experience } from "./components/Experience";
import { Hero, HighlightsBar } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ResumeSheet } from "./components/ResumeSheet";
import { Areas, Differentials, Skills } from "./components/Skills";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="site">
        <a href="#sobre" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lift">
          Pular para o conteúdo
        </a>
        <Navbar />
        <main>
          <Hero />
          <HighlightsBar />
          <About />
          <Experience />
          <Connections />
          <Education />
          <Skills />
          <Areas />
          <Differentials />
          <Objective />
          <Contact />
          <FinalCta />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
      <ResumeSheet />
    </MotionConfig>
  );
}
