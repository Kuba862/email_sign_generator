import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/Global';
import { TextOptions } from '../../styled/TextOptions.styled';

const TextStyleOptions = () => {
  const {
    textColor,
    setTextColor,
    fontSize,
    setFontSize,
    textTopSpaces,
    setTextTopSpaces,
    textLeftSpace,
    setTextLeftSpace,
    textRightSpace,
    setTextRightSpace,
  } = useContext(GlobalContext);

  return (
    <TextOptions>
      <div>
        <label>Font color: </label>
        <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
      </div>
      <div>
        <label>Font Size: </label>
        <input
            type="number"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          />
      </div>
      <div>
        <label>Text top Spaces: </label>
        <input
            type="number"
            value={textTopSpaces}
            onChange={(e) => setTextTopSpaces(e.target.value)}
          />
      </div>
      <div>
        <label>elements left Space: </label>
        <input
            type="number"
            value={textLeftSpace}
            onChange={(e) => setTextLeftSpace(e.target.value)}
          />
      </div>
      <div>
        <label>Text right Space: </label>
        <input
            type="number"
            value={textRightSpace}
            onChange={(e) => setTextRightSpace(e.target.value)}
          />
      </div>
    </TextOptions>
  );
};

export default TextStyleOptions;
