import styled from 'styled-components';

export const SignatureGeneratorContainer = styled.section`
display: flex;
flex-direction: column;
  margin-top: 50px;
  .buttons {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #adacad;
    button {
        background-color: #fff;
        border: none;
        width: 50%;
        padding: 12px 16px;
        cursor: pointer;
        transition: .2s ease-in-out;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        &:hover {
            box-shadow: -10px 10px 20px 5px #adacad;
        }
    }
    .show_html_btn {
           border: 1px solid transparent;
    }
    .show_html_btn.active {
        border-color: #adacad #adacad #fff;
        border-radius: 3px 3px 0 0;
    }
  }

  .container {
    display: flex;
    margin-top: 50px;
    .preview_box {
        flex-basis: 50%;
    }
    #html_container {
        display: flex;
        flex-direction: column;
        flex-basis: 50%;
        .copy_button {
            padding: 8px;
            width: 50%;
            margin: auto;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            background-color: #adacad;
            border-radius: 5px;
            border: none;
            color: #fff;
            cursor: pointer;
            transition: .2s ease-in-out;
            &:hover {
                color: #000;
            }
        }
    }
    .body-left {
      max-width: 600px;
      box-shadow: -10px 10px 20px 5px #adacad;
      border-radius: 4px;
    }
  }
`;

export const HTML_to_copy = styled.div`
  border: 1px solid;
  background-color: #fff;
  color: #000;
  padding: 0 15px;
  text-align: center;
  border-radius: 5px;
  font-size: .8rem;
  line-height: 1.4;
`;

export const CopyConfirmation = styled.div`
position: absolute;
display: flex;
top: 300px;
right: 550px;
width: 200px;
height: 150px;
text-align: center;
background-color: #fff;
border-radius: 5px;
box-shadow: inset 0px 0px 15px 5px #adacad;
p {
    align-self: center;
}
`
export const Title = styled.h1`
display: flex;
justify-content: center;
`
export const FormSelection= styled.section`
margin-top: 50px;
display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #adacad;
    button {
        background-color: #fff;
        border: none;
        width: 50%;
        padding: 12px 16px;
        cursor: pointer;
        transition: .2s ease-in-out;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        border: 1px solid transparent;
        &:hover {
            box-shadow: -10px 10px 20px 5px #adacad;
        }
    }
    .active {
        border-color: #adacad #adacad #fff;
        border-radius: 3px 3px 0 0;
    }
`
export const PersonalDataFormStyled = styled.form`
margin-top: 50px;
display: flex;
flex-direction: column;
gap: 15px;
div {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 50%;
    label {
        text-align: center;
        margin-bottom: 5px;
        text-transform: uppercase;
        color: #adacad;
    }
    input {
        padding: 8px 6px;
        font-size: 1.05rem;
    }
}
&.hide {
    display: none;
}
`
export const CompanyDataForm = styled.form`
margin-top: 50px;
display: flex;
flex-direction: column;
gap: 15px;
div {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 50%;
    label {
        text-align: center;
        margin-bottom: 5px;
        text-transform: uppercase;
        color: #adacad;
    }
    input {
        padding: 8px 6px;
        font-size: 1.05rem;
    }
}
&.hide {
    display: none;
}
`

export const GoToGeneratorBtn = styled.button`
display: flex;
justify-content: center;
margin: 30px auto;
padding: 8px 12px;
font-size: 1.1rem;
border-radius: 5px;
border: 1px solid transparent;
transition: .2s ease-in-out;
cursor: pointer;
&:hover {
    border-color: #000;
}
&.hide {
    display: none;
}
`
