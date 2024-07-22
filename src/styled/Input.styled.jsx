import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    font-size: 1em;
    &:focus {
        outline: none;
    }
`

export const InputDiv = styled.div`
    position: relative;
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    div {
        display: flex;
    }
`

export const InputLabel = styled.label`
    font-size: 1em;
    font-weight: bold;
    margin-right: 10px;
    width: 25%;
    text-align: left;
`

export const Options = styled.div`
position: absolute;
display: flex;
flex-direction: column;
background-color: #969696;
top: 70px;
right: 0;
z-index: 15;
overflow-y: auto;
max-height: 200px;
width: 100px;
border-radius: 5px;
`;

export const Button = styled.button`
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    font-size: 1em;
    background-color: #969696;
    color: white;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`