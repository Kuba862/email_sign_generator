import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/Global';
import { Input, InputDiv, InputLabel, Button } from '../../styled/Input.styled';
import OptionsBox from '../Options/OptionsBox';

const ContactDetails = () => {
  const {
    name,
    setName,
    position,
    setPosition,
    phone,
    setPhone,
    email,
    setEmail,
    website,
    setWebsite,
    nameSettings,
    setNameSettings,
    positionSettings,
    setPositionSettings,
    phoneSettings,
    setPhoneSettings,
    emailSettings,
    setEmailSettings,
    setWebsiteSettings,
    websiteSettings,
  } = useContext(GlobalContext);
  return (
    <div>
      <InputDiv>
        <div>
          <InputLabel>Name: </InputLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <Button
          onClick={() => setNameSettings({ ...nameSettings, open: !nameSettings.open })}
        >
            {!nameSettings.open ? "options" : "close"}
        </Button>
        {nameSettings.open && (
          <OptionsBox
            exitBox={() => setNameSettings({ ...nameSettings, open: false })}
            change={(e) =>
              setNameSettings({ ...nameSettings, color: e.target.value })
            }
            onChangeFontSize={(e) =>
              setNameSettings({ ...nameSettings, fontSize: e.target.value })
            }
            changeBoldValue={(e) =>
              setNameSettings({ ...nameSettings, bold: e.target.value })
            }
            onChangeUnderline={(e) =>
              setNameSettings({ ...nameSettings, underline: e.target.checked })
            }
            showUnderline={true}
            onChangeLeftPossition={(e) =>
              setNameSettings({ ...nameSettings, left: e.target.value })
            }
            onChangeTopPossition={(e) =>
              setNameSettings({ ...nameSettings, top: e.target.value })
            }
          />
        )}
      </InputDiv>
      <InputDiv>
        <div>
          <InputLabel>Position: </InputLabel>
          <Input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <Button
          onClick={() =>
            setPositionSettings({ ...positionSettings, open: !positionSettings.open })
          }
        >
          {!positionSettings.open ? "options" : "close"}
        </Button>
        {positionSettings.open && (
          <OptionsBox
            exitBox={() =>
              setPositionSettings({ ...positionSettings, open: false })
            }
            change={(e) =>
              setPositionSettings({
                ...positionSettings,
                color: e.target.value,
              })
            }
            onChangeFontSize={(e) =>
              setPositionSettings({
                ...positionSettings,
                fontSize: e.target.value,
              })
            }
            changeBoldValue={(e) =>
              setPositionSettings({ ...positionSettings, bold: e.target.value })
            }
            onChangeUnderline={(e) =>
              setPositionSettings({
                ...positionSettings,
                underline: e.target.checked,
              })
            }
            showUnderline={true}
            onChangeLeftPossition={(e) =>
              setPositionSettings({
                ...positionSettings,
                left: e.target.value,
              })
            }
            onChangeTopPossition={(e) =>
              setPositionSettings({ ...positionSettings, top: e.target.value })
            }
          />
        )}
      </InputDiv>
      <InputDiv>
        <div>
          <InputLabel>Phone: </InputLabel>
          <Input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <Button
          onClick={() => setPhoneSettings({ ...phoneSettings, open: !phoneSettings.open })}
        >
          {!phoneSettings.open ? "options" : "close"}
        </Button>
        {phoneSettings.open && (
          <OptionsBox
            exitBox={() => setPhoneSettings({ ...phoneSettings, open: false })}
            change={(e) =>
              setPhoneSettings({ ...phoneSettings, color: e.target.value })
            }
            onChangeFontSize={(e) =>
              setPhoneSettings({ ...phoneSettings, fontSize: e.target.value })
            }
            changeBoldValue={(e) =>
              setPhoneSettings({ ...phoneSettings, bold: e.target.value })
            }
            onChangeUnderline={(e) =>
              setPhoneSettings({
                ...phoneSettings,
                underline: e.target.checked,
              })
            }
            showUnderline={true}
            showIconURL={true}
            showIconWidth={true}
            showIconLeftSpace={true}
            onChangeLeftPossition={(e) =>
              setPhoneSettings({ ...phoneSettings, left: e.target.value })
            }
            onChangeTopPossition={(e) =>
              setPhoneSettings({ ...phoneSettings, top: e.target.value })
            }
            onChangeIconURL={(e) =>
              setPhoneSettings({ ...phoneSettings, iconUrl: e.target.value })
            }
            onChangeIconWidth={(e) =>
              setPhoneSettings({ ...phoneSettings, iconWidth: e.target.value })
            }
            onChangeIconLeftSpace={(e) =>
              setPhoneSettings({
                ...phoneSettings,
                iconLeftSpace: e.target.value,
              })
            }
          />
        )}
      </InputDiv>
      <InputDiv>
        <div>
          <InputLabel>Email: </InputLabel>
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button
          onClick={() => setEmailSettings({ ...emailSettings, open: !emailSettings.open })}
        >
          {!emailSettings.open ? "options" : "close"}
        </Button>
        {emailSettings.open && (
          <OptionsBox
            exitBox={() => setEmailSettings({ ...emailSettings, open: false })}
            change={(e) =>
              setEmailSettings({ ...emailSettings, color: e.target.value })
            }
            onChangeFontSize={(e) =>
              setEmailSettings({ ...emailSettings, fontSize: e.target.value })
            }
            changeBoldValue={(e) =>
              setEmailSettings({ ...emailSettings, bold: e.target.value })
            }
            onChangeUnderline={(e) =>
              setEmailSettings({
                ...emailSettings,
                underline: e.target.checked,
              })
            }
            showUnderline={true}
            showIconURL={true}
            showIconWidth={true}
            showIconLeftSpace={true}
            onChangeLeftPossition={(e) =>
              setEmailSettings({ ...emailSettings, left: e.target.value })
            }
            onChangeTopPossition={(e) =>
              setEmailSettings({ ...emailSettings, top: e.target.value })
            }
            onChangeIconURL={(e) =>
              setEmailSettings({ ...emailSettings, iconUrl: e.target.value })
            }
            onChangeIconWidth={(e) =>
              setEmailSettings({ ...emailSettings, iconWidth: e.target.value })
            }
            onChangeIconLeftSpace={(e) =>
              setEmailSettings({
                ...emailSettings,
                iconLeftSpace: e.target.value,
              })
            }
          />
        )}
      </InputDiv>
      <InputDiv>
        <div>
          <InputLabel>Website: </InputLabel>
          <Input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <Button
          onClick={() => setWebsiteSettings({ ...websiteSettings, open: !websiteSettings.open })}
        >
            {!websiteSettings.open ? "options" : "close"}
        </Button>
        {websiteSettings.open && (
          <OptionsBox
            exitBox={() =>
              setWebsiteSettings({ ...websiteSettings, open: false })
            }
            change={(e) =>
              setWebsiteSettings({ ...websiteSettings, color: e.target.value })
            }
            onChangeFontSize={(e) =>
              setWebsiteSettings({
                ...websiteSettings,
                fontSize: e.target.value,
              })
            }
            changeBoldValue={(e) =>
              setWebsiteSettings({ ...websiteSettings, bold: e.target.value })
            }
            onChangeUnderline={(e) =>
              setWebsiteSettings({
                ...websiteSettings,
                underline: e.target.checked,
              })
            }
            showUnderline={true}
            onChangeLeftPossition={(e) =>
              setWebsiteSettings({ ...websiteSettings, left: e.target.value })
            }
            onChangeTopPossition={(e) =>
              setWebsiteSettings({ ...websiteSettings, top: e.target.value })
            }
          />
        )}
      </InputDiv>
    </div>
  );
};

export default ContactDetails;
