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
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25%;
`

export const InputLabel = styled.label`
    font-size: 1em;
    font-weight: bold;
    margin-right: 10px;
    width: 50%;
    text-align: left;
`