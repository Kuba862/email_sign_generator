import React from 'react'

const FontSize = ({ font_name, fontValue, onChangeFontSize }) => {
  return (
    <div>
        <label htmlFor="font_size">{font_name}</label>
        <input 
        type="number" 
        name="font_size" 
        value={fontValue} 
        onChange={onChangeFontSize} 
        />
    </div>
  )
}

export default FontSize