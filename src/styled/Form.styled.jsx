import styled from 'styled-components';

export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 30%;
    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      input {
        padding: 0.7rem;
        border-radius: 0.25rem;
        border: 1px solid #ccc;
      }
    }
    button {
      padding: 0.7rem;
      border-radius: 0.25rem;
      border: 1px solid #ccc;
      background-color: #f1f1f1;
      cursor: pointer;
      transition: all 0.3s;
        &:hover {
            background-color: #e1e1e1;
        }
    }
  }
  p {
    text-align: center;
    margin-top: 1rem;
    a {
        color: blue;
    }
  }
`;
