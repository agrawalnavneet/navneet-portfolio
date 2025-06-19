import React from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 15px rgba(204, 72, 72, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 12px;
  color: #333;
  background-color: #eeeeee;
`;

const IframeWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  margin-bottom: 30px;
  color: white;
`;

const ProjectViewer = ({ projects = [] }) => {
  return (
    <Container>
      <SectionTitle>My Projects</SectionTitle>
      <Grid>
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>{project.title}</CardHeader>
            <IframeWrapper>
              <StyledIframe src={project.url} allowFullScreen title={project.title} />
            </IframeWrapper>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectViewer;
