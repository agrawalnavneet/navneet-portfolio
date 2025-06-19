import React from "react";
import styled from "styled-components";

// Wrapper for entire section
const CertificatesSection = styled.section`
  padding: 100px 20px;
  background-color: ${({ theme }) => theme.bg};
  text-align: center;
`;

// Section Title
const SectionTitle = styled.h2`
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.text_primary};
`;

// Grid container
const CertificatesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
`;

// Card design
const CertificateCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
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
  line-height: 1.5;
`;

// CTA button
const LinkButton = styled.a`
  padding: 10px 22px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primary_dark || '#0053ba'});
  color: white;
  font-weight: 600;
  font-size: 14px;
  border-radius: 12px;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(135deg, ${({ theme }) => theme.primary_dark || '#0053ba'}, ${({ theme }) => theme.primary});
  }
`;

const Certificates = () => {
  return (
    <CertificatesSection>
      <SectionTitle>Certifications & Achievements</SectionTitle>
      <CertificatesWrapper>
        <CertificateCard>
          <CertificateImage src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~SHKT7UN6JEYY/CERTIFICATE_LANDING_PAGE~SHKT7UN6JEYY.jpeg" alt="Meta Certificate" />
          <CertificateTitle>Meta Full Stack Developer</CertificateTitle>
          <CertificateDescription>
            Completed Meta’s Full Stack Developer certification via Coursera.
          </CertificateDescription>
          <LinkButton href="https://www.coursera.org/account/accomplishments/verify/SHKT7UN6JEYY" target="_blank">
            View Certificate
          </LinkButton>
        </CertificateCard>

        <CertificateCard>
          <CertificateImage src="https://media.licdn.com/dms/image/v2/D5622AQFB0a3nC-SrjA/feedshare-shrink_800/B56ZU37l0ZHoAg-/0/1740400126560?e=1748476800&v=beta&t=OjoW0O79M9pEES-xgRXJTRCyrffP9FgOOTx529V30o0" alt="MongoDB Course" />
          <CertificateTitle>MongoDB University</CertificateTitle>
          <CertificateDescription>
            Completed Node.js Developer Path at MongoDB University.
          </CertificateDescription>
          <LinkButton href="https://learn.mongodb.com/c/e4M4sTbPSY2H-3eUt0S8hw" target="_blank">
            View Certificate
          </LinkButton>
        </CertificateCard>

        <CertificateCard>
          <CertificateImage src="https://media.licdn.com/dms/image/v2/D5622AQH1PdCLtPHn5g/feedshare-shrink_800/B56ZU40EERGsAg-/0/1740414929381?e=1748476800&v=beta&t=LvICEFcGuiwvg2TViYgzBSAdA0tjHvLvrcxvMnzyK7k" alt="ICP Web3 Sabha" />
          <CertificateTitle>ICP Web3 Sabha</CertificateTitle>
          <CertificateDescription>
            Participated in a 24-hour Hackathon organized by ICP India.
          </CertificateDescription>
          <LinkButton href="https://www.coursera.org/certificates/def789" target="_blank">
            View Certificate
          </LinkButton>
        </CertificateCard>

        <CertificateCard>
          <CertificateImage src="https://media.licdn.com/dms/image/v2/D5622AQGt9mTpi6gg2w/feedshare-shrink_800/B56ZW2nBG0GUAg-/0/1742525439953?e=1748476800&v=beta&t=3CF75LveJs_1ZrSz1RvQid8iccItOYbsmA3uFWEBdM4" alt="Cipher School DSA" />
          <CertificateTitle>Cipher School</CertificateTitle>
          <CertificateDescription>
            Completed 45-day DSA training program during summer internship.
          </CertificateDescription>
          <LinkButton href="https://university.mongodb.com/certificates/abc123" target="_blank">
            View Certificate
          </LinkButton>
        </CertificateCard>

        <CertificateCard>
          <CertificateImage src="https://media.licdn.com/dms/image/v2/D4E22AQFONRisSeIqzg/feedshare-shrink_800/B4EZVLyM6sGwAo-/0/1740733207547?e=1748476800&v=beta&t=7mSDvkwrEGvWHXDPq5x3M4nLkuSiReHH5ePP2kodtRA" alt="Sellular Hackathon" />
          <CertificateTitle>Sellular Hackathon</CertificateTitle>
          <CertificateDescription>
            Competed in a 48-hour national-level hackathon hosted by Sellular.
          </CertificateDescription>
          <LinkButton href="https://www.aws.com/certificates/xyz456" target="_blank">
            View Certificate
          </LinkButton>
        </CertificateCard>

        <CertificateCard>
          <CertificateImage src="https://media.licdn.com/dms/image/v2/D4D22AQEM7lwZI9a94g/feedshare-shrink_800/B4DZWz.Ua6H4Ag-/0/1742481217030?e=1748476800&v=beta&t=jU6cf_vZEbd6107AqCYYDTp_zZkOjxPg2VYRR9h-b0s" alt="Build with India" />
          <CertificateTitle>Build with India</CertificateTitle>
          <CertificateDescription>
            Engaged in national tech-building initiative — Build With India.
          </CertificateDescription>
          <LinkButton href="https://mail.google.com/mail/u/0/#search/build/FMfcgzQZTprGrngzcSVfLzlqnVQZcbjt" target="_blank">
            View Certificate
          </LinkButton>
        </CertificateCard>
      </CertificatesWrapper>
    </CertificatesSection>
  );
};

export default Certificates;
