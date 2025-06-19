import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes.js";
import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import { BrowserRouter } from "react-router-dom";
import Skills from "./components/sections/Skills.jsx";
import Experience from "./components/sections/Experience.jsx";
import Education from "./components/sections/Eduaction.jsx";
import Footer from "./components/sections/Footer.jsx";
import ProjectViewer from "./components/sections/ProjectViewer.jsx";
import Achievements from "./components/sections/Achievements.jsx";
import Certificates from "./components/sections/Certificates.jsx";
import Techprofiles from "./components/sections/Techprofiles.jsx";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  height: 90vh;
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
        <Navbar />
        <Body>
          {/* <Sparkles /> */}
          <div>
            <Hero />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>

            <ProjectViewer
              projects={[
                { title: "Aviatours", url: "https://aviatours.com.au/" },
                { title: "RahulClassroom", url: "https://rahulclassroom.in/" },
                { title: "My Portfolio", url: "https://flipzonto.com/" },
              ]}
            />

            <Achievements />
            <Techprofiles/>

            <Certificates />

            <Wrapper>
              <Education />
            </Wrapper>

            <Footer />
          </div>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;