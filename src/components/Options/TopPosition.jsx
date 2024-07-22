import React from 'react'

const TopPosition = ({onChangeTopPossition}) => {
  return (
    <div>
        <label htmlFor="top_position">Top Position</label>
        <input type="number" name="top_position" onChange={onChangeTopPossition} />
    </div>
  )
}

export default TopPosition