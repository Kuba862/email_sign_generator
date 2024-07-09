import styled from 'styled-components';

export const Layout = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  div {
    width: 100%;
    margin: 10px;
    padding: 10px;
  }
`;

export const H3 = styled.h3`
  font-size: 1.5em;
  font-weight: bold;
  margin: 10px;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid black;
`;
export const Preview = styled.div`
  position: fixed;
  div {
    div {
      padding: 0;
    }
  }
`;

export const H1 = styled.h1`
  font-size: 2em;
  font-weight: bold;
  margin: 10px;
  padding: 10px;
  text-align: center;
`;
export const Button = styled.button`
  position: relative;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 25%;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  font-size: 1em;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
