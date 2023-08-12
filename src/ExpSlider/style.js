import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: rgba(0,0,0,0.5);
  padding: 2vh 2vw;
  color: white;
`;

const StyledImg = styled.img`
  max-width: 30vw;
  max-height: 40vh;
`;

const StyledContainer = styled.div`
  margin: 3vh 3vw;
  max-width: 50vw;
  @media only screen and (max-width: 700px) {
    max-width: unset;
  }
`;


export {StyledCard, StyledImg, StyledContainer};
