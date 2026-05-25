import Image from "next/image";
import "./globals.css";
import Headers from "./Headers";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
export default function Home() {
  return (
    <>
      <Headers />
      <About />
      <Experience />
      <Skills />
    </>
  );
}
