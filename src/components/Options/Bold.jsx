import React from 'react';

const Bold = ({changeBoldValue}) => {

    const boldValue = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];

  return (
    <div>
      <label htmlFor="bold">Bold</label>
      <select name="bold" onChange={changeBoldValue} >
        <option value="400">--select bold value--</option>
        {boldValue.map((value, index) => {
          return (
            <option key={index} value={value} >{value}</option>
          )
        })}
      </select>
    </div>
  );
};

export default Bold;
