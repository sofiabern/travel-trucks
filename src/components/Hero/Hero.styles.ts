import styled from "styled-components";
import heroImage1x from "../../assets/images/hero@1x.webp";
import heroImage2x from "../../assets/images/hero@2x.webp";
import heroImage3x from "../../assets/images/hero@3x.webp";

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 0.7;
  color: var(--lighter);
  margin-bottom: 16px;
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--lighter);
  margin-bottom: 40px;
`;

export const Section = styled.section`
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

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;