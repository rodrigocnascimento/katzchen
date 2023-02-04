import { useField } from "@unform/core";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, TextInput } from "react-native";
import {
  InputContainer,
  InputLabel,
  InputErrorLabel,
  InputText,
} from "./styled";

import { IInputIcon } from "../helpers/icon.creator";

interface IInputText extends TextInput {
  value: string;
}

interface InputProps {
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  icon: IInputIcon;
}

const Input = ({
  name,
  type,
  onChangeText,
  label,
  icon,
  ...inputProps
}: InputProps) => {
  let {
    color: iconColor = "#000",
    name: iconName,
    size: iconSize = 32,
    provider: IconProvider,
  } = icon;

  const inputRef = useRef<IInputText>(null);
  const [inputDirty, setInputDirty] = useState(false);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  if (error) {
    iconName = "exclamation-triangle";
    iconColor = "orange";
  }

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value;
        return "";
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value });
          inputRef.current.value = value;
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: "" });
          inputRef.current.value = "";
        }
      },
    });
  }, [fieldName, registerField]);

  const handleChangeText = useCallback(
    (text: string) => {
      setInputDirty(true);

      if (inputRef.current) inputRef.current.value = text;
      if (onChangeText) onChangeText(text);
    },
    [onChangeText]
  );

  /** // 🪳
   * ~Another day, another bug~
   * probably this gonna be a good mistake
   * since when the input is cleared, also loses
   * it's validation
   */
  const handleClearInput = () => {
    inputRef.current?.clear();
    setInputDirty(false);
  };

  return (
    <View>
      <InputContainer>
        {label && <InputLabel>{label}</InputLabel>}
        {icon && (
          <IconProvider name={iconName} size={iconSize} color={iconColor} />
        )}
        <InputText
          ref={inputRef}
          defaultValue={defaultValue}
          secureTextEntry={type === "password"}
          onChangeText={handleChangeText}
          {...inputProps}
        />
        {inputDirty && (
          <IconProvider
            name="backspace"
            size={iconSize}
            color="#000"
            onPress={handleClearInput}
          />
        )}
      </InputContainer>
      {error && <InputErrorLabel>{error}</InputErrorLabel>}
    </View>
  );
};

export default Input;
