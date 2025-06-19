import React from "react";
import styled from "styled-components";

const projects = [
  {
    name: "Aviatours",
    image: "https://aviatours.com.au/",
    url: "https://aviatours.com.au/",
    description:
      "Delivered a fully responsive tourism website for an Australian client, showcasing travel packages, custom inquiry forms, and blog integration.",
  },
  {
    name: "Rahul Classroom",
    image: "https://rahulclassroom.in/static/media/logo.00f70043dc84c2219b02.png",
    url: "https://rahulclassroom.in/",
    description:
      "Built an EdTech platform offering test series, video lectures, and learning resources. Developed the backend APIs and frontend interface.",
  },
  {
    name: "Flipzonto",
    image: "https://flipzonto.com/_next/static/media/logo.e18fc153.png",
    url: "https://flipzonto.com/",
    description:
      "Developed a B2B grocery distribution system with admin and salesman panels to manage orders, inventory, and shop assignments.",
  },
];

const ProjectsSection = styled.section`
  padding: 80px 30px;
  background-color: ${({ theme }) => theme.bg};
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text_primary};
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;

const Card = styled.a`
  width: 300px;
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-8px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  background: #fff;
  padding: 20px;
`;

const CardContent = styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
`;

const Projects = () => {
  return (
    <ProjectsSection id="Projects">
      <SectionTitle>Projects</SectionTitle>
      <CardsWrapper>
        {projects.map((project, index) => (
          <Card href={project.url} target="_blank" key={index}>
            <CardImage src={project.image} alt={project.name} />
            <CardContent>
              <Title>{project.name}</Title>
              <Description>{project.description}</Description>
            </CardContent>
          </Card>
        ))}
      </CardsWrapper>
    </ProjectsSection>
  );
};

export default Projects;
