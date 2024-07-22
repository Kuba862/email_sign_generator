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
    email,
    website,
    socialMedia,
    textTopSpaces,
    textRightSpace,
    nameSettings,
    positionSettings,
    phoneSettings,
    emailSettings,
    websiteSettings,
  } = useContext(GlobalContext);
  return (
    <Preview>
      <div>
        {logoUrl && (
          <img src={logoUrl} alt="Logo" style={{ width: `${logoWidth}px` }} />
        )}
        <p
          style={{
            position: 'relative',
            color: nameSettings.color,
            width: 'fit-content',
            fontSize: `${nameSettings.fontSize}px`,
            fontWeight: nameSettings.bold,
            textDecoration: nameSettings.underline ? 'underline' : 'none',
            top: `${nameSettings.top}px`,
            left: `${nameSettings.right}px`,
          }}
        >
          {name}
        </p>
        <p
          style={{
            position: 'relative',
            color: positionSettings.color,
            width: 'fit-content',
            fontSize: `${positionSettings.fontSize}px`,
            fontWeight: positionSettings.bold,
            textDecoration: positionSettings.underline ? 'underline' : 'none',
            top: `${positionSettings.top}px`,
            left: `${positionSettings.left}px`,
          }}
        >
          {position}
        </p>
        {phone && (
          <div>
            {phoneSettings.iconUrl && (
              <img
                src={phoneSettings.iconUrl}
                alt="Phone"
                style={{
                  position: 'relative',
                  width: `${phoneSettings.iconWidth}px`,
                  left: `${phoneSettings.iconLeftSpace}px`,
                }}
              />
            )}{' '}
            <span
              style={{
                position: 'relative',
                color: phoneSettings.color,
                fontSize: `${phoneSettings.fontSize}px`,
                fontWeight: phoneSettings.bold,
                textDecoration: phoneSettings.underline ? 'underline' : 'none',
                top: `${phoneSettings.top}px`,
                left: `${phoneSettings.left}px`,
              }}
            >
              {phone}
            </span>
          </div>
        )}
        {email && (
          <div>
            {emailSettings.iconUrl && (
              <img
                src={emailSettings.iconUrl}
                alt="Email"
                style={{
                  position: 'relative',
                  width: `${emailSettings.iconWidth}px`,
                  left: `${emailSettings.iconLeftSpace}px`,
                }}
              />
            )}{' '}
            <a
              href={`mailto:${email}`}
              style={{
                position: 'relative',
                color: emailSettings.color,
                fontSize: `${emailSettings.fontSize}px`,
                fontWeight: emailSettings.bold,
                textDecoration: emailSettings.underline ? 'underline' : 'none',
                top: `${emailSettings.top}px`,
                left: `${emailSettings.left}px`,
              }}
            >
              {email}
            </a>
          </div>
        )}
        {website && (
          <div>
            <a
              href={website}
              style={{
                position: 'relative',
                color: websiteSettings.color,
                fontSize: `${websiteSettings.fontSize}px`,
                fontWeight: websiteSettings.bold,
                textDecoration: websiteSettings.underline
                  ? 'underline'
                  : 'none',
                top: `${websiteSettings.top}px`,
                left: `${websiteSettings.right}px`,
              }}
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
