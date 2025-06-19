import React from "react";
import styled from "styled-components";

const CertificatesSection = styled.section`
  padding: 100px 20px;
  background-color: ${({ theme }) => theme.bg};
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.text_primary};
`;

const CertificatesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CertificateCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 20px;
  transition: filter 0.3s ease;

  ${CertificateCard}:hover & {
    filter: brightness(0.95);
  }
`;

const CertificateTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`;

const CertificateDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  line-height: 1.6;
`;

const LinkButton = styled.a`
  padding: 10px 22px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primary_dark || '#0053ba'});
  color: white;
  font-weight: 600;
  font-size: 14px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(135deg, ${({ theme }) => theme.primary_dark || '#0053ba'}, ${({ theme }) => theme.primary});
  }
`;

const certificates = [
  {
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~SHKT7UN6JEYY/CERTIFICATE_LANDING_PAGE~SHKT7UN6JEYY.jpeg",
    title: "Meta Full Stack Developer",
    description: "Completed Meta’s Full Stack Developer certification via Coursera.",
    link: "https://www.coursera.org/account/accomplishments/verify/SHKT7UN6JEYY",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D5622AQFB0a3nC-SrjA/feedshare-shrink_800/B56ZU37l0ZHoAg-/0/1740400126560",
    title: "MongoDB University",
    description: "Completed Node.js Developer Path at MongoDB University.",
    link: "https://learn.mongodb.com/c/e4M4sTbPSY2H-3eUt0S8hw",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D5622AQH1PdCLtPHn5g/feedshare-shrink_800/B56ZU40EERGsAg-/0/1740414929381",
    title: "ICP Web3 Sabha",
    description: "Participated in a 24-hour Hackathon organized by ICP India.",
    link: "https://www.coursera.org/certificates/def789",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D5622AQGt9mTpi6gg2w/feedshare-shrink_800/B56ZW2nBG0GUAg-/0/1742525439953",
    title: "Cipher School",
    description: "Completed 45-day DSA training program during summer internship.",
    link: "https://university.mongodb.com/certificates/abc123",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D4E22AQFONRisSeIqzg/feedshare-shrink_800/B4EZVLyM6sGwAo-/0/1740733207547",
    title: "Sellular Hackathon",
    description: "Competed in a 48-hour national-level hackathon hosted by Sellular.",
    link: "https://www.aws.com/certificates/xyz456",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEM7lwZI9a94g/feedshare-shrink_800/B4DZWz.Ua6H4Ag-/0/1742481217030",
    title: "Build with India",
    description: "Engaged in national tech-building initiative — Build With India.",
    link: "https://mail.google.com/mail/u/0/#search/build/FMfcgzQZTprGrngzcSVfLzlqnVQZcbjt",
  },
];

const Certificates = () => {
  return (
    <CertificatesSection>
      <SectionTitle>Certifications & Achievements</SectionTitle>
      <CertificatesWrapper>
        {certificates.map((item, index) => (
          <CertificateCard key={index}>
            <CertificateImage src={item.image} alt={item.title || "Certificate"} />
            <CertificateTitle>{item.title || "Untitled Certificate"}</CertificateTitle>
            <CertificateDescription>{item.description}</CertificateDescription>
            <LinkButton href={item.link} target="_blank" rel="noopener noreferrer">
              View Certificate
            </LinkButton>
          </CertificateCard>
        ))}
      </CertificatesWrapper>
    </CertificatesSection>
  );
};

export default Certificates;
