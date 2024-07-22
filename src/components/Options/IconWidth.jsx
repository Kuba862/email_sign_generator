import React from 'react'

const IconWidth = ({onChangeIconWidth}) => {
  return (
    <div>
        <label htmlFor="icon_width">Icon Width</label>
        <input type="number" name="icon_width" onChange={onChangeIconWidth} />
    </div>
  )
}

export default IconWidth