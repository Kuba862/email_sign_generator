import React from 'react';

const Underline = ({onChangeUnderline}) => {
  return (
    <div>
      <label htmlFor="underline">Underline</label>
      <input type="checkbox" name="underline" onChange={onChangeUnderline} />
    </div>
  );
};

export default Underline;
