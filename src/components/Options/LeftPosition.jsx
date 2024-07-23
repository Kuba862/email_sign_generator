import React from 'react';

const LeftPosition = ({onChangeLeftPossition, leftValue}) => {
  return (
    <div>
        <label htmlFor="right_position">Text left space</label>
        <input type="number" name="right_position" onChange={onChangeLeftPossition} value={leftValue} />
    </div>
  )
}

export default LeftPosition;