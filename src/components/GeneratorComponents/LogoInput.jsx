import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/Global';
import { Input, InputDiv, InputLabel, Button } from '../../styled/Input.styled';
import OptionBox from '../Options/OptionsBox';

const LogoInput = () => {
  const {
    logoUrl,
    setLogoUrl,
    logoSettings,
    setLogoSettings,
  } = useContext(GlobalContext);
  return (
    <div>
      <InputDiv>
        <div>
          <InputLabel>Logo image URL: </InputLabel>
          <Input
            type="text"
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
          />
        </div>
        <Button
          onClick={() =>
            setLogoSettings({ ...logoSettings, open: !logoSettings.open })
          }
        >
          {!logoSettings.open ? 'options' : 'close'}
        </Button>
        {logoSettings.open && (
          <OptionBox
            showIconWidth={true}
            showIconLeftSpace={true}
            showTopPossition={true}
            showFontSize={false}
            showFontColor={false}
            iconLeftSpaceValue={logoSettings.left}
            topValue={logoSettings.top}
            iconWidthValue={logoSettings.width}
            exitBox={() => setLogoSettings({ ...logoSettings, open: false })}
            onChangeIconWidth={(e) =>
              setLogoSettings({ ...logoSettings, width: e.target.value })
            }
            onChangeIconLeftSpace={(e) =>
              setLogoSettings({ ...logoSettings, left: e.target.value })
            }
            onChangeTopPossition={(e) =>
              setLogoSettings({ ...logoSettings, top: e.target.value })
            }
          />
        )}
      </InputDiv>
    </div>
  );
};

export default LogoInput;
