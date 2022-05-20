import React from 'react';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">
              “Knowledge is a treasure, but practice is the key to it.”
            </h1>
            <ParagraphText className="hero__text">― Lao Tzu</ParagraphText>
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
