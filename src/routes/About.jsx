import { useState, useEffect } from "react";
import remarkGfm from "remark-gfm";
import "./AboutStyle.css";
import Markdown from "react-markdown";
import Bio from "../components/Bio/Bio";
import AboutMd from "../content/about/index.md";
import Footer from "../components/Footer/Footer";

const About = () => {
  const [aboutText, setAboutText] = useState("");

  useEffect(() => {
    fetch(AboutMd)
      .then((res) => res.text())
      .then((text) => setAboutText(text));
  });

  const paragraphs = aboutText.split(/\n\s*\n/);

  return (
    <>
      <div className="about">
        <Bio />
        <div className="flex justify-start items-center pt-8">
          <h3 className="text-gradient">About Me</h3>
        </div>
        {paragraphs.map((paragraph, index) => (
          <Markdown
            linkTarget="_blank"
            key={index}
            className="markdown text-white-primary"
            children={paragraph}
            remarkPlugins={[remarkGfm]}
          ></Markdown>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default About;
