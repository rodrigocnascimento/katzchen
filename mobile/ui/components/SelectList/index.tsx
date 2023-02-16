import { Ionicons } from "@expo/vector-icons";
import { Picker, PickerProps } from "@react-native-picker/picker";
import React from "react";
import { View } from "react-native";
import styled from "styled-components";

import { PickerView } from "../../screens/MyPets/styled";
import { InputErrorLabel } from "../Input/styled";
import { IInputIcon } from "../helpers/icon.creator";

export const SelectPicker = styled(Picker)`
  padding: 10px;
  margin-left: 3px;
  font-size: 18px;
`;

export interface SelectPickerProps extends Omit<PickerProps, "onValueChange"> {
  inputPlaceholder?: string;
  inputName: string;
  fieldState: any;
  onValueChange: (itemValue: unknown, itemIndex: number) => void;
  selectedValue: string | number | undefined;
  icon?: IInputIcon;
  options: {
    value: string | number;
    label: string;
  }[];
}

function InputIcon({ icon, invalid }: Record<string, any>) {
  let {
    color: iconColor = "#000",
    name: iconName,
    size: iconSize = 32,
    provider: IconProvider,
  } = icon || {
    provider: Ionicons,
  };

  if (invalid && !icon) {
    iconName = "warning";
    iconColor = "orange";
  } else if (invalid && icon) {
    iconName = "exclamation-triangle";
    iconColor = "orange";
    iconSize = 24;
  }

  return (
    <IconProvider
      name={iconName}
      size={iconSize}
      color={iconColor}
      style={{ padding: 10 }}
    />
  );
}

export default function SelectList({
  inputName,
  inputPlaceholder,
  options,
  fieldState,
  onValueChange,
  selectedValue,
  icon,
  ...rest
}: SelectPickerProps) {
  const { invalid, error } = fieldState;

  return (
    <View>
      <PickerView>
        <InputIcon icon={icon} invalid={invalid} />
        <SelectPicker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={{ flex: 1 }}
          {...rest}
        >
          {inputPlaceholder && (
            <Picker.Item style={{ fontSize: 22 }} label={inputPlaceholder} />
          )}
          {!options?.length && (
            <Picker.Item style={{ fontSize: 22 }} label="Carregando..." />
          )}
          {options?.map((option, i) => (
            <Picker.Item
              style={{ fontSize: 22 }}
              key={i++}
              value={option.value}
              label={option.label}
            />
          ))}
        </SelectPicker>
      </PickerView>
      {invalid && <InputErrorLabel>{error.message}</InputErrorLabel>}
    </View>
  );
}
