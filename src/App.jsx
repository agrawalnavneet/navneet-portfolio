import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { darkTheme } from "./utils/Themes";
import { PROJECTS } from "./constants";

// Layout Components
import Navbar from "./components/layout/Navbar";

// Section Components
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import ProjectViewer from "./components/sections/ProjectViewer";
import Achievements from "./components/sections/Achievements";
import Certificates from "./components/sections/Certificates";
import TechnicalProfiles from "./components/sections/TechnicalProfiles";

// Styled Components
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Body>
          <Navbar />
          <Hero />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <ProjectViewer projects={PROJECTS} />
          <Achievements />
          <Certificates />
          <TechnicalProfiles />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
