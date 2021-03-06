import styled from 'styled-components';
import { COLOR } from '../../styles/colors';

export const SectionContainer = styled.div`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const SectionWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  z-index: 1;
  @media screen and (max-width: 768px) {
    min-height: 800px;
  }
`;

export const SectionRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
    display: block;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const TopLine = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  background: ${COLOR.linearGradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.textSecondary};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: ${({ isCircular }) => (isCircular ? '50%' : '')};
  filter: grayscale(25%);
  padding-right: 0;
  @media screen and (max-width: 768px) {
    width: 60%;
    display: block;
    margin: auto;
  }
`;
