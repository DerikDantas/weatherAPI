import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  place-content: center;
  place-items: center;


  div{
    background: rgba(255,255,255, 0.5);
    backdrop-filter: blur(5px);
    text-align: center;
    height: auto;
    padding: 20px 0;
    width: 100%;
    padding: 35px;
    border-radius: 15px;
  }

  h1{
      margin: 0;
      padding: 0;
      color: #333;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 1px;
  }
`;
