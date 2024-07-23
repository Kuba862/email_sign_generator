import React from 'react';

const IconLeftSpace = ({ onChangeIconLeftSpace, iconLeftSpaceValue }) => {
  return (
    <div>
      <label htmlFor="icon_left_space">Icon left space</label>
      <input
        type="number"
        name="icon_left_space"
        onChange={onChangeIconLeftSpace}
        value={iconLeftSpaceValue}
      />
    </div>
  );
};

export default IconLeftSpace;
