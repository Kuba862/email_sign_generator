import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
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
import CGO_LOGO from '../images/cgoIcons/logo.png';
import HO_LOGO from '../images/hoIcons/logo.png';
import DAV_LOGO from '../images/derechoIcons/logo.png';
import VOTA_LOGO from '../images/votavoloresIcon/logo.png';
import LIBRES_LOGO from '../images/libresIcon/logo.png';
import { FormSelection } from '../styled.components/Styled';

import DerechoEmail from '../images/derechoIcons/email.png';
import DerechoTel from '../images/derechoIcons/mobile.png';
import DerechFb from '../images/derechoIcons/facebook.png';
import DerechoLd from '../images/derechoIcons/linkedin.png';
import DerechoTw from '../images/derechoIcons/twitter.png';
import DerecgoInsta from '../images/derechoIcons/instagram.png';

import HoEmail from '../images/hoIcons/email.png';
import HoTel from '../images/hoIcons/mobile.png';
import HoFb from '../images/hoIcons/facebook.png';
import HoLd from '../images/hoIcons/linkedin.png';
import HoTw from '../images/hoIcons/twitter.png';
import HoInsta from '../images/hoIcons/instagram.png';

import LibresEmail from '../images/libresIcon/email.png';
import LibresTel from '../images/libresIcon/mobile.png';
import LibresFb from '../images/libresIcon/facebook.png';
import LibresLd from '../images/libresIcon/linkedin.png';
import LibresTw from '../images/libresIcon/twitter.png';
import LibresInsta from '../images/libresIcon/instagram.png';

import CgoEmail from '../images/cgoIcons/email.png';
import CgoTel from '../images/cgoIcons/mobile.png';
import CgoFb from '../images/cgoIcons/facebook.png';
import CgoLd from '../images/cgoIcons/linkedin.png';
import CgoTw from '../images/cgoIcons/twitter.png';
import CgoInsta from '../images/cgoIcons/instagram.png';

import VotaEmail from '../images/votavoloresIcon/email.png';
import VotaTel from '../images/votavoloresIcon/mobile.png';
import VotaFb from '../images/votavoloresIcon/facebook.png';
import VotaLd from '../images/votavoloresIcon/linkedin.png';
import VotaTw from '../images/votavoloresIcon/twitter.png';
import VotaInsta from '../images/votavoloresIcon/instagram.png';

export const Header = () => <Title>EMAIL SIGNATURE GENERATOR</Title>;

export const PersonalDataForm = () => {
  const dispatch = useDispatch();

  const saveUserData = () => {
    dispatch(
      addUserData({
        name: personalData.name,
        possition: personalData.possition,
        phoneNumber: personalData.phone,
        email: personalData.email,
      })
    );
  };

  const saveSocialData = () => {
    dispatch(
      addSocialData({
        web: socialData.web,
        fb: socialData.fb,
        tw: socialData.tw,
        ld: socialData.ld,
        insta: socialData.insta,
      })
    );
  };

  const [correctEmailDomain, setCorrectEmailDomain] = useState(false);
  const [showCompanyData, setShowCompanyData] = useState(false);

  const [personalData, setPersonalData] = useState({
    name: useSelector((state) => state.cart.name) || '',
    possition: useSelector((state) => state.cart.position) || '',
    phone: useSelector((state) => state.cart.phoneNumber) || '',
    email: useSelector((state) => state.cart.email) || '',
  });
  const [socialData, setSocialData] = useState({
    fb:
      useSelector((state) => state.cart.fb) ||
      'https://www.facebook.com/citizengo',
    tw:
      useSelector((state) => state.cart.tw) || 'https://twitter.com/citizengo',
    ld:
      useSelector((state) => state.cart.ld) ||
      'https://www.linkedin.com/company/citizengo/',
    insta:
      useSelector((state) => state.cart.insta) ||
      'https://www.instagram.com/citizengo/',
    web: useSelector((state) => state.cart.web) || 'https://citizengo.org/',
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
            onChange={(e) =>
              setSocialData({ ...socialData, web: e.target.value })
            }
          />
          <InputData
            inputType="text"
            inputName="facebook"
            placeholder={socialData.fb}
            value={socialData.fb}
            onChange={(e) =>
              setSocialData({ ...socialData, fb: e.target.value })
            }
          />
          <InputData
            inputType="text"
            inputName="twitter"
            placeholder={socialData.tw}
            value={socialData.tw}
            onChange={(e) =>
              setSocialData({ ...socialData, tw: e.target.value })
            }
          />
          <InputData
            inputType="text"
            inputName="linkedin"
            placeholder={socialData.ld}
            value={socialData.ld}
            onChange={(e) =>
              setSocialData({ ...socialData, ld: e.target.value })
            }
          />
          <InputData
            inputType="text"
            inputName="instagram"
            placeholder={socialData.insta}
            value={socialData.insta}
            onChange={(e) =>
              setSocialData({ ...socialData, insta: e.target.value })
            }
          />
        </CompanyDataForm>
      ) : (
        <PersonalDataFormStyled>
          <InputData
            inputType="text"
            inputName="first and last name"
            placeholder={personalData.name || 'Jon Doe'}
            required={true}
            value={personalData.name}
            onChange={(e) =>
              setPersonalData({ ...personalData, name: e.target.value })
            }
          />
          <InputData
            inputType="text"
            inputName="position"
            placeholder={personalData.possition || 'SOFTWARE ENGINEER'}
            value={personalData.possition}
            required={true}
            onChange={(e) =>
              setPersonalData({ ...personalData, possition: e.target.value })
            }
          />
          <InputData
            inputType="text"
            inputName="phone number"
            placeholder={personalData.phone || '+48 111 222 333'}
            required={true}
            value={personalData.phone}
            onChange={(e) =>
              setPersonalData({ ...personalData, phone: e.target.value })
            }
          />
          <InputData
            inputType="email"
            inputName="e-mail"
            placeholder={personalData.email || 'example@citizengo.org'}
            required={true}
            value={personalData.email}
            onChange={(e) =>
              setPersonalData({ ...personalData, email: e.target.value })
            }
          />
        </PersonalDataFormStyled>
      )}
      <GoToGeneratorBtn
        onClick={() => {
          if (
            !personalData.name ||
            !personalData.possition ||
            !personalData.email ||
            !personalData.phone
          ) {
            alert('fill the form');
          } else if (correctEmailDomain) {
            saveUserData();
            saveSocialData();
            navigate('/sign-generator', { state: { socialData } });
          } else if (!correctEmailDomain) {
            alert('Wrong email domain!');
          }
        }}
      >
        Create a signature
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
  const { state } = useLocation();

  const [showHTML, setShowHTML] = useState(false);
  const [textCp, setTextCp] = useState(false);
  const [socialUrls, setSocialUrls] = useState({
    fb: state.socialData.fb || '',
    tw: state.socialData.tw || '',
    ld: state.socialData.ld || '',
    insta: state.socialData.insta || '',
    web: state.socialData.web || '',
  });
  const [logo, setLogo] = useState(null);
  const [images, setImages] = useState({
    email: '',
    tel: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: '',
  });
  const [color, setColor] = useState('');
  const userData = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const showHTMLAndCopy = () => {
    setShowHTML(!showHTML);
  };

  let domain = userData?.email?.match(/@([^.\s]+)/);

  const updateSocialMediaLinks = () => {
    switch (domain[1]) {
      case 'citizengo':
        setImages({
          email: CgoEmail,
          tel: CgoTel,
          facebook: CgoFb,
          twitter: CgoTw,
          linkedin: CgoLd,
          instagram: CgoInsta,
        });
        setLogo(CGO_LOGO);
        setColor('#4285f4');
        break;
      case 'maslibres':
        setImages({
          email: LibresEmail,
          tel: LibresTel,
          facebook: LibresFb,
          linkedin: LibresLd,
          twitter: LibresTw,
          instagram: LibresInsta,
        });
        setLogo(LIBRES_LOGO);
        setColor('#f3a329');
        break;
      case 'votavalores':
        setImages({
          email: VotaEmail,
          tel: VotaTel,
          facebook: VotaFb,
          linkedin: VotaLd,
          twitter: VotaTw,
          instagram: VotaInsta,
        });
        setLogo(VOTA_LOGO);
        setColor('#f7c300');
        break;
      case 'hazteoir':
        setImages({
          email: HoEmail,
          tel: HoTel,
          facebook: HoFb,
          linkedin: HoLd,
          twitter: HoTw,
          instagram: HoInsta,
        });
        setLogo(HO_LOGO);
        setColor('#ed8b00');
        break;
      case 'derechoavivir':
        setImages({
          email: DerechoEmail,
          tel: DerechoTel,
          facebook: DerechFb,
          linkedin: DerechoLd,
          twitter: DerechoTw,
          instagram: DerecgoInsta,
        });
        setLogo(DAV_LOGO);
        setColor('#a6192e');
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
              socialUrls.web,
              images.email,
              images.tel,
              images.facebook,
              images.twitter,
              images.linkedin,
              images.instagram,
              socialUrls.insta,
              color
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
                facebookLogo={images.facebook}
                twitterLogo={images.twitter}
                linkedinLogo={images.linkedin}
                telImg={images.tel}
                mailImg={images.email}
                instaCompanyName={socialUrls.insta}
                instagramLogo={images.instagram}
                fontColor={color}
              />
            </HTML_to_copy>
          </>
        )}
      </div>
    </SignatureGeneratorContainer>
  );
};
