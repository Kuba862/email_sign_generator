import React from 'react'

const LeftPosition = ({onChangeLeftPossition}) => {
  return (
    <div>
        <label htmlFor="right_position">Left Position</label>
        <input type="number" name="right_position" onChange={onChangeLeftPossition} />
    </div>
  )
}

export default LeftPosition;