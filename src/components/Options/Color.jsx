import React from 'react';

const Color = ({ colorValue, change }) => {
  return (
    <div className='input-color' >
    <label htmlFor="color">Text color</label>
    <input type="color" value={colorValue} onChange={change} />
    </div>
  )
}

export default Color