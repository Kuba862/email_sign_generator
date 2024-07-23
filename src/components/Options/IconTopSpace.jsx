import React from 'react'

const IconTopSpace = ({iconTopValue, onChangeIconTopSpace}) => {
  return (
    <div>
        <label htmlFor="icon_top_space">Icon top space</label>
        <input type="number" name="icon_top_space" value={iconTopValue} onChange={onChangeIconTopSpace} />
    </div>
  )
}

export default IconTopSpace