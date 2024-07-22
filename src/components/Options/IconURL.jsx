import React from 'react'

const IconURL = ({onChangeIconURL}) => {
  return (
    <div>
        <label htmlFor="icon_url">Icon URL</label>
        <input type="text" name="icon_url" onChange={onChangeIconURL} />
    </div>
  )
}

export default IconURL