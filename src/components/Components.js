import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addUserData } from '../redux/cartReducer';
import { HTML, HTML_VAR } from './HTML';
import {
  SignatureGeneratorContainer,
  HTML_to_copy,
  CopyConfirmation,
  Title,
  PersonalDataFormStyled,
  GoToGeneratorBtn,
  CompanyDataForm
} from '../styled.components/Styled';
import CGO_LOGO from '../images/CG_signature_logo.png';
import HO_LOGO from '../images/HO_signature_logo.png';
import DAV_LOGO from '../images/DAV_signature_logo.png';
import VOTA_LOGO from '../images/VOTA_VALORES_signature_logo.png';
import LIBRES_LOGO from '../images/+LIBRES_CG_signature_logo.png';

export const Header = () => <Title>EMAIL SIGNATURE GENERATOR</Title>;

export const PersonalDataForm = () => {
  const [name, setName] = useState(null);
  const [possition, setPossition] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [correctEmailDomain, setCorrectEmailDomain] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const saveUserData = () => {
    dispatch(
      addUserData({
        name: name,
        possition: possition,
        phoneNumber: phoneNumber,
        email: email,
      })
    );
  };

  useEffect(() => {
    setCorrectEmailDomain(/^[a-zA-Z0-9._%+-]+@(citizengo|hazteoir|maslibres|derechoavivir|votavalores)\.[a-zA-Z]{2,}$/i
    .test(email))
  }, [email])

  return (
    <>
      <PersonalDataFormStyled>
        <InputData
          inputType="text"
          inputName="first and last name"
          placeholder="Jakub Rejch"
          onChange={(e) => setName(e.target.value)}
          required={true}
        />
        <InputData
          inputType="text"
          inputName="position"
          placeholder="Software Engineer"
          onChange={(e) => setPossition(e.target.value)}
          required={true}
        />
          <InputData
            inputType="text"
            inputName="phone number"
            placeholder="+48 111 222 333"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required={true}
          />
          <InputData
            inputType="email"
            inputName="e-mail"
            placeholder="jrejch@citizengo.net"
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
      </PersonalDataFormStyled>
      <GoToGeneratorBtn
          onClick={async () => {
            if (!name || !possition || !phoneNumber || !email) {
              alert('fill form');
            }
            else if(correctEmailDomain) {
              saveUserData();
              navigate('/sign-generator');
            }
            else if (!correctEmailDomain) {
              alert('Wrong email domain!')
            }
          }}
        >
          Create a singature
        </GoToGeneratorBtn>
    </>
  );
};

export const LinksDataForm = () => {
  return (
    <>
    <CompanyDataForm>
      <InputData
        inputType="text"
        inputName="website-url"
        placeholder="website url"
      />
      <InputData inputType="text" inputName="facebook" placeholder="Facebook" />
      <InputData inputType="text" inputName="twitter" placeholder="Twitter" />
      <InputData inputType="text" inputName="linkedin" placeholder="Linkedin" />
      </CompanyDataForm>
      <GoToGeneratorBtn>Create a singature</GoToGeneratorBtn>
    </>
  );
};

export const InputData = ({
  inputName,
  inputType,
  placeholder,
  onChange,
  required,
}) => {
  return (
    <div>
      <label htmlFor={inputName}>{inputName}</label>
      <input
        type={inputType}
        name={inputName}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

// signature generator

export const SignatureGenerator = () => {
  const [showHTML, setShowHTML] = useState(false);
  const [textCp, setTextCp] = useState(false);
  const [socialUrls, setSocialUrls] = useState({
    fb: '',
    tw: '',
    ld: '',
    web: '',
  });
  const [logo, setLogo] = useState(null);
  const userData = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const showHTMLAndCopy = () => {
    setShowHTML(!showHTML);
  };

  let domain = userData?.email?.match(/@([^.\s]+)/);

  const updateSocialMediaLinks = () => {
    switch (domain[1]) {
      case 'citizengo':
        setSocialUrls({
          ...socialUrls,
          fb: 'citizengo',
          tw: 'citizengo',
          ld: 'https://www.linkedin.com/company/citizengo/',
          web: 'https://citizengo.org/',
        });
        setLogo(CGO_LOGO);
        break;
      case 'maslibres':
        setSocialUrls({
          ...socialUrls,
          fb: 'maslibres',
          tw: 'maslibres',
          ld: '',
          web: 'https://maslibres.org/',
        });
        setLogo(LIBRES_LOGO);
        break;
      case 'votavalores':
        setSocialUrls({
          ...socialUrls,
          fb: 'HazteOir.org',
          tw: 'hazteoir',
          ld: '',
          web: 'https://www.votavalores.org/',
        });
        setLogo(VOTA_LOGO);
        break;
      case 'hazteoir':
        setSocialUrls({
          ...socialUrls,
          fb: 'HazteOir.org',
          tw: 'hazteoir',
          ld: 'https://www.linkedin.com/company/hazteoir-org/about/',
          web: 'https://citizengo.org/hazteoir',
        });
        setLogo(HO_LOGO);
        break;
      case 'derechoavivir':
        setSocialUrls({
          ...socialUrls,
          fb: 'derechoavivir.org',
          tw: 'derechoavivir',
          ld: '',
          web: 'https://derechoavivir.org/',
        });
        setLogo(DAV_LOGO);
        break;
    }
  };

  useEffect(() => {
    updateSocialMediaLinks();
  }, []);

  const { name, email, position, phoneNumber } = userData;

  const copyHtmlContainerText = () => {
    const container = document.getElementById('html_container').textContent;
    navigator.clipboard.writeText(container);
    setTextCp(true);
  };

  useEffect(() => {
    if (textCp) {
      setTimeout(() => {
        setTextCp(false)
      }, 3000)
    }
  }, [textCp]);

  return (
    <SignatureGeneratorContainer>
      <div className="buttons">
        <button className="back_btn" onClick={() => navigate('/')}>
          personal data
        </button>
        <button
          className={showHTML ? 'show_html_btn active' : 'show_html_btn'}
          onClick={showHTMLAndCopy}
        >
          {!showHTML ? 'show HTML' : 'hide HTML'}
        </button>
      </div>
      <div className="container">
        <div
          className="preview_box"
          dangerouslySetInnerHTML={{
            __html: HTML_VAR(
              logo,
              name,
              position,
              phoneNumber,
              email,
              socialUrls.fb,
              socialUrls.tw,
              socialUrls.ld,
              socialUrls.web
            ),
          }}
        />
        {textCp && (
          <CopyConfirmation>
            <p>The HTML code has been copied. You can paste it</p>
          </CopyConfirmation>
        )}
        {showHTML && (
          <>
            <HTML_to_copy id="html_container">
              <button className="copy_button" onClick={copyHtmlContainerText}>
                copy
              </button>
              <HTML
                phoneNumber={phoneNumber}
                email={email}
                userName={name}
                possition={position}
                fbCompanyName={socialUrls.fb}
                twCompanyName={socialUrls.tw}
                ldCompanyName={socialUrls.ls}
                websiteUrl={socialUrls.web}
                logo={logo}
              />
            </HTML_to_copy>
          </>
        )}
      </div>
    </SignatureGeneratorContainer>
  );
};
