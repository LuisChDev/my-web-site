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
  min-height: 100vh;
  color: white;
  background-color: rgba(0,0,0,0.5);

  @media (max-width: 700px) {
    width: auto;
  }
`;

const StyledButton = styled.button`
  border-color: #66023C;
  border-width: 5px;
  min-width: 100px;
  min-height: 50px;
`;

export {StyledCatalog, StyledButton};
