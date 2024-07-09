import { createContext, useState } from 'react';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [logoUrl, setLogoUrl] = useState('');
  const [logoWidth, setLogoWidth] = useState(50);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneIconUrl, setPhoneIconUrl] = useState('');
  const [phoneIconWidth, setPhoneIconWidth] = useState(50);
  const [email, setEmail] = useState('');
  const [emailIconUrl, setEmailIconUrl] = useState('');
  const [emailIconWidth, setEmailIconWidth] = useState(50);
  const [website, setWebsite] = useState('');
  const [socialMedia, setSocialMedia] = useState([
    { iconUrl: '', url: '', width: 50 },
  ]);
  const [textColor, setTextColor] = useState('#000000');
  const [bold, setBold] = useState(false);
  const [fontSize, setFontSize] = useState(14);
  const [textTopSpaces, setTextTopSpaces] = useState(20);
  const [textLeftSpace, setTextLeftSpace] = useState(10);
  const [textRightSpace, setTextRightSpace] = useState(10);

  const handleSocialMediaChange = (index, field, value) => {
    const updatedSocialMedia = socialMedia.map((media, i) =>
      i === index ? { ...media, [field]: value } : media
    );
    setSocialMedia(updatedSocialMedia);
  };

  const addSocialMedia = () => {
    setSocialMedia([...socialMedia, { iconUrl: '', url: '', width: 50 }]);
  };

  return (
    <GlobalContext.Provider
      value={{
        logoUrl,
        setLogoUrl,
        logoWidth,
        setLogoWidth,
        name,
        setName,
        position,
        setPosition,
        phone,
        setPhone,
        phoneIconUrl,
        setPhoneIconUrl,
        phoneIconWidth,
        setPhoneIconWidth,
        email,
        setEmail,
        emailIconUrl,
        setEmailIconUrl,
        emailIconWidth,
        setEmailIconWidth,
        website,
        setWebsite,
        socialMedia,
        setSocialMedia,
        handleSocialMediaChange,
        addSocialMedia,
        textColor,
        setTextColor,
        bold,
        setBold,
        fontSize,
        setFontSize,
        textTopSpaces,
        setTextTopSpaces,
        textLeftSpace,
        setTextLeftSpace,
        textRightSpace,
        setTextRightSpace,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
