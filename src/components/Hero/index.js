import React, { useState } from 'react';
import Video from '../../assets/video/video.mp4';
import {
  ArrowForward,
  ArrowRight,
  Button,
  HeroBg,
  HeroBtn,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from './HeroElements';

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg
            playsinline
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
          />
        </HeroBg>
        <HeroContent>
          <HeroH1>Hi! I'm faber.</HeroH1>
          <HeroP>
            Web designer and frontend developer based in Barcelona, ES. I love
            create custom and modern website.
          </HeroP>
          <HeroBtn>
            <Button
              to="portfolio"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              spy={true}
              exact="true"
              offset={-80}
            >
              View Portfolio {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtn>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
