import React, { useState } from "react";
import { View } from "react-native";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";
import styled from "styled-components";

import { InputErrorLabel, InputText } from "../Input/styled";
import { IInputIcon } from "../helpers/icon.creator";

type RadioButtonFunctionProps = {
  inputPlaceholder?: string;
  inputName: string;
  fieldState: any;
  options: RadioButtonProps[];
  onValueChange: any;
  icon?: IInputIcon;
} & RadioButtonProps;

export const InputContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  background-color: #ddf6ff;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: 3px;
  margin-left: 3px;
`;

export default function RadioButton({
  fieldState,
  inputPlaceholder,
  onValueChange,
  options,
}: RadioButtonFunctionProps) {
  const { invalid, error } = fieldState;

  const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>(options);

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    const [{ selected }] = radioButtonsArray.filter((radio) => radio.selected);

    setRadioButtons(radioButtonsArray);

    onValueChange(selected);
  }

  return (
    <View>
      <InputContainer style={{ flexDirection: "row" }}>
        {inputPlaceholder && <InputText>{inputPlaceholder}</InputText>}
        <RadioGroup
          layout="row"
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          {...options}
        />
      </InputContainer>
      {invalid && <InputErrorLabel>{error.message}</InputErrorLabel>}
    </View>
  );
}
