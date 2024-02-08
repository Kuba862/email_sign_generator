import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addUserData, addSocialData } from '../redux/cartReducer';
import { HTML_VAR } from './HTML';
import {
  SignatureGeneratorContainer,
  CopyConfirmation,
  Title,
  PersonalDataFormStyled,
  GoToGeneratorBtn,
  CompanyDataForm,
} from '../styled.components/Styled';
// cgo:$apr1$bWFKR1a1$JkECUNyO61eWS7QdSqqyY1
import {
  FormSelection,
  HintSection,
  HintButton,
} from '../styled.components/Styled';

import stepFirst from '../images/1.png';
import stepSecond from '../images/2.png';
import stepThird from '../images/3.png';

const DerechoEmail =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/derechoIcons/email.png';
const DerechoTel =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/derechoIcons/mobile.png';
const DerechFb =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/derechoIcons/facebook.png';
const DerechoLd =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/derechoIcons/linkedin.png';
const DerechoTw =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/derechoIcons/twitter.png';
const DerecgoInsta =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/derechoIcons/instagram.png';

const HoEmail =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/hoIcons/email.png';
const HoTel =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/hoIcons/mobile.png';
const HoFb =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/hoIcons/facebook.png';
const HoLd =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/hoIcons/linkedin.png';
const HoInsta =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/hoIcons/instagram.png';
const HoTw =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/hoIcons/twitter.png';

const LibresEmail =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/libresIcon/email.png';
const LibresTel =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/libresIcon/mobile.png';
const LibresFb =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/libresIcon/facebook.png';
const LibresLd =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/libresIcon/linkedin.png';
const LibresTw =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/libresIcon/twitter.png';
const LibresInsta =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/libresIcon/instagram.png';

const CgoEmail =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/cgoIcons/email.png';
const CgoTel =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/cgoIcons/mobile.png';
const CgoFb =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/cgoIcons/facebook.png';
const CgoLd =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/cgoIcons/linkedin.png';
const CgoTw =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/cgoIcons/twitter.png';
const CgoInsta =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/cgoIcons/instagram.png';

const VotaEmail =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/votavoloresIcon/email.png';
const VotaTel =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/votavoloresIcon/mobile.png';
const VotaFb =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/votavoloresIcon/facebook.png';
const VotaLd =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/votavoloresIcon/linkedin.png';
const VotaTw =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/votavoloresIcon/twitter.png';
const VotaInsta =
  'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/votavoloresIcon/instagram.png';

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

  const [hintStep, setHintStep] = useState(1);

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
        setLogo(
          'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/cgoIcons/logo.png'
        );
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
        setLogo(
          'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/libresIcon/logo.png'
        );
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
        setLogo(
          'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/votavoloresIcon/logo.png'
        );
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
        setLogo(
          'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/hoIcons/logo.png'
        );
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
        setLogo(
          'https://storage.googleapis.com/cgo-public/contact-center-faq-files/img/derechoIcons/logo.png'
        );
        setColor('#a6192e');
        break;
    }
  };

  useEffect(() => {
    updateSocialMediaLinks();
  }, []);

  const { name, email, position, phoneNumber } = userData;

  useEffect(() => {
    const interval = setInterval(() => {
      if (hintStep === 1) {
        setHintStep(2);
      } else if (hintStep === 2) {
        setHintStep(3);
      }
    }, 3000);
    setTimeout(() => {
      clearInterval(interval);
    }, 6000);
  }, [hintStep]);

  return (
    <SignatureGeneratorContainer>
      <div className="buttons">
        <button className="back_btn" onClick={() => navigate('/')}>
          personal data
        </button>
        {/* <button
          className={showHTML ? 'show_html_btn active' : 'show_html_btn'}
          onClick={showHTMLAndCopy}
        >
          {!showHTML ? 'show HTML' : 'hide HTML'}
        </button> */}
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
        <HintSection>
          <div className="steps_container">
            <h3>steps to do:</h3>
            {hintStep === 1 && (
              <div className="step">
                <p>1. mark your signature</p>{' '}
                <img width={200} src={stepFirst} />
              </div>
            )}
            {hintStep === 2 && (
              <div className="step">
                <p>2. copy your signature</p>{' '}
                <img width={600} src={stepSecond} />
              </div>
            )}
            {hintStep === 3 && (
              <div className="step">
                <p>3. paste your signature</p>{' '}
                <img width={600} src={stepThird} />
              </div>
            )}
          </div>
          {hintStep === 3 && (
            <HintButton onClick={() => setHintStep(1)}>
              run hints again
            </HintButton>
          )}
        </HintSection>
      </div>
    </SignatureGeneratorContainer>
  );
};
