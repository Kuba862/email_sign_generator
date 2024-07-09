import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/Global';
import { Input, InputDiv, InputLabel } from '../../styled/Input.styled';

const LogoInput = () => {
  const { logoUrl, setLogoUrl, logoWidth, setLogoWidth } =
    useContext(GlobalContext);
  return (
    <div>
      <InputDiv>
        <InputLabel>Logo image URL: </InputLabel>
        <Input
          type="text"
          value={logoUrl}
          onChange={(e) => setLogoUrl(e.target.value)}
        />
      </InputDiv>
      {logoUrl && (
        <InputDiv>
          <InputLabel>Logo Width: </InputLabel>
          <Input
            type="number"
            value={logoWidth}
            onChange={(e) => setLogoWidth(e.target.value)}
          />
        </InputDiv>
      )}
    </div>
  );
};

export default LogoInput;
