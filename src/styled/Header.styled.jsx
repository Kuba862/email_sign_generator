import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #555555;
  box-shadow: inset 0 -20px 15px #ffffff;
  div {
    a {
      img {
        width: 100px;
        border-radius: 25%;
      }
    }
  }
  nav {
    ul {
      display: flex;
      list-style-type: none;
      padding: 0;
      li {
        margin-right: 1rem;
        a {
          text-decoration: none;
          color: #fff;
          font-size: 1.1rem;
          transition: all 0.3s;
          &:hover {
            color: #c0c0c0;
          }
        }
      }
      .logout {
        text-decoration: none;
        color: #fff;
        font-size: 1.1rem;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
          color: #c0c0c0;
        }
      }
    }
  }
`;
