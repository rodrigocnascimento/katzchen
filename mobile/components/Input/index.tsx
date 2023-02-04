import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, TextInput } from "react-native";
import {
  InputContainer,
  InputLabel,
  InputErrorLabel,
  InputText,
} from "./styled";

import { IInputIcon } from "../helpers/icon.creator";

interface InputProps {
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  icon: IInputIcon;
  onChangeText?: (text: string) => void;
  validationErrors?: any;
}

const Input = ({
  name,
  type,
  label,
  icon,
  onChangeText,
  validationErrors,
  ...inputProps
}: InputProps) => {
  let {
    color: iconColor = "#000",
    name: iconName,
    size: iconSize = 32,
    provider: IconProvider,
  } = icon;

  const [inputDirty, setInputDirty] = useState(false);

  if (validationErrors) {
    iconName = "exclamation-triangle";
    iconColor = "orange";
  }

  const handleChangeText = useCallback(
    (text: string) => {
      setInputDirty(!!text);
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
      {validationErrors && (
        <InputErrorLabel>{JSON.stringify(validationErrors)}</InputErrorLabel>
      )}
    </View>
  );
};

export default Input;
