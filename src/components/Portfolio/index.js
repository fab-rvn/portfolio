import React from 'react';
import Svg1 from '../../assets/images/charts.svg';
import Svg3 from '../../assets/images/plant.svg';
import Svg2 from '../../assets/images/react.svg';
import {
  BtnWrap,
  Link,
  PortfolioCard,
  PortfolioContainer,
  PortfolioH1,
  PortfolioH2,
  PortfolioImg,
  PortfolioP,
  PortfolioWrapper,
} from './PortfolioElements';

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>My Portfolio</PortfolioH1>
      <PortfolioWrapper>
        <PortfolioCard>
          <PortfolioImg src={Svg1} alt="work1" />
          <PortfolioH2>Expense Tracker App</PortfolioH2>
          <PortfolioP>
            Expense Tracker built using React, Context API, Material-UI.
          </PortfolioP>
          <BtnWrap>
            <Link
              href="https://loving-snyder-66f3f9.netlify.app"
              target="_blank"
              primary="true"
              dark="true"
            >
              View Website
            </Link>
          </BtnWrap>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioImg src={Svg2} alt="work2" />
          <PortfolioH2>Todo App</PortfolioH2>
          <PortfolioP>
            Todo App build with React, Redux, styled-component
          </PortfolioP>
          <BtnWrap>
            <Link
              href="https://frontendmaster-todo-app.netlify.app"
              target="_blank"
              primary="true"
              dark="true"
            >
              View Website
            </Link>
          </BtnWrap>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioImg src={Svg3} alt="work3" />
          <PortfolioH2>Work 3</PortfolioH2>
          <PortfolioP>Work Description</PortfolioP>
          <BtnWrap>
            <Link target="_blank" primary="true" dark="true">
              View Website
            </Link>
          </BtnWrap>
        </PortfolioCard>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;
