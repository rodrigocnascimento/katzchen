import { View } from "react-native";
import {
  InputContainer,
  InputLabel,
  InputErrorLabel,
  InputText,
} from "./styled";

import { IInputIcon } from "../helpers/icon.creator";

import { Ionicons } from "@expo/vector-icons";

interface InputProps {
  name?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  icon?: IInputIcon;
  value?: any;
  onChangeText?: (text: string) => void;
  fieldState?: any;
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

  return <IconProvider name={iconName} size={iconSize} color={iconColor} />;
}

const Input = ({
  name,
  type,
  label,
  icon,
  value,
  onChangeText,
  fieldState,
  ...inputProps
}: InputProps) => {
  const { invalid, error } = fieldState;

  return (
    <View>
      <InputContainer>
        {label && <InputLabel>{label}</InputLabel>}
        <InputIcon icon={icon} invalid={invalid} />
        <InputText
          secureTextEntry={type === "password"}
          onChangeText={onChangeText}
          {...inputProps}
        />
      </InputContainer>
      {invalid && <InputErrorLabel>{error.message}</InputErrorLabel>}
    </View>
  );
};

export default Input;
