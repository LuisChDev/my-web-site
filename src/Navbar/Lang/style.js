import styled from 'styled-components';
import posed from 'react-pose';

const StyledBtn = styled.button`
  margin: 8px 80px 0 0;
  background-color: DarkRed;
  color: white;
  transition: 0.2s;
  cursor: pointer;
  width: 150px;

  &:hover {
    background: goldenrod;
  }
`;

const StyledLang = styled.div`
  position: relative;
  display: float;
  float: right;
`;

const StyledCont = styled.div`
  position: absolute;
  display: none;
  background-color: DarkRed;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.15);
  z-index: 100;
  padding: 10px;
  display: ${({open}) => open?"block":"none"};
`;

const StyledItm = styled.div`
  display: block;
  background-color: DarkRed;
  cursor: pointer;
`;

export {StyledLang, StyledCont, StyledBtn, StyledItm};
