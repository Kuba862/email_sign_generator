import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/Global';
import { Preview } from '../../styled/Layout.styled';

const SignaturePreview = () => {
  const {
    logoUrl,
    logoWidth,
    name,
    position,
    phone,
    phoneIconUrl,
    phoneIconWidth,
    email,
    emailIconUrl,
    emailIconWidth,
    website,
    socialMedia,
    textColor,
    textTopSpaces,
    textLeftSpace,
    textRightSpace,
    fontSize,
  } = useContext(GlobalContext);
  return (
    <Preview>
      <div>
        {logoUrl && (
          <img src={logoUrl} alt="Logo" style={{ width: `${logoWidth}px` }} />
        )}
        <p
          style={{
            color: textColor,
            margin: `${textTopSpaces}px ${textLeftSpace}px ${textTopSpaces}px ${textLeftSpace}px`,
            width: 'fit-content',
            fontSize: `${fontSize}px`,
          }}
        >
          {name}
        </p>
        <p
          style={{
            color: textColor,
            margin: `${textTopSpaces}px ${textLeftSpace}px ${textTopSpaces}px ${textLeftSpace}px`,
            width: 'fit-content',
            fontSize: `${fontSize}px`,
          }}
        >
          {position}
        </p>
        {phone && (
          <div
            style={{
              color: textColor,
              margin: `${textTopSpaces}px ${textLeftSpace}px ${textTopSpaces}px ${textLeftSpace}px`,
            }}
          >
            {phoneIconUrl && (
              <img
                src={phoneIconUrl}
                alt="Phone"
                style={{ width: `${phoneIconWidth}px`, marginRight: '10px' }}
              />
            )}{' '}
            <span
              style={{
                marginLeft: `${textRightSpace}px`,
                fontSize: `${fontSize}px`,
              }}
            >
              {phone}
            </span>
          </div>
        )}
        {email && (
          <div
            style={{
              margin: `${textTopSpaces}px ${textLeftSpace}px ${textTopSpaces}px ${textLeftSpace}px`,
            }}
          >
            {emailIconUrl && (
              <img
                src={emailIconUrl}
                alt="Email"
                style={{ width: `${emailIconWidth}px`, marginRight: '10px' }}
              />
            )}{' '}
            <a
              href={`mailto:${email}`}
              style={{
                color: textColor,
                marginLeft: `${textRightSpace}px`,
                fontSize: `${fontSize}px`,
              }}
            >
              {email}
            </a>
          </div>
        )}
        {website && (
          <div
            style={{
              margin: `${textTopSpaces}px ${textRightSpace}px ${textTopSpaces}px ${textLeftSpace}px`,
              fontSize: `${fontSize}px`,
            }}
          >
            <a
              href={website}
              style={{ color: textColor, marginLeft: `${textRightSpace}px` }}
            >
              {website}
            </a>
          </div>
        )}
        {socialMedia.map(
          (social, index) =>
            social.iconUrl && (
              <span
                key={index}
                style={{
                  margin: `${textTopSpaces}px 10px ${textTopSpaces}px 0`,
                }}
              >
                <a href={social.url}>
                  <img
                    src={social.iconUrl}
                    alt="Social Media"
                    style={{
                      width: `${social.iconWidth}px`,
                      marginLeft: `${textRightSpace}px`,
                    }}
                  />
                </a>
              </span>
            )
        )}
      </div>
    </Preview>
  );
};

export default SignaturePreview;
