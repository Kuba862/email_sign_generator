import React from 'react';
import FontSize from './FontSize';
import Color from './Color';
import Bold from './Bold';
import Underline from './Underline';
import IconURL from './IconURL';
import IconWidth from './IconWidth';
import LeftPosition from './LeftPosition';
import TopPosition from './TopPosition';
import IconLeftSpace from './IconLeftSpace';
import { Options } from '../../styled/Input.styled';

const OptionsBox = ({
  change,
  exitBox,
  font_size_value,
  onChangeFontSize,
  changeBoldValue,
  onChangeUnderline,
  onChangeTopPossition,
  showUnderline,
  showIconURL,
  showIconWidth,
  onChangeLeftPossition,
  onChangeIconURL,
  onChangeIconWidth,
  showIconLeftSpace,
  onChangeIconLeftSpace,
}) => {
  return (
    <Options>
      <FontSize
        font_name="Font Size"
        font_size_value={font_size_value}
        onChangeFontSize={onChangeFontSize}
      />
      <Color change={change} />
      <Bold changeBoldValue={changeBoldValue} />
      {showUnderline && <Underline onChangeUnderline={onChangeUnderline} />}
      {showIconURL && <IconURL onChangeIconURL={onChangeIconURL} />}
      {showIconWidth && <IconWidth onChangeIconWidth={onChangeIconWidth} />}
      {showIconLeftSpace && (
        <IconLeftSpace onChangeIconLeftSpace={onChangeIconLeftSpace} />
      )}
      <LeftPosition onChangeLeftPossition={onChangeLeftPossition} />
      <TopPosition onChangeTopPossition={onChangeTopPossition} />
    </Options>
  );
};

export default OptionsBox;
