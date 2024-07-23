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
import IconTopSpace from './IconTopSpace';
import { Options } from '../../styled/Input.styled';

const OptionsBox = ({
  change,
  onChangeFontSize,
  changeBoldValue,
  onChangeUnderline,
  onChangeTopPossition,
  showUnderline,
  showIconURL,
  showIconWidth,
  showFontSize,
  onChangeLeftPossition,
  onChangeIconURL,
  onChangeIconWidth,
  showIconLeftSpace,
  onChangeIconLeftSpace,
  showFontColor,
  showFontBold,
  showLeftPossition,
  showTopPossition,
  leftValue,
  topValue,
  fontValue,
  iconLeftSpaceValue,
  iconWidthValue,
  iconURLvalue,
  onChangeIconTopSpace,
  showIconTopSpace,
  iconTopValue
}) => {
  return (
    <Options>
      {showFontSize && <FontSize
        font_name="Font Size"
        fontValue={fontValue}
        onChangeFontSize={onChangeFontSize}
      />}
      {showFontColor && <Color change={change} />}
      {showFontBold && <Bold changeBoldValue={changeBoldValue} />}
      {showUnderline && <Underline onChangeUnderline={onChangeUnderline} />}
      {showIconURL && <IconURL onChangeIconURL={onChangeIconURL} iconURLvalue={iconURLvalue} />}
      {showIconWidth && <IconWidth onChangeIconWidth={onChangeIconWidth} iconWidthValue={iconWidthValue} />}
      {showIconTopSpace && <IconTopSpace onChangeIconTopSpace={onChangeIconTopSpace} iconTopValue={iconTopValue} />}
      {showIconLeftSpace && (
        <IconLeftSpace onChangeIconLeftSpace={onChangeIconLeftSpace} iconLeftSpaceValue={iconLeftSpaceValue} />
      )}
      {showLeftPossition && <LeftPosition onChangeLeftPossition={onChangeLeftPossition} leftValue={leftValue} />}
      {showTopPossition && <TopPosition onChangeTopPossition={onChangeTopPossition} topValue={topValue} />}
    </Options>
  );
};

export default OptionsBox;
