import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import ContactForm from "../components/ContactForm";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Landing() {
  const [section, setSection] = useState("");

  const handleScroll = (sec) => {
    setSection(sec); // set which section to render
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top for modal effect
  };

  return (
    <div>
      <Navbar onScroll={handleScroll} />
      <Hero />
      <Projects />
      <Clients />

      {/* Conditionally render sections when navbar is clicked */}
      {section === "contact" && <ContactForm />}
      {section === "newsletter" && <Newsletter />}

      <Footer />
    </div>
  );
}
