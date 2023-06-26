import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  addUserData,
  addSocialData,
  clearUserData,
} from '../redux/cartReducer';
import { HTML, HTML_VAR } from './HTML';
import {
  SignatureGeneratorContainer,
  HTML_to_copy,
  CopyConfirmation,
  Title,
  PersonalDataFormStyled,
  GoToGeneratorBtn,
  CompanyDataForm,
} from '../styled.components/Styled';
import CGO_LOGO from '../images/CG_signature_logo.png';
import HO_LOGO from '../images/HO_signature_logo.png';
import DAV_LOGO from '../images/DAV_signature_logo.png';
import VOTA_LOGO from '../images/VOTA_VALORES_signature_logo.png';
import LIBRES_LOGO from '../images/+LIBRES_CG_signature_logo.png';
import { FormSelection } from '../styled.components/Styled';

export const Header = () => <Title>EMAIL SIGNATURE GENERATOR</Title>;

export const PersonalDataForm = () => {
  const dispatch = useDispatch();
 
  const saveUserData = () => {
    dispatch(
      addUserData({
        name: personalData.name,
        possition: personalData.possition,
        phoneNumber: personalData.phone,
        email: personalData.email
      })
    )
  }

  const saveSocialData = () => {
    dispatch(
      addSocialData({
        web: socialData.web,
        fb: socialData.fb,
        tw: socialData.tw,
        ld: socialData.ld
      })
    )
  }

  const [correctEmailDomain, setCorrectEmailDomain] = useState(false);
  const [showCompanyData, setShowCompanyData] = useState(false);

  const [personalData, setPersonalData] = useState({
    name: useSelector((state) => state.cart.name) || "",
    possition: useSelector((state) => state.cart.position) || "",
    phone: useSelector((state) => state.cart.phoneNumber) || "",
    email: useSelector((state) => state.cart.email) || "",
  });
  const [socialData, setSocialData] = useState({
    fb: 'https://www.facebook.com/citizengo',
    tw: 'https://twitter.com/citizengo',
    ld: 'https://www.linkedin.com/company/citizengo/',
    web: 'https://citizengo.org/',
  });

  const navigate = useNavigate();

  useEffect(() => {
    setCorrectEmailDomain(
      /^[a-zA-Z0-9._%+-]+@(citizengo|hazteoir|maslibres|derechoavivir|votavalores)\.[a-zA-Z]{2,}$/i.test(
        personalData.email
      )
    );
  }, [personalData.email]);

  return (
    <>
      <FormSelection>
        <button
          onClick={() => {
            setShowCompanyData(false);
            saveSocialData();
          }}
        >
          Personal Data
        </button>
        <button
          onClick={() => {
            setShowCompanyData(true);
            saveUserData();
          }}
        >
          Company Data
        </button>
        </FormSelection>
        {showCompanyData ? (
          <CompanyDataForm>
            <InputData
              inputType="text"
              inputName="website-url"
              placeholder={socialData.web}
              value={socialData.web}
              onChange={(e) => setSocialData({ ...socialData, web: e.target.value })}
            />
            <InputData
              inputType="text"
              inputName="facebook"
              placeholder={socialData.fb}
              value={socialData.fb}
              onChange={(e) => setSocialData({ ...socialData, fb: e.target.value })}
            />
            <InputData
              inputType="text"
              inputName="twitter"
              placeholder={socialData.tw}
              value={socialData.tw}
              onChange={(e) => setSocialData({ ...socialData, tw: e.target.value })}
            />
            <InputData
              inputType="text"
              inputName="linkedin"
              placeholder={socialData.ld}
              value={socialData.ld}
              onChange={(e) => setSocialData({ ...socialData, ld: e.target.value })}
            />
          </CompanyDataForm>
        ) : (
          <PersonalDataFormStyled>
            <InputData
              inputType="text"
              inputName="first and last name"
              placeholder={personalData.name || "Jon Doe"}
              required={true}
              value={personalData.name}
              onChange={(e) => setPersonalData({ ...personalData, name: e.target.value })}
            />
            <InputData
              inputType="text"
              inputName="position"
              placeholder={personalData.possition || "SOFTWARE ENGINEER"}
              value={personalData.possition}
              required={true}
              onChange={(e) => setPersonalData({ ...personalData, possition: e.target.value })}
            />
            <InputData
              inputType="text"
              inputName="phone number"
              placeholder={personalData.phone || "+48 111 222 333"}
              required={true}
              value={personalData.phone}
              onChange={(e) => setPersonalData({ ...personalData, phone: e.target.value })}
            />
            <InputData
              inputType="email"
              inputName="e-mail"
              placeholder={personalData.email || "example@citizengo.org"}
              required={true}
              value={personalData.email}
              onChange={(e) => setPersonalData({ ...personalData, email: e.target.value })}
            />
          </PersonalDataFormStyled>
        )}
      <GoToGeneratorBtn
        onClick={() => {
          if(!personalData.name || !personalData.possition || !personalData.email || !personalData.phone) {
            alert('fill the form')
          }
          else if (correctEmailDomain) {
            saveUserData();
            saveSocialData();
            navigate('/sign-generator');
          } else if (!correctEmailDomain) {
            alert('Wrong email domain!');
          }
        }}
      >
        Create a signature
      </GoToGeneratorBtn>
      <GoToGeneratorBtn onClick={() => {
        dispatch(clearUserData());
        window.location.reload();
      }} >
        clear all data
      </GoToGeneratorBtn>
    </>
  );
};

export const InputData = ({
  inputName,
  inputType,
  placeholder,
  onChange,
  onBlur,
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
        onBlur={onBlur}
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
        setTextCp(false);
      }, 3000);
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
