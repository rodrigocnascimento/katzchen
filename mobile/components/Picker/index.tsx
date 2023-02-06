import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { Picker, PickerProps } from "@react-native-picker/picker";

import styled from "styled-components";
import { iconCreator } from "../../components/helpers/icon.creator";
import { InputErrorLabel } from "../Input/styled";
import { PickerView } from "../../screens/MyPets/styled";
import { View } from "react-native";

export const InputPicker = styled(Picker)`
  padding: 10px;
  margin-left: 3px;
  font-size: 18px;
`;

interface SelectPickerProps extends Omit<PickerProps, "onValueChange"> {
  inputPlaceholder?: string;
  inputName: string;
  fieldState: any;
  onValueChange: any;
  selectedValue: any;
  options: {
    value: string | number;
    label: string;
  }[];
}

const SelectPicker = ({
  inputName,
  inputPlaceholder,
  options,
  fieldState,
  onValueChange,
  selectedValue,
  ...rest
}: SelectPickerProps) => {
  const { invalid, error } = fieldState;

  return (
    <View>
      <PickerView>
        {iconCreator(FontAwesome5, "cat", 32).getIcon({
          padding: 10,
        })}
        <InputPicker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={{ flex: 1 }}
          {...rest}
        >
          <Picker.Item
            style={{ fontSize: 22 }}
            label={inputPlaceholder || "Selecione uma opção"}
          />
          {options.map((option, i) => (
            <Picker.Item
              style={{ fontSize: 22 }}
              key={i}
              value={option.value}
              label={option.label}
            />
          ))}
        </InputPicker>
      </PickerView>
      {invalid && <InputErrorLabel>{error.message}</InputErrorLabel>}
    </View>
  );
};

export default SelectPicker;
