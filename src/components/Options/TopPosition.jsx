import React from 'react'

const TopPosition = ({onChangeTopPossition, topValue}) => {
  return (
    <div>
        <label htmlFor="top_position">Text top space</label>
        <input type="number" name="top_position" onChange={onChangeTopPossition} value={topValue} />
    </div>
  )
}

export default TopPosition