import React from 'react'

const IconLeftSpace = ({onChangeIconLeftSpace}) => {
  return (
    <>
        <label htmlFor="icon_left_space">Icon Left Space</label>
        <input type="number" name="icon_left_space" onChange={onChangeIconLeftSpace} />
    </>
  )
}

export default IconLeftSpace