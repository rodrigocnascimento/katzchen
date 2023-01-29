import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

const Button = styled(TouchableOpacity)`
  width: 130px;
  elevation: 5;
  border-radius: 10px;
  padding-vertical: 10px;
  padding-horizontal: 12px;
  background-color: #e76c27;
  margin-right: 20px;
  flex-direction: row;
  align-items: center;
`;

const ButtonText = styled(Text)`
  flex: 1;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  float: left;
`;

const ButtonIcon = ({ title, onPress, icon }: any) => (
  <Button onPress={onPress}>
    {icon}
    {title && <ButtonText> {title}</ButtonText>}
  </Button>
);

export default ButtonIcon;
