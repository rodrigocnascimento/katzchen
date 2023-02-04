import React, { useEffect, useRef, useState } from "react";

import { Picker, PickerProps } from "@react-native-picker/picker";

import { useField } from "@unform/core";

import styled from "styled-components";

export const InputPicker = styled(Picker)`
  padding: 10px;
  margin-left: 3px;
  font-size: 18px;
`;

interface SelectPickerProps extends Omit<PickerProps, "onValueChange"> {
  inputPlaceholder?: string;
  inputName: string;
  options: {
    value: string | number;
    label: string;
  }[];
}

const SelectPicker = ({
  inputName,
  inputPlaceholder,
  options,
  ...rest
}: SelectPickerProps) => {
  const pickerRef = useRef(null);

  const { fieldName, registerField, defaultValue } = useField(inputName);

  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: pickerRef.current,
      getValue: (ref) => {
        return ref.props.value || "";
      },
      clearValue: (ref) => {
        ref.props.onValueChange(ref.props.placeholder.value);
      },
      setValue: (_, value: string) => {
        setSelectedValue(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <InputPicker
      ref={pickerRef}
      selectedValue={selectedValue}
      onValueChange={(itemValue, itemIndex) => {
        console.log("serio");
        return setSelectedValue(itemValue);
      }}
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
  );
};

export default SelectPicker;
