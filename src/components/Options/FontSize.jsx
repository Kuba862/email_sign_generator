import React from 'react'

const FontSize = ({ font_name, font_size_value, onChangeFontSize }) => {
  return (
    <div>
        <label htmlFor="font_size">{font_name}</label>
        <input 
        type="number" 
        name="font_size" 
        value={font_size_value} 
        onChange={onChangeFontSize} 
        />
    </div>
  )
}

export default FontSize