import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import Button from '../buttons/Button';
import ParagraphText from '../typography/ParagraphText';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">Welcome to Code Blog!</h1>
            <ParagraphText className="hero__text">
              Here you can get to know Alonso's interests and projects.
            </ParagraphText>
            <Button to="/blogs" tag={Link} className="hero__button">
              Explore Blogs
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/altumcode.jpg"
              alt="vr guy"
              placeholder="blurrred"
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
