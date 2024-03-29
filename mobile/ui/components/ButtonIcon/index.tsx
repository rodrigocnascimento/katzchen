import { GestureResponderEvent } from "react-native";
import styled from "styled-components/native";

import { IInputIcon } from "../helpers/icon.creator";

const Button = styled.TouchableOpacity.attrs(
  (props: { rounded: boolean }) => props
)`
  width: ${(props) => (props.rounded ? "48px" : "130px")};
  elevation: 5;
  border-radius: ${(props) => (props.rounded ? "64px" : "10px")};
  padding-vertical: 10px;
  padding-horizontal: 12px;
  background-color: #e76c27;
  margin-right: 10px;
  flex-direction: row;
  align-items: center;
`;

const ButtonTitle = styled.Text.attrs(
  (props: { color: string; fontSize: string }) => props
)`
  flex: 1;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "18px")};
  color: ${(props) => props.color};
  font-weight: bold;
  padding-left: 5px;
`;

type ButtonIconProps = {
  title?: string;
  color?: string;
  rounded?: boolean;
  fontSize?: any;
  onPress?: (event: GestureResponderEvent) => Promise<void> | void | undefined;
  icon: IInputIcon;
};

function ButtonText({
  title,
  color,
  fontSize,
}: {
  [i: string]: string | undefined;
}) {
  if (!title) return <></>;

  return (
    <ButtonTitle color={color} fontSize={fontSize}>
      {title}
    </ButtonTitle>
  );
}

const ButtonIcon = ({
  title,
  color,
  rounded,
  onPress,
  fontSize,
  icon,
}: ButtonIconProps) => {
  const {
    color: iconColor,
    name: iconName,
    size: iconSize,
    provider: IconProvider,
    position,
  } = icon;

  return (
    <Button onPress={onPress} rounded={rounded}>
      {position === "right" && (
        <ButtonText
          title={title}
          fontSize={fontSize}
          color={color || iconColor}
        />
      )}

      <IconProvider name={iconName} size={iconSize} color={iconColor} />

      {position === "left" && (
        <ButtonText
          title={title}
          fontSize={fontSize}
          color={color || iconColor}
        />
      )}
    </Button>
  );
};

export default ButtonIcon;
