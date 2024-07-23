import React from 'react'

const IconURL = ({onChangeIconURL, iconURLvalue}) => {
  return (
    <div>
        <label htmlFor="icon_url">Icon URL</label>
        <input type="text" name="icon_url" onChange={onChangeIconURL} value={iconURLvalue} />
    </div>
  )
}

export default IconURL