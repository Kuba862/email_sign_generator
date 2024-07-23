import { createContext, useState } from 'react';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [logoUrl, setLogoUrl] = useState('');
  const [logoSettings, setLogoSettings] = useState({
    width: 50,
    top: 0,
    left: 0,
    open: false,
  });
  const [name, setName] = useState('');
  const [nameSettings, setNameSettings] = useState({
    fontSize: 18,
    left: 0,
    top: 0,
    color: '#000000',
    bold: '400',
    open: false,
  });
  const [position, setPosition] = useState('');
  const [positionSettings, setPositionSettings] = useState({
    fontSize: 16,
    left: 0,
    top: 0,
    color: '#000000',
    bold: '400',
    open: false,
  });
  const [phone, setPhone] = useState('');
  const [phoneSettings, setPhoneSettings] = useState({
    fontSize: 14,
    left: 0,
    top: 0,
    color: '#000000',
    bold: '400',
    iconUrl: null,
    iconWidth: 15,
    iconLeftSpace: 0,
    iconTopSpace: 0,
    open: false,
  });
  const [email, setEmail] = useState('');
  const [emailSettings, setEmailSettings] = useState({
    fontSize: 14,
    left: 0,
    top: 0,
    color: '#000000',
    bold: '400',
    iconUrl: null,
    iconWidth: 15,
    iconLeftSpace: 0,
    iconTopSpace: 0,
    open: false,
  });
  const [website, setWebsite] = useState('');
  const [websiteSettings, setWebsiteSettings] = useState({
    fontSize: 14,
    left: 0,
    top: 0,
    color: '#000000',
    bold: '400',
    underlined: true,
    open: false,
  });
  const [socialMedia, setSocialMedia] = useState([
    { iconUrl: '', url: '', width: 50, left: 0, top: 0 },
  ]);

  const handleSocialMediaChange = (index, field, value) => {
    const updatedSocialMedia = socialMedia.map((media, i) =>
      i === index ? { ...media, [field]: value } : media
    );
    setSocialMedia(updatedSocialMedia);
  };

  const addSocialMedia = () => {
    setSocialMedia([...socialMedia, { iconUrl: '', url: '', width: 50, left: 0, top: 0 }]);
  };

  const checkIfUserIsAuthenticated = () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      return false;
    }
    return true;
  };

  return (
    <GlobalContext.Provider
      value={{
        logoSettings,
        logoUrl,
        name,
        position,
        phone,
        email,
        website,
        socialMedia,
        phoneSettings,
        emailSettings,
        websiteSettings,
        nameSettings,
        positionSettings,
        setSocialMedia,
        handleSocialMediaChange,
        addSocialMedia,
        checkIfUserIsAuthenticated,
        setNameSettings,
        setPositionSettings,
        setPhoneSettings,
        setEmailSettings,
        setWebsiteSettings,
        setLogoUrl,
        setName,
        setPosition,
        setPhone,
        setEmail,
        setWebsite,
        setLogoSettings,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
