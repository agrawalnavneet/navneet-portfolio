import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: 100%;
  gap: 12px;
  align-items: center;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  width: 100%;
`;

const Card = styled.div`
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 28px;
  width: 240px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  color: ${({ theme }) => theme.text_primary};
  
  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(23, 92, 230, 0.25) 0px 8px 32px;
  }
`;

const IconWrapper = styled.div`
  font-size: 40px;
  margin-bottom: 16px;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const TechProfiles = () => {
  const profiles = [
     {
      name: "LeetCode",
      icon: <SiLeetcode />,
      link: "https://leetcode.com/u/_agarwalnavneet15/",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/agrawalnavneet",
    },
    {
      name: "GeeksforGeeks",
      icon: <SiGeeksforgeeks />,
      link: "https://www.geeksforgeeks.org/user/agrawalna1gaz/",
    },
    {
      name: "HackerRank",
      icon: <FaHackerrank />,
      link: "https://www.hackerrank.com/profile/agrawalnavneet91",
    },
     {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/navneet-agrawal",
    },
  ];

  return (
    <Container id="TechProfiles">
      <Wrapper>
        <Title>Tech Profiles</Title>
        <Desc>Here are my active developer profiles where I code, solve problems, and share my journey.</Desc>
        <CardGrid>
          {profiles.map((profile, index) => (
            <a key={index} href={profile.link} target="_blank" rel="noreferrer">
              <Card>
                <IconWrapper>{profile.icon}</IconWrapper>
                <Name>{profile.name}</Name>
              </Card>
            </a>
          ))}
        </CardGrid>
      </Wrapper>
    </Container>
  );
};

export default TechProfiles;