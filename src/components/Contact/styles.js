import styled from 'styled-components';

export const ContactContainer = styled.div`
  background: ${({ theme }) => theme.navbarBg};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0% rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0% transparent 100%);
    z-index: 2;
  }
`;

export const ContactBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  overflow: hidden;
`;

export const MediaBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: center;
  background: ${({ theme }) => theme.body};
`;

export const ContactContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactH1 = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 48px;
  text-align: center;
  margin-bottom: 24px;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const ContactP = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ContactBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;