import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
import Knowledge from "../components/UI/Knowledge";
import Contact from "../components/UI/Contact";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <About />
      <Knowledge />
      <Contact />
    </Fragment>
  );
}
