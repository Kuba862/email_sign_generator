import styled from 'styled-components';

export const TextOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
        label {
            font-size: 1em;
            font-weight: bold;
            margin-right: 10px;
            width: 50%;
            text-align: left;
        }
        input {
            width: 50%;
            height: 30px;
            border: 1px solid black;
            border-radius: 5px;
            padding: 5px;
            margin: 5px;
            font-size: 1em;
            &:focus {
                outline: none;
            }
        }
        input[type=color] {
            width: 50%;
            height: 50px;
            border: none;
            padding: 5px;
            margin: 5px;
            font-size: 1em;
            background-color: transparent;
            cursor: pointer;
            &:focus {
                outline: none;
            }
        }
    }
`;
