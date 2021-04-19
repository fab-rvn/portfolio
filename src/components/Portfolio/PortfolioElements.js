import styled from 'styled-components';

export const PortfolioContainer = styled.div`
  background: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  @media screen and (max-width: 768px) {
    min-height: 1100px;
  }
  @media screen and (max-width: 480px) {
    min-height: 1300px;
  }
`;

export const PortfolioH1 = styled.h1`
  font-size: 2.5rem;
  color: #282c34;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PortfolioCard = styled.div`
  background: #282c34;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2 ease-in-out;
  }
`;

export const PortfolioImg = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const PortfolioH2 = styled.h2`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const PortfolioP = styled.p`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 16px;
  text-align: center;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Link = styled.a`
  background: ${({ primary }) => (primary ? '#61dafb' : '#282c34')};
  color: ${({ dark }) => (dark ? '#282c34' : '#fff')};
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  outline: none;
  border: none;
  border-radius: 50px;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  white-space: nowrap;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#61dafb')};
  }
`;
