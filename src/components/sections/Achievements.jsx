import React from "react";
import styled from "styled-components";


// Sample achievements data
const achievements = [
  {
    image:"https://media.licdn.com/dms/image/v2/D5622AQFqX3WkwqlSBA/feedshare-shrink_800/feedshare-shrink_800/0/1728196983528?e=1748476800&v=beta&t=Zt5YR6mdLrMywSOLz_DJ3Y6XgPJ5BR-Cs4G-iR323IA",
    title: "Campus Ambassador",
    description: "Appointed as a Campus Ambassador for Emertxe Information Technologies, responsible for promoting the company's initiatives and fostering engagement within the campus community.",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D5622AQFqX3WkwqlSBA/feedshare-shrink_800/feedshare-shrink_800/0/1728196983528?e=1748476800&v=beta&t=Zt5YR6mdLrMywSOLz_DJ3Y6XgPJ5BR-Cs4G-iR323IA",
    title: "GeeksforGeeks Milestone",
    description: "Solved 150+ questions and earned official GFG swag.",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D5622AQFIyXYBxylJZw/feedshare-shrink_800/B56ZT0QXiEHQAk-/0/1739264722723?e=1748476800&v=beta&t=FWcIoWzJnUX2i43TG2jcjvgZ4hEuiAIuZIa2T2kQKdY",
    title: "Web-a-Thon ",
    description: "Successfully hosted one of the biggest hackathons at LPU.",
  },

  {
    image: "https://media.licdn.com/dms/image/v2/C4D22AQFUUZrx1IBh6A/feedshare-shrink_1280/feedshare-shrink_1280/0/1664091383816?e=1748476800&v=beta&t=ixM9jL4e8JzfuSgaPqfAns4kFrkzGhK17KiKBI0RM7E",
    title: "Fresher League Winner",
    description: "Winner of Fresher League 2k22",
  },

  {
    image: "https://media.licdn.com/dms/image/v2/D5622AQGEw88RDVm-ag/feedshare-shrink_1280/feedshare-shrink_1280/0/1709219722953?e=1748476800&v=beta&t=4Uju6ex36f0vfILEtjZMY3s-cahoXWmTmuzLLdLSXKY",
    description: "Hosted a Cultural Event",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D5622AQG6T6uOE8QFyA/feedshare-shrink_2048_1536/B56ZTMWkhwGUAs-/0/1738595285366?e=1748476800&v=beta&t=9NMJ2sRlMzAcsKAF07GIJ2yeNML-AZ0V1wcouVSceck",
    description: "Hosted 24hr AI ",
  },
];

const AchievementsSection = styled.section`
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

const Card = styled.div`
  width: 300px;
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
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

const Achievements = () => {
  return (
    <AchievementsSection id="Achievements">
      <SectionTitle>Achievements</SectionTitle>
      <CardsWrapper>
        {achievements.map((achieve, index) => (
          <Card key={index}>
            <CardImage src={achieve.image} alt={achieve.title} />
            <CardContent>
              <Title>{achieve.title}</Title>
              <Description>{achieve.description}</Description>
            </CardContent>
          </Card>
        ))}
      </CardsWrapper>
    </AchievementsSection>
  );
};

export default Achievements;
