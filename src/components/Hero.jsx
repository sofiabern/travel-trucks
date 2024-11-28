import styled from "styled-components";
import Button from "./Button";
import heroImage1x from "../assets/images/hero@1x.webp";
import heroImage2x from "../assets/images/hero@2x.webp";
import heroImage3x from "../assets/images/hero@3x.webp";

const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 0.7;
  color: var(--lighter);
  margin-bottom: 16px;
`;

const Paragraph = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--lighter);
  margin-bottom: 40px;
`;

const Section = styled.section`
  background-image: url(${heroImage1x});
  background-color: var(--gray);
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  height: calc(100vh - 72px);
  margin: 0 auto;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(.${heroImage2x});
  }

  @media (min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    background-image: url(${heroImage3x});
  }
`;

const HeroWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Hero = () => {
  return (
    <Section>
      <div className="container">
        <HeroWrapper>
          <Title>Campers of your dreams</Title>
          <Paragraph>You can find everything you want in our catalog</Paragraph>
          <Button to="/catalog" type="link" padding="49px">
            View more
          </Button>
        </HeroWrapper>
      </div>
    </Section>
  );
};

export default Hero;
