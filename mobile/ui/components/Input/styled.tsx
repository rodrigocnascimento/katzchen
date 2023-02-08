import { View, Text, TextInput } from "react-native";
import styled from "styled-components";

export const InputContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  background-color: #ddf6ff;
  border-radius: 5px;
  padding: 10px;
  margin: 3px;
`;

export const InputLabel = styled(Text)`
  font-size: 18px;
  margin-bottom: 4px;
`;

export const InputErrorLabel = styled(Text)`
  font-size: 14px;
  color: red;
`;

export const InputText = styled(TextInput)`
  flex: 1;
  padding: 3px;
  margin-left: 10px;
  align-self: center;
  font-size: 26px;
`;
