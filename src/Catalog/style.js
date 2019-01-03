import styled from 'styled-components';

const StyledCatalog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px;
  width: 45vw;
  overflow: hidden;
  border-radius: 10px;
  border-style: groove;
  border-color: sandybrown;
  border-width: 5px;
  color: white;
  background-color: rgba(0,0,0,0.5);

  @media (max-width: 700px) {
    width: auto;
  }
`;

const StyledButton = styled.button`
  border-color: #66023C;
  border-width: 5px;
  border-radius: 10%;
  min-width: 100px;
  min-height: 50px;
  background-color: #7042014;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
    background-color: goldenrod;
  }
`;

const StyledBts = styled.div`
  flex-grow: 3;
`;

export {StyledCatalog, StyledButton, StyledBts};
