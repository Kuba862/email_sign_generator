import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    border: 1px solid #72A7B8;
    border-radius: 5px;
    padding: 10px;
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
    align-self: center;
    font-size: 1em;
    font-weight: bold;
    margin-right: 10px;
    width: 40%;
    text-align: left;
    color: #615A6E;
`

export const Options = styled.div`
position: absolute;
display: flex;
flex-direction: column;
background-color: #B2A2C5;
border: 1px solid #383565;
top: 70px;
right: 0;
z-index: 15;
overflow-y: auto;
max-height: 200px;
border-radius: 5px;
div {
    display: flex;
    justify-content: space-between;
    width: 70%;
    label {
        align-self: center;
    }
    input {
        width: 70%;
        padding: 5px;
        border-radius: 5px;
        outline: none;
        border: none;
    }
}
.underline-input,
.bold-input {
    justify-content: flex-start;
    select {
        padding: 5px;
        border-radius: 5px;
        outline: none;
        margin-left: 80px;
    }
    input[type="checkbox"] {
        width: 35%;
    }
}

`;

export const Button = styled.button`
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    width: 100px;
    margin: 5px;
    font-size: 1em;
    background-color: #615A6E;
    color: #F4B973;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`