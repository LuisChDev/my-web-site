import React from "react";
import { StyledCard, StyledImg, StyledContainer } from "./style";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import pelika from "../media/logoGama.png";
import tomorrow from "../media/logoTomorrow.png";
import encora from "../media/logoEncora.webp";

import {DB} from '../database.js';

const ExpSlider = ({ lang }) => {
  const exps = DB[lang].experience.expList;

  return (
    <StyledContainer>
      <Carousel infiniteLoop>
        <StyledCard>
          <StyledImg alt="" src={tomorrow} />
          <h2>{exps[1].name}</h2>
          <h3>{DB[lang].description}</h3>
          <p>
            {exps[1].description}
          </p>
        </StyledCard>
        <StyledCard>
          <StyledImg alt="" src={pelika} />
          <h2>{exps[0].name}</h2>
          <h3>{DB[lang].description}</h3>
          <p>
            {exps[0].description}
          </p>
        </StyledCard>
        <StyledCard>
          <StyledImg alt="" src={encora} />
          <h2>{exps[2].name}</h2>
          <h3>{DB[lang].description}</h3>
          <p>
            {exps[2].description}
          </p>
        </StyledCard>
      </Carousel>
    </StyledContainer>
  );
};

export default ExpSlider;
