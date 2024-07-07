import Header from "app/components/layout/header";
import AboutMe from "app/components/sections/about";
import Contact from "app/components/sections/contact";
import Hero from "app/components/sections/hero";
import Projects from "app/components/sections/projects";
import Skills from "app/components/sections/skills";

export default function Home() {
  return (
    <main className=" min-h-screen mx-[5%]">
      <Hero />
      <AboutMe />
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </main>
  );
}
