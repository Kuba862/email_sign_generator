import React from 'react'

const IconWidth = ({onChangeIconWidth, iconWidthValue}) => {
  return (
    <div>
        <label htmlFor="icon_width">Icon Width</label>
        <input type="number" name="icon_width" onChange={onChangeIconWidth} value={iconWidthValue} />
    </div>
  )
}

export default IconWidth